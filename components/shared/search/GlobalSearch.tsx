import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="text-white relative w-full max-w-[600px] max-lg:hidden">
      <div className="bg-gray-800 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src={"assets/icons/search.svg"}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally"
          
          className="paragraphy-regular no-focus border-none shadow-none outline-none"
        ></Input>
      </div>
    </div>
  );
};

export default GlobalSearch;
