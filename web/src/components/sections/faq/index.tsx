"use client";

import React, { useEffect } from "react";
import * as Icons from "@/components/ui/icons";
import clsx from "clsx";

import { Questions } from "./config";

function FAQ() {
  const small = React.useRef(false);
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      small.current = true;
    } else {
      small.current = false;
    }
  }, [small]);

  return (
    <div
      className="faq-background mb-8 mt-16 flex-col content-center py-6"
      id="faq"
    >
      <div className="container mx-auto">
        <div className="my-8">
          <h5 className="text-center text-3xl font-bold sm:text-6xl">
            Frequently asked questions
          </h5>
        </div>
        <div
          className={clsx(
            "grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:gap-6",
            small && "flex-col"
          )}
        >
          {Questions.map((q) => (
            <div
              className="group flex-1 rounded-xl border-[3px] border-[#fefefe] bg-background p-4 group-hover:cursor-pointer"
              key={q.id}
            >
              <div className="overflow-hidden group-hover:h-auto ">
                <div className="my-4 flex content-center items-center space-x-2 align-middle ">
                  <Icons.ChevronsUp className="text-accent-5 h-6 w-6 rotate-180 transition-all duration-500 group-hover:rotate-0" />
                  <h2
                    className="text-accent-5 text-md font-bold tracking-tighter md:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: q.question,
                    }}
                  ></h2>
                </div>
                <div className=" overflow-hidden text-start transition-all duration-500 group-hover:py-4 md:mt-4">
                  <p
                    className="text-accent-3 md:text-md ml-6 max-h-0 text-sm font-light transition-all duration-500 group-hover:max-h-60"
                    dangerouslySetInnerHTML={{
                      __html: q.answer,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
