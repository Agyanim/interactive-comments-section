// import React from "react";
import { useState } from "react";

type comments = {
  body: string;
  // comment:[]
};

type commentsTypeProps = {
  Comments: comments;
};

const CommentsItems = ({ Comments }: commentsTypeProps) => {
  const [isRequired, setIsRequire] = useState(false);
  return (
    <div className="flex flex-col">
      <span>{Comments.body}</span>
      {isRequired ? (
        <button className="w-20" onClick={() => setIsRequire(false)}>
          Cancel
        </button>
      ) : (
        <button className="w-20" onClick={() => setIsRequire(true)}>
          Reply
        </button>
      )}

      {isRequired && (
        <div className="flex flex-col">
        <input className="border border-gray-400 h-[5rem] w-2/4" type="text" />
        <span><button>send</button></span>
        </div>
        )
      }
    </div>
  );
};

export default CommentsItems;
