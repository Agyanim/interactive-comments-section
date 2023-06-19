import { useRef, useState } from "react";
import ReplyInputChild from "./ReplyInputChild";
import ReplyItems from "./RepyItems";

type ReplyItemsProps = {
  Reply: Reply[];
};

const ReplyItemsList: React.FC<ReplyItemsProps> = ({ Reply }) => {
  const replyItemsId = useRef<HTMLUListElement>(null);
  const replyId = replyItemsId.current?.id;

  const [isReplying, setIsReplying] = useState(false);

  const toggleIsReplying = () => {
    setIsReplying((prev) => !prev);
  };
  const renderReplies = Reply.map((reply) => {
    return (
      <ul  id={reply.id.toString()} key={reply.id}>
        <li className="">
          <ReplyItems
            Reply={reply}
            toggleIsReplying={toggleIsReplying}
            replyId={replyId}
          />
        </li>
      </ul>
    );
  });

  return (
    <section ref={replyItemsId} className="flex flex-col border-l border-gray-400  w-full lg:w-[95%] rounded ">
      {renderReplies}

      <div>{isReplying && <ReplyInputChild />}</div>
    </section>
  );
};

export default ReplyItemsList;
