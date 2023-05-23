import "./App.css";
import Comments from "../components/Comments";
// import Comment from "../components/Form"
function App() {
  return (
    <div className="flex  justify-center items-center w-screen">
      <section className="w-[80%] m-auto">
        <h1 className="text-DarkBlue font-Rubik text-center">Nexted Commets</h1>
        <Comments />
      </section>
    </div>
  );
}

export default App;
