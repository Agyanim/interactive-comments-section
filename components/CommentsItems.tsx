// import React from "react";
import { useState } from "react";
import CommentInput from "../components/CommentInput";

type Comment = {
  body: string;
  comments: Array<Comment>;
};

type commentsTypeProps = {
  comment: Comment;
};

const CommentsItems = ({ comment }: commentsTypeProps) => {
  const [isReplying, setIsRplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  console.log(comment);

  const onComment = (newComment: Comment): void => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="flex flex-col">
      <span>{comment.body}</span>
      {isReplying ? (
        <button className="w-20" onClick={() => setIsRplying(false)}>
          Cancel
        </button>
      ) : (
        <button className="w-20" onClick={() => setIsRplying(true)}>
          Reply
        </button>
      )}

      {isReplying && <CommentInput onComment={onComment} />}

      <div className="flex flex-col">
        {comments?.map((comment, i) => (
            <div key={i} className="border border-gray-400 flex flex-col w-3/4">
              <CommentsItems comment={comment} />
            </div>
          )
        
        
        
        )  }
      </div>
    </div>
  );
};

export default CommentsItems;
