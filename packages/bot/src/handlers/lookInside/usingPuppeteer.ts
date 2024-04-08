import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";

import { recordGif } from "./recordGif.js";

import fs from "fs";
import path from "path";

export async function getScreenShot(html: string, gif = false) {
    const uuid = uuidv4();
    const imagePath = path.join(process.cwd(), `${uuid}.html`);
    fs.writeFileSync(imagePath, html);
    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(`file://${imagePath}`);
    const screenshot = await page.screenshot({
        fullPage: true,
        path: `${imagePath.replace(".", "_")}.jpg`,
    }); // For Screenshots
    fs.unlinkSync(imagePath);
    if (!gif) {
        await browser.close();
        return `${imagePath.replace(".", "_")}.jpg`;
    }
    fs.unlinkSync(`${imagePath.replace(".", "_")}.jpg`);
    const gifImagePath = imagePath.replace(".", "_") + ".gif";
    await recordGif(gifImagePath, page, screenshot); // For Gifs
    await browser.close();
    // return screenshot;
    return gifImagePath;
}
