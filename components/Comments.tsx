import { useState } from "react";
import CommentsItems from "../components/CommentsItems";
import CommentInput from "../components/CommentInput";

type Comment = {
  body: string;
  comments: Array<Comment>;
};

const dummyComments: Array<Comment> = [
  {
    body: "This is my first comments",
    comments: [],
  },
  {
    body: "This is my second comments",
    comments: [],
  },
  {
    body: "This is my third comments",
    comments: [],
  },
];
const Comments = () => {
  // state to main parents comments
  const [comments, setComments] = useState(dummyComments);

  const onComment = (newComment: Comment): void => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <main className="flex flex-col items-start w-[100%]">
      {/* input element for comments (both main and child) */}
      <CommentInput onComment={onComment} />
      <section className="mt-10 flex flex-col gap-2 w-[100%]">
        {/* Displaying comments */}
        {comments.map((comment, i) => (
          <div key={i} className="border border-gray-400 flex flex-col w-3/4">
            <CommentsItems comment={comment} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Comments;
