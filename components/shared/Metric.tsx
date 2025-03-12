import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgUrl: string;
  title: string;
  value: number | string;
  alt: string;
  textStyle: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  title,
  value,
  alt,
  textStyle,
  href,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`${href ? "rounded-full" : ""}`}
      ></Image>
      <p className={`${textStyle} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{metricContent}</div>;
};

export default Metric;
