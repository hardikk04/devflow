"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="border-r h-screen sticky left-0 top-0 border-gray-600 max-sm:hidden bg-gray-900 p-6 pt-36 flex flex-col text-white gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            key={item.route}
            href={item.route}
            className={`flex gap-4 rounded-xl hover:bg-orange-400 transition-all px-12 ${
              isActive ? `primary-gradient rounded-lg` : ""
            }items-center justify-start bg-transparent p-4`}
          >
            <Image src={item.imgURL} alt={item.label} width={20} height={20} />

            <p className="max-lg:hidden">{item.label}</p>
          </Link>
        );
      })}
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href={"/sign-in"}>
            <Button className="small-medium cursor-pointer btn-secondary bg-gray-800 min-h-[41px] w-full text-orange-500 rounded-lg px-4 py-3">
              <Image
                src={"/assets/icons/account.svg"}
                alt="Login"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="max-lg:hidden">Log In</span>
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <Button className="small-medium cursor-pointer btn-tertiary bg-gray-800 light-border-2 min-h-[41px] w-full text-white rounded-lg px-4 py-3">
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="sign up"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
