import GradeCounter from "../interactive/GradeCounter";
import data from "../../util/data/data.json";
import { useState } from "react";
// import FirstLevelInput from "../interactive/FirstLevelInput";
// type CurrentUser = {
//   image: {
//     png: string | undefined;
//     webp: string | undefined;
//   };
//   username: string;
// };

// type Reply = {
//   id: number;
//   content: string;
//   createdAt: string;
//   score: number;
//   replyingTo: string;
//   user: CurrentUser;
// };

// type Replies = Reply[];

// type Comment = {
//   id: number;
//   content: string;
//   createdAt: string;
//   score: number;
//   user: CurrentUser;
//   replies: Replies;
// };
// type Comments = Comment[];

type CommentItemsProps = {
  comment: Comment;
};

const CommentItems = ({ comment }: CommentItemsProps) => {
  const currentUser: CurrentUser = data.currentUser;
  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(!isReplying);
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
      {/* {isReplying && <FirstLevelInput />} */}
    </section>
  );
};

export default CommentItems;
