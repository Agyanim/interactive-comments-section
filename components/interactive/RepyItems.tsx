// import { useReplyContext } from "../../src/context/ReplyContext";
import GradeCounter from "./GradeCounter";
import { useCommentContext } from "../../src/context/commentContext";
import ReplyInput from "./ReplyInput";
import { useState,useRef } from "react";

type ReplyItemsProps = {
  Reply: Reply;
  toggleIsReplying:()=>void;
  replyId:string|undefined
};

const ReplyItems:React.FC<ReplyItemsProps> = ({ Reply,toggleIsReplying,replyId } ) => {

  const replyRef = useRef<HTMLInputElement>(null)
  const context=useCommentContext()
  
  // console.log(context.replyId);
  
const [isReplying,setIsReplying]=useState(false)
  const ReplyHandler = () => {
    const id=replyRef.current?.id
    console.log(replyId);
    context.getReplyId(id)
    // setIsReplying(!isReplying)
    toggleIsReplying()
    // console.log(isReplying);
    
  };

  return (
    <section ref={replyRef} id={Reply.id.toString()} className="flex flex-col bg-white gap-10 w-full lg:w-[95%] m-auto rounded mt-2 mr-0">
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
            className="text-ModerateBlue absolute lg:top-0 right-10 flex"
            onClick={ReplyHandler}
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
    </section>
  );
};

export default ReplyItems;