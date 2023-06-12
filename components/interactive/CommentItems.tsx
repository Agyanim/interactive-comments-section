// import { useCommentContext } from "../../src/context/commentContext";
import GradeCounter from "../interactive/GradeCounter";
import data from "../../util/data/data.json";
import { useState } from "react";
import { useCommentContext } from "../../src/context/commentContext";
import ReplyInput from "./ReplyInput";

type CommentItemsProps = {
  comment: myComment;
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
  isReplying: boolean;
};

const CommentItems = (
  { comment }: CommentItemsProps,
  { setIsReplying }: CommentItemsProps
) => {
  const currentUser: CurrentUser = data.currentUser;
  // const {isReplying,setIsReplying}=useCommentContext()
  // const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    // setIsReplying(!isReplying);
  };
  //  console.log(comments);

  return (
    <section className="flex  bg-White w-full lg:w-[60%] m-auto rounded ">
      <div className="flex flex-col-reverse lg:flex-row m-4 w-full">
        <div className="">
          <GradeCounter score={comment.score} />
        </div>
        <div className="relative ml-5 w-full">
          <div className="flex gap-4 w-full">
            <div>
              <img
                className="w-[2rem]"
                src="/images/avatars/image-amyrobson.png"
                alt="avatar"
              />
            </div>
            <h2 className="font-bold text-DarkBlue">{comment.user.username}</h2>
            <h3 className="text-GrayishBlue">{comment.createdAt}</h3>
          </div>
          <p className="w-full">{comment.content}</p>
          <div>
          </div>
          <button
            className="text-ModerateBlue absolute lg:top-0 right-0 flex"
            onClick={replyHandler}
          >
            <img
              className="mt-2 pr-1"
              src="/images/icon-reply.svg"
              alt="replay"
            />
            Reply
          </button>
        </div>
      </div>
      {/* {isReplying && 
      <div className="absolute top-[5rem]">
         <ReplyInput />
      </div>
     } */}
    </section>
  );
};

export default CommentItems;
