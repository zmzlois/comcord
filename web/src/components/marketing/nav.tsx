"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";

import { siteConfig } from "@/app/config";
import { MobileDropdown } from "@/components/mobile-nav";

function MarketingNavBar() {
  const pathname = usePathname();
  const blogPath = React.useRef(false);

  if (pathname.includes("blogs")) {
    blogPath.current = true;
  } else if (!pathname.includes("blogs")) {
    blogPath.current = false;
  }
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const _scrolling = window.scrollY;
      const top = window.scrollY === 0;
      if (_scrolling > 0) {
        setScrolling(true);
      } else if (_scrolling === 0) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [blogPath]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 mx-auto flex w-full max-w-[2500px]  items-center border-b-[3px] border-smoky-black  bg-desert-sun px-6 py-4 transition-all duration-500 ease-in-out",
          {
            "emerald-boxshadow black-boxshadow top-6 my-6 max-w-[380px] rounded-lg border-[3px] border-smoky-black md:max-w-[1100px]  ":
              scrolling,
          },
          {
            "w-full max-w-[2500px] border bg-background bg-opacity-60  px-4 shadow-none backdrop-blur backdrop-filter  md:px-6":
              blogPath.current,
          }
        )}
      >
        <div className="flex items-center content-start mr-8 space-x-4 md:space-x-8">
          <Link
            href="/"
            className={cn("hidden md:flex", {
              "mr-0 hidden md:hidden": blogPath.current,
            })}
          >
            {blogPath.current ? (
              <img
                src="/cc-logo-white.png"
                alt="ComCord Logo"
                className="w-8 h-8 mr-2"
              />
            ) : (
              <img
                src="/black-logo.png"
                alt="ComCord Logo"
                className="w-8 h-8 mr-2"
              />
            )}

            <span
              className={cn(
                "text-2xl font-extrabold tracking-tight text-slate-900",
                {
                  "text-antiflash-white": pathname.includes("blog"),
                }
              )}
            >
              {siteConfig.name}
            </span>
          </Link>
          <Link
            href={
              pathname === "/"
                ? "/blogs"
                : pathname === "/blogs"
                  ? "/"
                  : "/blogs"
            }
            className={cn(
              " flex   items-center rounded-full py-2 font-light tracking-wide text-smoky-black transition-all duration-500 hover:underline hover:underline-offset-4 md:px-4  md:text-xl",
              { "text-antiflash-white": pathname.includes("blogs") }
            )}
          >
            {blogPath.current && <ArrowLeft className="w-4 h-4 mr-2" />}
            <span className={"text-sm "}>
              {blogPath.current ? "Back" : "Blog"}
            </span>
          </Link>
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <MobileDropdown />
        </div>
        <div className={"ml-auto"}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center ">
                  {}

                  <a
                    href={siteConfig.discord}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "black-boxshadow transition:all md:text-md  items-center justify-center rounded-full border-[3px] bg-foreground  px-4 py-2 text-xs font-bold tracking-tight  text-slate-900 duration-200 ease-in-out hover:bg-foreground/80 hover:text-slate-800 hover:shadow-none focus:border-foreground focus:bg-smoky-black focus:text-antiflash-white md:inline-flex lg:text-lg",
                      {
                        "white-boxshadow bg-desert-sun text-smoky-black hover:bg-antiflash-white":
                          pathname.includes("blog"),
                      }
                    )}
                  >
                    <p>Discord Server</p>
                  </a>

                  {/*<Suspense>*/}
                  {/*  <DashboardLink />*/}
                  {/*</Suspense>*/}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Try commands in our server now</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </>
  );
}

export default MarketingNavBar;

function DashboardLink() {
  const { userId, isLoaded, orgId } = useAuth();

  console.log("userid", userId);

  if (!userId || !isLoaded) {
    return (
      <Link
        href="/signin"
        className="black-boxshadow transition:all inline-flex h-10 items-center justify-center rounded-full border-[3px] bg-bluetiful px-2 py-1 text-sm font-bold tracking-tight text-slate-50 duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-900 hover:shadow-none focus:border-foreground focus:bg-smoky-black focus:text-antiflash-white focus:shadow-none sm:px-4 sm:py-2 sm:text-lg"
      >
        <span>START NOW</span>

        <Icons.ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    );
  }

  return (
    <Link
      href={`/${orgId ?? userId}`}
      // href="/dashboard"
      className="black-boxshadow transition:all inline-flex h-10 items-center justify-center rounded-full border-[3px] bg-bluetiful px-4 py-2 text-lg font-bold tracking-tight text-slate-50 duration-200 ease-in-out hover:text-slate-200 hover:shadow-none focus:border-foreground focus:bg-smoky-black focus:text-antiflash-white focus:shadow-none"
    >
      Dashboard
      <Icons.ChevronRight className="w-4 h-4 ml-1" />
    </Link>
  );
}
