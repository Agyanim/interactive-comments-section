import React from "react";

import { useEffect, useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const displayName: string | null = localStorage.getItem("name");
  const [show, setShow] = useState("");

  // console.log(displayName);

  const submitHandler = (e: any) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(name));
    setName("");
  };

  useEffect(() => {
    if (displayName) {
      setShow(JSON.parse(displayName));
    }
    console.log(displayName);
  }, [displayName]);

  // console.log(name);
  return (
    <div className="w-screen">
      <form className="w-[100%]" onSubmit={submitHandler}>
        <label className="" htmlFor="name">
          Name:
        </label>
        <input
          className="w-[25%] border-2 border-gray-400 px-1"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-700 text-white px-[2rem] py-1 rounded-md border-none font-bold ml-2">
          Submit
        </button>
      </form>
      <div>{show}</div>
    </div>
  );
};

export default Form;
