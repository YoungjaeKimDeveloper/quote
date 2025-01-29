import React from "react";
import { useQuoteStore } from "../../store/quote.store";

const Button = ({
  text,
  style,
  selectedCategory,
  quotes,
  currentIndex,
  handleCategoryChange,
}) => {
  const { getQuotesByCategory } = useQuoteStore();
  return (
    <button
      style={{ backgroundColor: style }}
      type="button"
      className={`w-[60px] h-[40px] bg-[${style}] rounded-xl font-bold tracking-wider cursor-pointer shadow-2xl border-none shadow-red-800 font-serif hover:opacity-100  ${
        selectedCategory === text ? "opacity-100" : "opacity-50 "
      } `}
      onClick={() => {
        handleCategoryChange(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
