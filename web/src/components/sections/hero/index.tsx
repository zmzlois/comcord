"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/ui/icons";
import { Typewriter } from "react-simple-typewriter";
import { Balancer } from "react-wrap-balancer";

import { GGRegular } from "@/styles/fonts";
import EmailInput from "./email-input";
import TabComponent, { AppComponent } from "./tab";

const Lines = [
  "Sync text",
  "Save time on meetings",

  "Empower deep work",
  "Probably the most ridiculous team collab tool every created?",
  "Try /meme",
];

export function HeroSection() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const _scrolling = window.scrollY > 0;
      if (_scrolling !== scrolling) setScrolling(_scrolling);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    if (!copied) {
      return;
    } else {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <div
        className={cn(
          "rounded-b-lg bg-gradient-to-tr from-persian-pink via-brink-pink to-baby-purple",
          {
            "rounded-lg": scrolling,
          }
        )}
      >
        <div className="container mx-auto  2xl:max-h-[900px]">
          <div className="flex flex-col sm:flex-row ">
            <div className="z-10 flex min-h-[65vh] w-full max-w-4xl flex-col items-center justify-center  px-5 text-center md:min-h-[80vh] xl:px-0 2xl:max-h-[70vh] 2xl:min-h-[30vh]">
              <a
                href="https://twitter.com/comcord_team"
                target="_blank"
                rel="noreferrer"
                className="black-boxshadow border-smokey-black mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full border-[3px] bg-sky-100 px-7 py-2 text-background transition-all hover:bg-foreground hover:shadow-none focus:border-foreground focus:bg-background  focus:text-foreground"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/black-logo.png"
                  alt="ComCord Logo"
                  className="h-5 w-5 text-sky-500"
                />
                <p className="text-sm font-semibold">Introducing ComCord</p>
              </a>
              <div
                className="animate-fade-up bg-gradient-to-br from-indigo-700 to-slate-900 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
                style={{
                  animationDelay: "0.20s",
                  animationFillMode: "forwards",
                }}
              >
                <Balancer className="flex flex-col">
                  <h1>Agile Stand Ups</h1>
                  <h5 className="text-3xl leading-9">
                    on the app everyone uses
                  </h5>
                </Balancer>
              </div>
              <div
                className="font-sm mt-6  h-10 w-fit animate-fade-up text-center font-semibold text-background/80 opacity-0 md:text-xl"
                style={{
                  animationDelay: "0.30s",
                  animationFillMode: "forwards",
                }}
              >
                <Typewriter
                  words={Lines}
                  cursorBlinking={true}
                  cursorStyle="|"
                  cursor={true}
                  loop={true}
                  cursorColor="#A0041E"
                  typeSpeed={70}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </div>
              <div
                className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
                style={{
                  animationDelay: "0.40s",
                  animationFillMode: "forwards",
                }}
              >
                <EmailInput />

                {/*<div className="rounded-lg border border-muted-foreground">*/}
                {/*  <div className="rounded-sm bg-background/70 p-2 text-[#99aab5]">*/}
                {/*    <div className="relative flex flex-col items-center justify-between gap-2 px-4 py-0.5 text-sm text-foreground sm:flex-row">*/}
                {/*      <p>https://comcord.vision/invite-link</p>*/}
                {/*      <div className=" flex items-center">*/}
                {/*        <button*/}
                {/*          className=" flex  justify-center space-x-1 text-left"*/}
                {/*          onClick={async () => {*/}
                {/*            await window.navigator.clipboard.writeText(*/}
                {/*              "https://comcord.vision/invite-link",*/}
                {/*            );*/}
                {/*            setCopied(true);*/}
                {/*          }}*/}
                {/*        >*/}
                {/*          {copied ? (*/}
                {/*            <Icons.CopySolid className="inline-flex  self-center " />*/}
                {/*          ) : (*/}
                {/*            <Icons.CopyOutline className="inline-flex self-center border text-muted-foreground " />*/}
                {/*          )}{" "}*/}
                {/*          <span>{copied ? "Copied!" : "Copy"}</span>*/}
                {/*        </button>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
            <div
              className={cn(
                "relative z-10  flex min-h-[80vh] max-w-4xl content-start items-start justify-center px-3 font-sans font-medium sm:w-full md:min-h-[100vh] xl:px-0",
                GGRegular.className
              )}
            >
              <div
                className="absolute left-2 z-20 w-full animate-fade-up opacity-0 md:left-6 md:top-20 xl:top-24 "
                style={{
                  animationDelay: "0.50s",
                  animationFillMode: "forwards",
                }}
              >
                {}
                <Image
                  src="/hero-base.svg"
                  width={400}
                  height={540}
                  priority={true}
                  alt="ComCord Hero"
                  className="object-fit h-[540px] w-[400px] rounded-md border-background md:h-[585px] md:w-[410px] md:border-[0.5px]"
                />
              </div>
              <div className="absolute -right-4 top-40 z-30  md:right-48 md:top-[140px] xl:right-60 xl:top-[200px] ">
                {}
                <div
                  className="h-full w-full animate-fade-up rounded-sm bg-discord-black p-2 opacity-0"
                  style={{
                    animationDelay: "0.70s",
                    animationFillMode: "forwards",
                  }}
                >
                  <TabComponent />
                </div>
              </div>
              <div
                className="absolute  bottom-[250px] right-[160px] z-40 animate-fade-up opacity-0 md:right-16 md:top-72 xl:bottom-0 xl:right-24 xl:top-[320px] 2xl:top-[340px]"
                style={{
                  animationDelay: "0.90s",
                  animationFillMode: "forwards",
                }}
              >
                {}
                <div className="w-full rounded-sm bg-discord-black p-2">
                  <AppComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-10 space-y-2 bg-background/20 py-20 text-center"
          id="features"
        >
          <Balancer className="text-4xl font-semibold text-foreground">
            It&rsquo;s basically a stand up bot helping you sync text to replace
            stand up meetings
          </Balancer>
          <h3 className="text-lg text-foreground/90">
            but we might have taken it too far
          </h3>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
