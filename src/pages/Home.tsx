import FirstLevelInput from "../../components/interactive/FirstLevelInput";
import CommentItems from "../../components/interactive/CommentItems";
import ReplyItemsList from "../../components/interactive/RepyItemsList";
import EditItems from "../../components/interactive/EditItems";
import ReplyInput from "../../components/interactive/ReplyInput";
import data from "../../util/data/data.json";
import { useReducer, useState } from "react";
import { useCommentContext } from "../context/commentContext";
// import { useCommentContext } from "../context/commentContext";


const Home:React.FC = () => {
  const context = useCommentContext();
  const { ...state } = context;
  const [isReplying, setIsReplying]=useState(false)

  const toggleIsReplying=()=>{
    setIsReplying(!isReplying)
  }
  console.log(isReplying);
  
  return (
    <main className="w-screen  bg-VeryLightGray">
      <section className="flex flex-col lg:w-[60%] m-auto">
        {state.comment.map((comment) => (
          <div className="mb-5">
            <CommentItems comment={comment} toggleIsReplying={toggleIsReplying}/>
            {isReplying && <ReplyInput />}
            <div className="flex justify-end">
              <ReplyItemsList 
              Reply={comment.replies} 
/>

            </div>
          </div>
        ))}

        {state.comment.map((comment) => (
          <EditItems score={comment.score} comments={comment} />
        ))}
        <FirstLevelInput />
      </section>
    </main>
  );
};

export default Home;
