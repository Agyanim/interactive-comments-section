import { useState } from "react";
import data from "../../util/data/data.json";
import { nanoid } from "nanoid";

type ReplyingInputChildProps = {
};

const newCurrentUser: CurrentUser = data.currentUser;

const ReplyInputChild:React.FC<ReplyingInputChildProps> = () => {
  const [addComment, setAddComment] = useState("");
  
  const addNew: myComment = {
    id: nanoid(),
    content: addComment,
    createdAt: "12/45/2024",
    score: 45,
    user: newCurrentUser,
    replies: [],
  };
  const onCommentHandler = ():void =>  {
    // setReplies(prev=>[addNew,...prev]);
    setAddComment("")
  };

const replyHandler=()=>{
}

  return (
    <section className="flex   bg-White w-[95%] m-auto mr-0 rounded mt-2">
      <div className="flex flex-col-reverse lg:flex-row gap-2 w-[90%] lg:w-[90%] m-auto my-5 ">
        <div className="">
          <img
            className="w-[2rem] lg:w-[3rem]"
            src="/images/avatars/image-juliusomo.png"
            alt="avatar"
          />
        </div>
        <div className="w-full relative">
          <textarea
            className=""
            name="comment"
            id="comment"
            cols={60}
            rows={3}
            value={addComment}
            onChange={(e) => setAddComment(e.target.value)}
          ></textarea>

          
            <button className="absolute top-[5.8rem] left-[76%]  lg:left-[80%] lg:top-0 px-3 lg:px-10 py-2 rounded border-none bg-ModerateBlue text-White font-bold lg:ml-2"
            onClick={replyHandler}
            >
              Reply
            </button>
        </div>
      </div>
    </section>
  );
};

export default ReplyInputChild;
