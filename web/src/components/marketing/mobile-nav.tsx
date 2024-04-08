"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

import { navItems, siteConfig } from "@/app/config";

import ThemeToggle from "@/components/theme-toggle";

import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}

export function MobileDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Link
          href="/"
          className="mr-2 flex items-center px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/black-logo.png"
            alt="ComCord Logo"
            className="mr-2 h-8 w-8"
          />
          <span className="text-lg font-bold tracking-tight text-background">
            {siteConfig.name}
          </span>
        </Link>
      </PopoverTrigger>
      <PopoverContent className="z-40 mt-2 h-[calc(100vh-4rem)] w-screen animate-none rounded-none border-none transition-transform">
        <Search />
        <ScrollArea className="py-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // className="mt-2 flex items-center text-lg font-semibold sm:text-sm"
              className="flex py-1 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </ScrollArea>
        <div className="border-t pt-4">
          <ThemeToggle side="top" align="start" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
