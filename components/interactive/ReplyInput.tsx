import { useEffect, useState } from "react";
import data from "../../util/data/data.json";
import { nanoid } from "nanoid";
import { useCommentContext } from "../../src/context/commentContext";

type ReplyingInputProps = {
  // onComment: (newComment: myComment) => void;
  replies:Reply[]
//   setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
//   isReplying:Boolean
};

const newCurrentUser: CurrentUser = data.currentUser;

const ReplyInput:React.FC<ReplyingInputProps> = ({replies}) => {
  // const[myreplies,setMyReplies]=useState(replies)
  // myreplies.map(value=>value.content)
  const [addComment, setAddComment] = useState("");
  const [replyComment,setReplyComment]=useState(replies)
  const context=useCommentContext()
  const addReply:Reply = {
    id: nanoid(),
    content: addComment,
    createdAt: new Date().toLocaleDateString(),
    score: 0,
    replyingTo:"me",
    user: newCurrentUser,
  };

  const id=context.replyId
  useEffect(() => {
  console.log(id);
  
  }, [id])
  
  const onCommentHandler = (e:React.FormEvent<HTMLFormElement>):void =>  {
    e.preventDefault()
    setReplyComment(prev=>[...prev,addReply])
    // onComment(addReply)
    // setReplies(prev=>[addNew,...prev]);
    setAddComment("")
  };

// const replyHandler=()=>{
//     // setIsReplying(!isReplying)
// }

  return (
    <section className="flex  bg-White w-full m-auto rounded mt-2">
      <div className="flex flex-col-reverse lg:flex-row gap-2 w-[90%] lg:w-[90%] m-auto my-5 ">
        <div className="">
          <img
            className="w-[2rem] lg:w-[3rem]"
            src="/images/avatars/image-juliusomo.png"
            alt="avatar"
          />
        </div>
        <div className="w-full relative">
          <form onSubmit={onCommentHandler}>
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
            >
              Reply
            </button>
            </form>
        </div>
        
      </div>
    </section>
  );
};

export default ReplyInput;
