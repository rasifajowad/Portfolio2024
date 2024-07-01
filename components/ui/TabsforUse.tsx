"use client";

import { tabs } from "@/data/tabData";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}
