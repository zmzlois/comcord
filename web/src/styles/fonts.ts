import { Inter, Space_Grotesk } from "@next/font/google";
import LocalFont from "@next/font/local";

export const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});
export const fontCal = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-cal",
});

export const fontSpace = LocalFont({
    src: "./SpaceGrotesk.ttf",
    variable: "--font-space",
    display: "swap",
});

export const fontOpen = LocalFont({
    src: "./OpenSans.ttf",
    variable: "--font-open",
    display: "swap",
});

export const GGRegular = LocalFont({
    src: "./GGSans_Regular.woff2",
    variable: "--font-gg-regular",
    display: "swap",
});

export const GGSemiBold = LocalFont({
    src: "./GGSans_SemiBold.woff2",
    variable: "--font-gg-semi-bold",
    display: "swap",
});