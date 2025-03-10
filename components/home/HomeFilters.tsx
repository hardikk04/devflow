"use client";

import { HomePageFilters } from "@/constants/filter";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "";
  return (
    <div className="mt-10  flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map((filter) => {
        return (
          <Button
            className={`hover:text-orange-500 cursor-pointer body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === filter.value ? "bg-orange-500" : "bg-none"
            }`}
            key={filter.value}
            onClick={() => {}}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
