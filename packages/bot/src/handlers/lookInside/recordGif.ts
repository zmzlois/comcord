
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import sizeOf from "buffer-image-size";
import GifEncoder from 'gif-encoder';
// @ts-ignore
import PNG from "png-js";
import type { Page } from "puppeteer";

export async function decode(png: any) {
    return new Promise((r) => {
        png.decode((pixels: any) => r(pixels));
    });
}

export async function recordGif(
    imagePath: string,
    page: Page,
    screenshot: Buffer,
) {
    const dimensions = sizeOf(screenshot);
    const encoder = new GifEncoder(dimensions.width, dimensions.height);
    encoder.setRepeat(0);
    encoder.setDelay(300);
    encoder.setQuality(10);
    encoder.pipe(fs.createWriteStream(imagePath));
    encoder.writeHeader();
    for (let i = 0; i < 10; i++) {
        await gifAddFrame(page, encoder);
    }
    encoder.finish();
}

export async function gifAddFrame(page: Page, encoder: GifEncoder) {
    const pngBuffer = await page.screenshot({
        fullPage: true,
    });
    const png = new PNG(pngBuffer);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await decode(png).then((pixels: any) => encoder.addFrame(pixels));
}
