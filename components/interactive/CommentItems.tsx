// import { useCommentContext } from "../../src/context/commentContext";
import GradeCounter from "../interactive/GradeCounter";
import data from "../../util/data/data.json";
import { useCommentContext } from "../../src/context/commentContext";
import ReplyInput from "./ReplyInput";
import { actionType } from "../../src/context/commentReducer";

type CommentItemsProps = {
  comment: myComment;
  toggleIsReplying: () => void;
};

const CommentItems: React.FC<CommentItemsProps> = ({
  comment,
  toggleIsReplying,
}) => {
  const currentUser: CurrentUser = data.currentUser;

  const context = useCommentContext();

  const replyHandler = () => {
    toggleIsReplying;
    // context.toggleReply()
  };

  return (
    <section className="flex  bg-White w-full  m-auto rounded ">
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
          <div></div>
          <button
            className="text-ModerateBlue absolute lg:top-0 right-0 flex"
            onClick={toggleIsReplying}
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
