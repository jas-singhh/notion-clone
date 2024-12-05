import React from "react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentButton />
    </>
  );

  return (
    <div className="p-4 md:p-8 bg-gray-200 shadow-sm relative">
      <div className="inline md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="w-6 h-6 m-2 hover:bg-gray-300" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div className="">{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
}

export default Sidebar;
