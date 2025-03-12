import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatAndDividedNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: number;
  title: string;
  tags: { _id: number; name: string }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  console.log(createdAt);

  return (
    <div className="card-wrapper shadow bg-gray-900 rounded-[10px] p-9 sm:px-11">
      <div>
        <span className="subtle-regular sm:hidden line-clamp-1 text-gray-300 font-light">
          {getTimestamp(createdAt)}
        </span>
        <Link href={`/question/${_id}`}>
          <h3 className="sm:h3-semibold base-semibold line-clamp-1 text-white">
            {title}
          </h3>
        </Link>
      </div>
      <div className="mt-4 flex gap-4">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} title={tag.name} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 w-full flex-wrap gap-4">
        <Metric
          imgUrl={author.picture}
          alt="Upvotes"
          value={author.name}
          title={` - asked ` + getTimestamp(createdAt)}
          href={`/profile/${author._id}`}
          isAuthor
          textStyle="body-medium"
        ></Metric>
        <div className="flex justify-center items-center gap-4">
          <Metric
            imgUrl={"/assets/icons/like.svg"}
            alt="Upvotes"
            value={formatAndDividedNumber(upvotes)}
            title="Views"
            textStyle="small-medium"
          ></Metric>
          <Metric
            imgUrl={"/assets/icons/message.svg"}
            alt="eye"
            value={formatAndDividedNumber(answers.length)}
            title="Answers"
            textStyle="small-medium"
          ></Metric>
          <Metric
            imgUrl={"/assets/icons/eye.svg"}
            alt="eye"
            value={formatAndDividedNumber(views)}
            title="Views"
            textStyle="small-medium"
          ></Metric>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
