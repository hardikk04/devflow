"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col text-white gap-6 pt-4">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`flex gap-4 ${
                isActive ? `primary-gradient rounded-lg` : ""
              }items-center justify-start bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="text-white">
        <Image
          src={"/assets/icons/hamburger.svg"}
          width={36}
          height={36}
          alt="Menu"
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-gray-900 p-4">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/assets/images/site-logo.svg"}
            width={23}
            height={23}
            alt="DevFlow"
          />
          <p className="h2-bold font-spaceGrotesk text-white">
            Dev <span className="text-orange-500">Flow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent></NavContent>
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button className="small-medium btn-secondary min-h-[41px] w-full text-orange-500 rounded-lg px-4 py-3">
                    <span className="">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/sign-up"}>
                  <Button className="small-medium btn-tertiary light-border-2 min-h-[41px] w-full text-white rounded-lg px-4 py-3">
                    <span className="">Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
