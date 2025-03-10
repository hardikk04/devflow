import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";

const Home = () => {
  return (
    <>
      <div className="flex w-full gap-4 sm:flex-row sm:items-center flex-col-reverse justify-between items-center">
        <h1 className="h1-bold text-white">All Questions</h1>
        <Link href={"/ask-question"}>
          <Button className="bg-orange-500">Ask Question</Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Question"
          otherClasses="flex-1"
        ></LocalSearch>
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        ></Filter>
      </div>
      <HomeFilters></HomeFilters>
      <div className="mt-10 flex w-full flex-col gap-6"></div>
    </>
  );
};

export default Home;
