import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 items-center fixed z-50 w-full gap-5 p-6 sm:px-12">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p className="h2-bold font-spaceGrotesk text-white  max-sm:hidden">
          Dev <span className="text-orange-500">Flow</span>
        </p>
      </Link>
    <GlobalSearch></GlobalSearch>      
      <div className="flex justify-between items-center gap-5">
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
        <MobileNav></MobileNav>
      </div>
    </nav>
  );
};

export default Navbar;
