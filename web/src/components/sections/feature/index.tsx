"use client";

import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Icons from "@/components/ui/icons";
import { Balancer } from "react-wrap-balancer";

import { marketingFeatures } from "@/app/config";

function Features() {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="flex justify-center">
      <div className="z-10 -my-8 mx-2 animate-fade-up gap-5 rounded-2xl border-[4px] border-antiflash-white bg-background p-5  pb-12 sm:container  sm:mx-0  xl:-my-16 xl:px-16">
        <div className="my-2 space-y-2">
          <h2 className="pt-4 text-center text-3xl font-bold md:text-4xl">
            What we do?
          </h2>

          <p className="pb-8 pt-4 text-center text-lg">
            <Balancer>Features got ourselves obsessed with</Balancer>
          </p>
        </div>
        <div className="mx-2 grid grid-cols-1 gap-5 md:grid-cols-3">
          {marketingFeatures.map((feature) => (
            <div
              key={feature.title}
              className={`hover:white-boxshadow group rounded-xl border-2 bg-foreground p-2 transition-all duration-300 hover:cursor-pointer hover:border-foreground hover:bg-dark-charcoal ${feature.color}`}
            >
              <CardHeader>
                <div className="text-2xl">{feature.icon}</div>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>
                  <div className="text-background group-hover:text-antiflash-white">
                    {feature.title}
                  </div>
                </CardTitle>
                <CardDescription className="mt-2 text-background/80 group-hover:text-[#ffffff]/80">
                  {feature.body}
                </CardDescription>
              </CardContent>
            </div>
          ))}
        </div>
        {/*<div className="my-4 py-12 text-center">*/}
        {/*  <a*/}
        {/*    href="https://discord.com/oauth2/authorize?client_id=891988745784563988&permissions=8&scope=bot%20applications.commands"*/}
        {/*    target="_blank"*/}
        {/*    className="focus:text- white-boxshadow rounded-xl border-[3px] border-smoky-black bg-[#5865F2] px-12 py-4 text-[#fefefe] transition-all hover:border-[#ffffff] hover:bg-[#5865F2]/70 hover:text-[#ffffff] hover:shadow-none focus:border-foreground focus:bg-background"*/}
        {/*    rel="noreferrer"*/}
        {/*  >*/}
        {/*    <span className="text-xl font-bold">INVITE OUR BOT</span>*/}
        {/*  </a>*/}
        {/*</div>*/}
        {/*<div className="container mb-4 flex flex-col items-center justify-evenly space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">*/}
        {/*  <h5 className="text-lg font-medium text-foreground sm:text-2xl">*/}
        {/*    Want to invite our bot to a server or let an admin know us?*/}
        {/*  </h5>*/}

        {/*  <div className="rounded-sm border-[0.5px] border-[#99aab5] bg-[#2c2f33] p-2 text-[#99aab5]">*/}
        {/*    <div className="relative flex flex-col items-center justify-between gap-2 px-1 py-0.5 text-sm text-foreground sm:flex-row sm:px-4">*/}
        {/*      <p className="sm:text-md w-56 text-sm">*/}
        {/*        https://comcord.vision/invite-link*/}
        {/*      </p>*/}
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
  );
}

export default Features;
