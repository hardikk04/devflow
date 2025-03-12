import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const Home = () => {
  const questions = [
    {
      _id: 1,
      title: "How to center a div?",
      tags: [
        { _id: 1, name: "HTML" },
        { _id: 2, name: "CSS" },
      ],
      upvotes: 5,
      views: 2000,
      answers: [
        {
          _id: 1,
          content:
            "Use flexbox with justify-content and align-items set to center.",
        },
      ],
      author: {
        _id: "101",
        name: "Alice Johnson",
        picture: "/assets/icons/avatar.svg",
      },
      createdAt: new Date("2025-04-10T12:45:00"),
    },
    {
      _id: 2,
      title: "What is the difference between let, var, and const?",
      tags: [{ _id: 3, name: "JavaScript" }],
      upvotes: 15,
      views: 500,
      answers: [
        {
          _id: 2,
          content:
            "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
        },
      ],
      author: {
        _id: "102",
        name: "Bob Smith",
        picture: "/assets/icons/avatar.svg",
      },
      createdAt: new Date("2023-05-22T09:15:00"),
    },
    {
      _id: 3,
      title: "How to optimize React performance?",
      tags: [
        { _id: 4, name: "React" },
        { _id: 5, name: "Performance" },
      ],
      upvotes: 20,
      views: 750,
      answers: [
        {
          _id: 3,
          content:
            "Use memoization, lazy loading, and avoid unnecessary re-renders.",
        },
      ],
      author: {
        _id: "103",
        name: "Charlie Davis",
        picture: "/assets/icons/avatar.svg",
      },
      createdAt: new Date("2024-01-05T18:30:00"),
    },
       
  ];

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
      <div className="mt-10 flex w-full flex-col gap-6 text-white">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              author={question.author}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title={"There are no question to show"}
            description={`Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡`}
            link={`/`}
            linkTitle={`Ask a Question`}
          />
        )}
      </div>
    </>
  );
};

export default Home;
