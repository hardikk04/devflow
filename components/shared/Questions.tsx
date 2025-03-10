import Image from "next/image";
import Link from "next/link";
import React from "react";

const Questions = ({
  question,
}: {
  question: { _id: number; title: string };
}) => {
  return (
    <Link
      href={`questions/${question._id}`}
      className="flex hover:bg-gray-950 transition-all cursor-pointer justify-between items-center"
    >
      <p className="font-light">{question.title}</p>
      <Image
        src="/assets/icons/chevron-right.svg"
        height={20}
        width={20}
        alt="arrow"
      />
    </Link>
  );
};

export default Questions;
