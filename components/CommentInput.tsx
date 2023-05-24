// import React from "react";
import { useState } from "react";
type comments = {
  body: string;
  comments: Array<comments>;
};

type commentsInputProps = {
  OnComment: (newComment: comments) => void;
};

const CommentInput = ({ OnComment}: commentsInputProps) => {
  
  const [commentBody, setCommentBody] = useState("");

  const updateCommentHandler = () => {
    OnComment({ body: commentBody, comments: [
      {body:commentBody, comments:[]}
    ]});
    setCommentBody("");
  };

  return (
    <div className="w-full">
      <div className="w-[100%]">
        <input
          className="border border-gray-400 w-[50%] p-2 rounded"
          type="text"
          name="comments"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="Enter comments"
        />
        <div>
          <button
            className="bg-blue-600 text-white rounded font-bold border-none px-4 py-1 mt-2"
            onClick={updateCommentHandler}
          >
            Comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
