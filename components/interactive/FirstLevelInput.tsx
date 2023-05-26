import { useState } from "react";

const FirstLevelInput = () => {
    const [comments,setComments]=useState("")
    // console.log(comments);
    
  return (
    <section className="flex  bg-White w-full lg:w-[60%] m-auto rounded mt-5">
      <div className="flex flex-col-reverse lg:flex-row gap-2 w-[90%] lg:w-[90%] m-auto my-5 ">
        <div className="">
          <img className="w-[2rem] lg:w-[3rem]" src="/images/avatars/image-juliusomo.png" alt="avatar" />
        </div>
        <div className="w-full relative">
          <textarea
            className=""
            name="comment"
            id="comment"
            cols={60}
            rows={3}
            value={comments}
            onChange={e=>setComments(e.target.value)}
          ></textarea>
          <button className="absolute top-[5.8rem] left-[76%]  lg:left-[80%] lg:top-0 px-3 lg:px-10 py-2 rounded border-none bg-ModerateBlue text-White font-bold lg:ml-2">
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstLevelInput;