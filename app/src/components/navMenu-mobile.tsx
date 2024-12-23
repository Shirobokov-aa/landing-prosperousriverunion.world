import React from "react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavMenuMobile(){
  return(
    <div className="lg:hidden block">
  <Drawer>
    <DrawerTrigger>
      <div className="space-y-1">
        <span className="block w-5 h-0.5 bg-log-blue-900"></span>
        <span className="block w-5 h-0.5 bg-log-blue-900"></span>
        <span className="block w-5 h-0.5 bg-log-blue-900"></span>
      </div>
    </DrawerTrigger>
    <DrawerContent className="h-[50%] w-screen bg-swp-blue-600 border-none">
      <DrawerHeader>
        <div className="text-left">
          <ul className="text-subH1 text-white uppercase">
            <div className="border-t relative -left-4 border-white w-full"></div>
            <li className="py-8 w-screen">
              <Link href={"/"}>Home</Link>
            </li>
            <div className="border-t relative -left-4 border-white w-full"></div>
            <li className="py-8 w-screen">
              <Link href={"/"}>About</Link>
            </li>
            <div className="border-t relative -left-4 border-white w-full"></div>
            <li className="py-8 w-screen">
              <Link href={"/"}>Contact</Link>
            </li>
            <div className="border-t relative -left-4 border-white w-full"></div>
          </ul>
        </div>
        <DrawerTitle></DrawerTitle>
        <DrawerDescription></DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild>
          <button className="outline-button">
            <div className="relative left-[46%] w-10 h-10 cursor-pointer ">
              <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</div>
  )
}
