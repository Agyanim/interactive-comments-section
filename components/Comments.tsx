import { useState } from "react";
import CommentsItems from "../components/CommentsItems"
import CommentInput from "../components/CommentInput"

type comments = {
  body: string;
  comment:[]
};

const dummyComments: Array<comments> = [
  {
    body: "This is my first comments",
    comment:[]

  },
  {
    body: "This is my second comments",
    comment:[]

  },
  {
    body: "This is my third comments",
    comment:[]

  },
];
const Comments = () => {
  const [comments, setComments] = useState(dummyComments);

  const updateCommentHandler = (newComments:comments) => {
    // const updateBody: comments = {
    //   body: updateComment,
    //   comment:[]

    // };

    setComments((prev) => [newComments, ...prev]);
    // setUpdateComment("")
  };


  const renderComments = comments.map((comment) => {
    return <div className="border border-gray-400 flex flex-col w-3/4">
        <CommentsItems Comments={comment}/>
    </div>;
  });

  return (
    <div className="flex flex-col items-start w-[100%]">
<CommentInput/>

        <div className="mt-10 flex flex-col gap-2 w-[100%]">{renderComments}</div>
    </div>
  );
};

export default Comments;
