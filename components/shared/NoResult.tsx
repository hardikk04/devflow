import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="w-full mt-6 flex flex-col justify-center items-center">
      <Image
        src={"/assets/images/dark-illustration.png"}
        width={250}
        height={250}
        alt="No Result"
        className="object-cover"
      />
      <h2 className="h2-bold text-white mt-8">{title}</h2>
      <p className="text-white font-light text-center max-w-md my-3.5">
        {description}
      </p>
      <Link href={link}>
        <Button className="mt-2 bg-orange-500 text-white px-6 py-5">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
