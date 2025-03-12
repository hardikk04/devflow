import Question from "@/components/forms/Question";
import React from "react";

const page = () => {
  return <div>
    <h1 className="h1-bold text-white">Ask a question</h1>
    <div className="mt-9 text-white">
        <Question></Question>
    </div>
  </div>;
};

export default page;
