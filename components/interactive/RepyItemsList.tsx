// import { useReplyContext } from "../../src/context/ReplyContext";
import { useState } from "react";
import ReplyInput from "./ReplyInput";
import ReplyItems from "./RepyItems";
// import { actionType } from "../../src/context/ReplyReducer";

type ReplyItemsProps = {
  Reply: Reply[];
};

const ReplyItemsList: React.FC<ReplyItemsProps> = ({ Reply }) => {
  const [isReplying, setIsReplying] = useState(false);
  
  const toggleIsReplying = () => {
    setIsReplying(!isReplying);
  };
  const renderReplies = Reply.map((reply) => {
    return (
      <div className="">
        <ReplyItems Reply={reply} toggleIsReplying={toggleIsReplying} />
        <div>{isReplying && <ReplyInput/> }</div>
      </div>
    );
  });

  return (
    <section className="flex flex-col border-l border-gray-400  w-full lg:w-[95%] rounded ">
      {renderReplies}
    </section>
  );
};

export default ReplyItemsList;
