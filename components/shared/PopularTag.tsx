import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PopularTag = ({
  tag,
}: {
  tag: { _id: number; title: string; totalQuestion: number };
}) => {
  return (
    <Link
      href={`/tags/${tag._id}`}
      className="flex cursor-pointer justify-between items-center"
    >
      <Button className="bg-gray-700 cursor-pointer">{tag.title}</Button>
      <span className="font-light">{tag.totalQuestion}</span>
    </Link>
  );
};

export default PopularTag;
