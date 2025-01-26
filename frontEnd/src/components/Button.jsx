import React from "react";

const Button = ({ text, style }) => {
  return (
    <button
      style={{ backgroundColor: style }}
      className={`w-[60px] h-[40px] bg-[${style}] rounded-xl font-bold tracking-wider cursor-pointer shadow-2xl border-none shadow-red-800 font-serif opacity-50 hover:opacity-100 duration-1000`}
    >
      {text}
    </button>
  );
};

export default Button;
