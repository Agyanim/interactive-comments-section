import FirstLevelInput from "../../components/interactive/FirstLevelInput";
import CommentItems from "../../components/interactive/CommentItems";
import EditItems from "../../components/interactive/EditItems";
import ReplyInput from "../../components/interactive/ReplyInput";
import data from "../../util/data/data.json";
import { useReducer, useState } from "react";
import { useCommentContext } from "../context/commentContext";
// import { useCommentContext } from "../context/commentContext";

const currentUser: CurrentUser = data.currentUser;
const dummyComments: myComment[] = data.comments;


const Home = () => {
  const context=useCommentContext()
  const {...state}=context
  console.log(state);
  

  // const [comments, setComments] = useState(dummyComments);
  // const [isReplying, setIsReplying] = useState(false);

  // comments.map(value=> console.log(value.replies)
  // )

  // const onComment = (newComment: myComment): void => {
  //   setComments((prev) => [newComment, ...prev]);
  // };

  return (
    <main className="w-screen  bg-LightGrayishBlue">
      {/* {comments.map((comment) => (
        <div className="mb-5">
          <CommentItems
            comment={comment}
            setIsReplying={setIsReplying}
            isReplying={isReplying}
          />
          {isReplying && (
            <ReplyInput onComment={onComment} replies={comment.replies} />
          )}
        </div>
      ))}

      {comments.map((comment) => (
        <EditItems score={comment.score} comments={comments} />
      ))}
      <FirstLevelInput onComment={onComment} /> */}
    </main>
  );
};

export default Home;
