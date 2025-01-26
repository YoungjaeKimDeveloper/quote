import React from "react";

const Button = ({
  text,
  style,
  selectedCategory,
  setCategory,
  quotes,
  currentIndex,
  setPickedCategory,
  pickedCategory,
}) => {
  return (
    <button
      style={{ backgroundColor: style }}
      type="button"
      className={`w-[60px] h-[40px] bg-[${style}] rounded-xl font-bold tracking-wider cursor-pointer shadow-2xl border-none shadow-red-800 font-serif hover:opacity-100  ${
        selectedCategory === text ? "opacity-100" : "opacity-50 "
      } ${
        quotes?.length > 0 && quotes[currentIndex]?.category == text
          ? "opacity-100"
          : "opacity-50 "
      }`}
      onClick={() => {
        setCategory(text);
        setPickedCategory(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
