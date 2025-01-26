import React from "react";

const Button = ({ text, style, selectedCategory, setCategory }) => {
  console.log(selectedCategory);
  return (
    <button
      style={{ backgroundColor: style }}
      type="button"
      className={`w-[60px] h-[40px] bg-[${style}] rounded-xl font-bold tracking-wider cursor-pointer shadow-2xl border-none shadow-red-800 font-serif hover:opacity-100 duration-1000  ${
        selectedCategory === text ? "opacity-100" : "opacity-50"
      }`}
      onClick={() => {
        console.log("Category: ", text);
        setCategory(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
