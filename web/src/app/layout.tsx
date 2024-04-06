import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "./config";
import { ThemeProvider } from "next-themes";
import { GGRegular } from "@/styles/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "https://comcord.vision/opengraph-image.png" }],
    creator: "@comcord",
  },
  metadataBase: new URL("https://comcord.vision"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      {/* TODO: add font-sans antialiased back to body className*/}
      <body className={GGRegular.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>

        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
