import FirstLevelInput from "../../components/interactive/FirstLevelInput";
import CommentItems from "../../components/interactive/CommentItems";
import EditItems from "../../components/interactive/EditItems";
import ReplyInput from "../../components/interactive/ReplyInput";
import data from "../../util/data/data.json";
import { useState } from "react";
import { useCommentContext } from "../context/commentContext";

type CurrentUser = {
  image: {
    png: string | undefined;
    webp: string | undefined;
  };
  username: string;
};

type Reply = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: CurrentUser;
};

type Replies = Reply[];

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: CurrentUser;
  replies: Replies;
};
type Comments = Comment[];

const currentUser: CurrentUser = data.currentUser;
const dummyComments: Comments = data.comments;

const Home = () => {
  const [comments, setComments] = useState(dummyComments);
  const [isReplying,setIsReplying]=useState(false)

console.log(comments);

  const onComment=(newComment:Comment):void=>{
    setComments(prev=>[newComment,...prev])

  }

  return (
    <main className="w-screen  bg-LightGrayishBlue">
      {comments.map((comment) => (
        <div className="mb-5">
        <CommentItems comment={comment} setIsReplying={setIsReplying} isReplying={isReplying} />
        {
          isReplying && <ReplyInput onComment={onComment} />
        }
        
        </div>
      ))}
      {comments.map((comment)=>(

      <EditItems  score={comment.score} comments={comments}/>
      ))}
      <FirstLevelInput onComment={onComment} />
    </main>
  );
};

export default Home;
