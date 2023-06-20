import FirstLevelInput from "../../components/interactive/FirstLevelInput";
import CommentItems from "../../components/interactive/CommentItems";
import ReplyItemsList from "../../components/interactive/RepyItemsList";
import EditItems from "../../components/interactive/EditItems";
import ReplyInput from "../../components/interactive/ReplyInput";
import { useEffect, useRef, useState } from "react";
import { useCommentContext } from "../context/commentContext";


const Home:React.FC = () => {
  const initialValue:string|undefined=""
  const context = useCommentContext();
  const { ...state } = context;
  const myId:React.LegacyRef<HTMLDivElement>=useRef(null)
  const [isReplying, setIsReplying]=useState(false)
  // const [comentId,setCommentId]=useState(initialValue)

// const setId=()=>{
//   const id=(myId.current?.id)?.toString()
//   setCommentId(id?id:"")
// }

  const toggleIsReplying=()=>{
    // setId()
context.getReplyId(myId.current?.id)    
    setIsReplying(!isReplying)
  }

  
  return (
    <main className="w-screen  bg-VeryLightGray">
      <section className="flex flex-col lg:w-[60%] m-auto">
        {state.comment.map((comment) => (
          <div ref={myId} id={comment.id} key={comment.id} className="mb-5">
            <CommentItems comment={comment} toggleIsReplying={toggleIsReplying}/>
            {isReplying && <ReplyInput replies={comment.replies} />}
            <div className="flex justify-end">
              <ReplyItemsList 
              Reply={comment.replies} 
/>

            </div>
          </div>
        ))}

        <FirstLevelInput />
      </section>
    </main>
  );
};

export default Home;
