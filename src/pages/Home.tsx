import FirstLevelInput from "../../components/interactive/FirstLevelInput";
import CommentItems from "../../components/interactive/CommentItems";
import ReplyItems from "../../components/interactive/ReplyItems";
const Home = () => {
  return (
    <main className="w-screen h-screen bg-LightGrayishBlue">
      <CommentItems />
      <ReplyItems/>

      <FirstLevelInput />
    </main>
  );
};

export default Home;
