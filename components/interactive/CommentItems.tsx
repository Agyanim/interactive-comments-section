import GradeCounter from "../interactive/GradeCounter";
const CommentItems = () => {
  return (
    <section className="flex  bg-White w-full lg:w-[60%] m-auto rounded ">
      <div className="flex flex-col-reverse lg:flex-row m-4">
        <div className="">
          <GradeCounter />
        </div>
        <div className="relative ml-5">
          <div className="flex gap-4">
            <div>
              <img
                className="w-[2rem]"
                src="/images/avatars/image-amyrobson.png"
                alt="avatar"
              />
            </div>
            <h2 className="font-bold text-DarkBlue">amyrobson</h2>
            <h3 className="text-GrayishBlue">1 month ago</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi
            ut dolor pariatur, corporis, nobis vel fugit nihil voluptates
            explicabo doloribus ullam magni hic eos officiis? Velit quam illum
            est.
          </p>
          <button className="text-ModerateBlue absolute lg:top-0 right-0 flex">
            <img
              className="mt-2 pr-1"
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
