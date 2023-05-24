// import React from "react";
import { useState } from "react";
import CommentInput from "../components/CommentInput";

type comments = {
  body?: string;
  comment: Array<comments>;
};



type commentsTypeProps = {
  Comments: comments;
};

const CommentsItems = ({ Comments }: commentsTypeProps) => {
  const [isReplying, setIsRplying] = useState(false);
  const [comments, setComments] = useState(Comments.comment);

  // const [replyComments,setReplyComments]=useState(Comments.comment)
  console.log(comments);
  

  const onComment = (newComment: comments):void => {
    setComments((prev) => [newComment, ...prev]);
  };


  return (
    <div className="flex flex-col">
      <span>{Comments.body}</span>
      {isReplying ? (
        <button className="w-20" onClick={() => setIsRplying(false)}>
          Cancel
        </button>
      ) : (
        <button className="w-20" onClick={() => setIsRplying(true)}>
          Reply
        </button>
      )}

      {isReplying && (
        <div className="flex flex-col">
        <CommentInput OnComment={onComment}/>
        
        {
          
          comments.map((comment?) => {
            return (
              <div className="border border-gray-400 flex flex-col w-3/4">
                {/* {comment.body} */}
                <CommentsItems Comments={comment} />
              </div>
        
            )

             } )
             
            }

        </div>
        )
      }
    </div>
  );
};

export default CommentsItems;
