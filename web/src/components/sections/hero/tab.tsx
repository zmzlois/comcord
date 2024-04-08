import React from "react";

import clsx from "clsx";

import { App, emoji, Tab } from "./tabConfig";
import type { EmojiType } from "./tabConfig";

type emoji = EmojiType;

export default function TabComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {emoji.map((item, index) => {
          return (
            <button
              className="m-1 flex aspect-square h-9 w-9 items-center justify-center rounded-full bg-dark-charcoal transition-all hover:bg-onyx"
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="">
        {Tab.map((item) => {
          return (
            <div key={item.title} className="mt-2 flex flex-col space-y-1">
              <button
                className={clsx(
                  "flex flex-row content-center items-center justify-between rounded-[2px] px-2 py-1 transition-all hover:bg-dark-charcoal",
                  item.active ? "bg-nebula-blue hover:bg-nebula-blue/90" : ""
                )}
              >
                <h3
                  className={clsx(
                    "text-sm",
                    item.active ? "text-antiflash-white" : "text-cadet-gray",
                    item.disabled ? "text-red-400" : ""
                  )}
                >
                  {item.title}
                </h3>

                <div
                  className={clsx(
                    "object-contain text-sm",
                    item.active ? "text-antiflash-white" : "text-cadet-gray",
                    item.disabled ? "text-red-400" : ""
                  )}
                >
                  {item.icon}
                </div>
              </button>
              {item.title === "Delete Message" && (
                <div className=" h-[0.3px] rounded-sm bg-cadet-gray/40" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const AppComponent = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col space-y-1">
        {App.map((item, index) => {
          return (
            <div key={index} className="">
              <button
                className={clsx(
                  "flex w-full flex-row content-center items-center justify-between space-x-2 rounded-[2px] px-2 py-1 transition-all hover:bg-dark-charcoal",
                  item.active ? "bg-nebula-blue hover:bg-nebula-blue/90" : ""
                )}
                key={index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.title}
                  src={item.icon}
                  className={clsx(
                    "h-4 w-4 rounded-full object-contain text-sm",
                    item.active ? "text-antiflash-white" : "text-cadet-gray"
                  )}
                ></img>
                <h3
                  className={clsx(
                    "text-sm",
                    item.active ? "text-antiflash-white" : "text-cadet-gray"
                  )}
                >
                  {item.title}
                </h3>
                {}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
