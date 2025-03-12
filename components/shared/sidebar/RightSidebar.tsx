import PopularTag from "../RenderTag";
import Questions from "../Questions";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use express as a custom server in NextJS?" },
    { _id: 2, title: "How do I use express as a custom server in NextJS?" },
    { _id: 3, title: "How do I use express as a custom server in NextJS?" },
    { _id: 4, title: "How do I use express as a custom server in NextJS?" },
    { _id: 5, title: "How do I use express as a custom server in NextJS?" },
  ];
  const PopularTags = [
    { _id: 1, title: "REACT.JS", totalQuestion: 1, showCount: true },
    { _id: 2, title: "REACT.JS", totalQuestion: 2, showCount: true },
    { _id: 3, title: "REACT.JS", totalQuestion: 5, showCount: true },
  ];
  return (
    <section className="border-l h-screen sticky right-0 top-0 w-[360px] flex flex-col overflow-y-auto text-white border-gray-600   max-xl:hidden bg-gray-900 p-6 pt-36">
      <div>
        <h3 className="h3-bold pb-8">Top Question</h3>
        <div className="flex text-gray-300 flex-col gap-10">
          {hotQuestions.map((question) => {
            return (
              <Questions key={question._id} question={question}></Questions>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold pb-8">Popular Tags</h3>
        <div className="flex flex-col gap-5">
          {PopularTags.map((tag) => {
            return (
              <PopularTag
                key={tag._id}
                _id={tag._id}
                title={tag.title}
                showCount={tag.showCount}
                totalQuestion={tag.totalQuestion}
              ></PopularTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
