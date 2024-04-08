"use client";

// Must use "use client" as cn is a client-side only function
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/marketing/footer";
import { fontSpace } from "@/styles/fonts";
import MarketingNavBar from "@/components/marketing/nav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto flex flex-col", fontSpace.className)}>
      <MarketingNavBar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
