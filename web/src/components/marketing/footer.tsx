"use client";

// import dynamic from "next/dynamic";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Discord, Twitter } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/app/config";

// const ThemeToggle = dynamic(() => import("~/components/theme-toggle"), {
//   ssr: false,
// });

export function SiteFooter(props: { className?: string }) {
  const dimtext = useRef(false);
  const pathname = usePathname();
  if (pathname !== "/") {
    dimtext.current = true;
  }
  return (
    <footer
      className={cn(
        "flex flex-col items-center  justify-between border-t p-2 md:flex-row md:px-8",
        props.className
      )}
    >
      <div
        className={cn(
          "my-4   md:flex md:items-center",
          dimtext && "hidden text-muted-foreground"
        )}
      >
        <Link href="/" className=" flex justify-center gap-2  md:mr-2">
          {}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cc-logo-white.svg"
            alt="ComCord Logo"
            className="h-6 w-6"
          />
          <p className="text-lg font-medium md:hidden">{siteConfig.name}</p>
        </Link>
        <p className="col-span-full row-start-2 text-start text-sm leading-loose  md:flex-1 md:text-left">
          Built for great memes at work 🤫.{" "}
        </p>

        {/* <div className="col-start-2 row-start-1 flex h-12 justify-end">
          <ThemeToggle />
        </div> */}
      </div>
      <Link
        href={siteConfig.discord}
        className={cn("hidden", dimtext.current && "flex")}
      >
        <Button className={"text-bluetiful"} variant={"secondary"}>
          Support
        </Button>
      </Link>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 py-4 text-sm md:flex-row",
          dimtext && "hidden text-muted-foreground"
        )}
      >
        <Link href={siteConfig.discord}>
          <Discord className={"h-4 w-5 text-bluetiful"} />
        </Link>
        <Link href={siteConfig.twitter}>
          <Icons.Twitter className={"h-4 w-5 text-sky-600"} />
        </Link>

        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">T&C</Link>
      </div>
    </footer>
  );
}
