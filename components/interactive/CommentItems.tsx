import GradeCounter from "../interactive/GradeCounter";
import data from "../../util/data/data.json";
type CommentItemsProps = {
  comment: myComment;
  toggleIsReplying: () => void;
};

const CommentItems: React.FC<CommentItemsProps> = ({
  comment,
  toggleIsReplying,
}) => {
  const currentUser: CurrentUser = data.currentUser;


  const replyHandler = () => {
    // console.log(comment.id);
    
        toggleIsReplying();
  };

  return (
    <section className="flex w-full m-auto rounded bg-White ">
      <div id={comment.id} className="flex flex-col-reverse w-full m-4 lg:flex-row">
        <div className="">
          <GradeCounter score={comment.score} />
        </div>
        <div className="relative w-full ml-5">
          <div className="flex w-full gap-4">
            <div>
              <img
                className="w-[2rem]"
                src="/images/avatars/image-amyrobson.png"
                alt="avatar"
              />
            </div>
            <h2 className="font-bold text-DarkBlue">{comment.user.username}</h2>
            <h3 className="text-GrayishBlue">{comment.createdAt}</h3>
          </div>
          <p className="w-full">{comment.content}</p>
          <div></div>
          <button
            className="absolute right-0 flex text-ModerateBlue lg:top-0"
            onClick={replyHandler}
          >
            <img
              className="pr-1 mt-2"
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

export default CommentItems;
