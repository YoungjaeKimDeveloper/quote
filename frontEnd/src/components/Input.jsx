import React from "react";

const Input = ({ text, placeholder }) => {
  return (
    <div className="flex flex-col  items-start gap-y-5    ">
      <label for="author">
        <p className="font-bold text-xl md:text-2xl text-white">{text}</p>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id="author"
        className="w-[300px] h-[50px] bg-white  px-2 rounded-2xl  focus:outline-none"
      />
    </div>
  );
};

export default Input;
