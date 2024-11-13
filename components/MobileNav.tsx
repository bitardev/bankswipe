"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { useState } from "react";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-[264px]">
      <Sheet onOpenChange={setOpen}>
        <SheetTrigger>
          <div className="flex-center mt-1 p-1 hover:bg-slate-100 rounded-lg">
            <Image
              src={`/icons/${open ? "close.svg" : "hamburger.svg"}`}
              width={35}
              height={35}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="cursor-pointer flex items-center gap-1">
                <Image
                  src="/icons/logo-bank-swipe.svg"
                  width={34}
                  height={34}
                  alt="Bank Swipe logo"
                />
                <h1 className="sidebar-logo">
                  Bank <span className="font-light">Swipe</span>
                </h1>
              </Link>
            </SheetTitle>
            <SheetDescription className="hidden">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
