import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  _id: number;
  title: string;
  totalQuestion?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, title, totalQuestion, showCount }: Props) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex cursor-pointer justify-between items-center"
    >
      <Button className="bg-gray-700 cursor-pointer">{title}</Button>
      {showCount && <span className="font-light">{totalQuestion}</span>}
    </Link>
  );
};

export default RenderTag;
