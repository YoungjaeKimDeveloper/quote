import React from "react";

const Input = ({ text, placeholder, target }) => {
  return (
    <div className="flex flex-col  items-start gap-y-5    ">
      <label htmlFor={target}>
        <p className="font-bold text-xl md:text-2xl text-white font-serif">
          {text}
        </p>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={target}
        className="w-[300px] h-[50px] bg-white  px-2 rounded-2xl  focus:outline-none font-bold font-serif"
      />
    </div>
  );
};

export default Input;
