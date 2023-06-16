// import { useReplyContext } from "../../src/context/ReplyContext";
import GradeCounter from "./GradeCounter";
import { useCommentContext } from "../../src/context/commentContext";
import ReplyInput from "./ReplyInput";

type ReplyItemsProps = {
  Reply: Reply;
  toggleIsReplying:()=>void
};

const ReplyItems:React.FC<ReplyItemsProps> = ({ Reply,toggleIsReplying } ) => {

  const context=useCommentContext()

  const ReplyHandler = () => {
    // toggleIsReplying
    // context.toggleReply()
  };

  return (
    <section className="flex bg-White w-full lg:w-[95%] m-auto rounded mt-3 mr-0">
      <div className="flex flex-col-reverse lg:flex-row m-4 w-full">
        <div className="">
          <GradeCounter score={Reply.score} />
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
            <h2 className="font-bold text-DarkBlue">{Reply.user.username}</h2>
            <h3 className="text-GrayishBlue">{Reply.createdAt}</h3>
          </div>
          <p className="w-full">{Reply.content}</p>
          <div>
          </div>
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
          {/* <ReplyInput/> */}
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

export default ReplyItems;
