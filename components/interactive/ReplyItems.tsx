import GradeCounter from './GradeCounter';

const ReplyItems = () => {
  return (
    <section className="flex  bg-White w-full lg:w-[60%] m-auto rounded mt-5 ">
    <div className="flex flex-col-reverse lg:flex-row m-4 relative">
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
          <h2 className="font-bold text-DarkBlue">amyrobson <span className='bg-ModerateBlue text-White px-2 py-1 rounded'>you</span></h2>
          <h3 className="text-GrayishBlue">1 month ago</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi
          ut dolor pariatur, corporis, nobis vel fugit nihil voluptates
          explicabo doloribus ullam magni hic eos officiis? Velit quam illum
          est.
        </p>
        <div>
        <button className="text-ModerateBlue absolute lg:top-0 right-0 flex">
          <img
            className="mt-[0.4rem] pr-1"
            src="/images/icon-edit.svg"
            alt="edit"
          />
          Edit
        </button>
        <button className="text-SoftRed absolute lg:top-0  flex right-20">
          <img
            className="mt-[0.4rem] pr-1"
            src="/images/icon-delete.svg"
            alt="delete"
          />
          Delete
        </button>
        </div>
        <button className=" bg-ModerateBlue text-White font-bold px-3 py-1 ml- lg:ml-[90%] mt-[2rem] rounded">
          Update
        </button>

      </div>
    </div>
  </section>
);
}

export default ReplyItems