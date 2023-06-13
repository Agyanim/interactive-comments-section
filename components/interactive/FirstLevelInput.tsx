import {useState } from "react";
import data from "../../util/data/data.json";
import { useCommentContext } from "../../src/context/commentContext";



const newCurrentUser: CurrentUser = data.currentUser;

const FirstLevelInput = (
) => {
  const [comment, setComment] = useState("");
  const context=useCommentContext()
  const {...state}=context
  // console.log(state.isReplying);
  

  const addNew:myComment = {
    id: 25,
    content: comment,
    createdAt: "12/45/2024",
    score: 45,
    user: newCurrentUser,
    replies:[],
  };
  const onCommentHandler = (): void => {
    state.onComment(addNew);
    setComment("");
  };

  const replyHandler = () => {
    state.toggleReply()
    // setIsReplying(!isReplying);
  };

  return (
    <section className="flex  bg-White w-full lg:w-[60%] m-auto rounded mt-5">
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          {state.isReplying ? (
            <button
              className="absolute top-[5.8rem] left-[76%]  lg:left-[80%] lg:top-0 px-3 lg:px-10 py-2 rounded border-none bg-ModerateBlue text-White font-bold lg:ml-2"
              onClick={replyHandler}
            >
              Reply
            </button>
          ) : (
            <button
              className="absolute top-[5.8rem] left-[76%]  lg:left-[80%] lg:top-0 px-3 lg:px-10 py-2 rounded border-none bg-ModerateBlue text-White font-bold lg:ml-2"
              onClick={onCommentHandler}
            >
              Send
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FirstLevelInput;
