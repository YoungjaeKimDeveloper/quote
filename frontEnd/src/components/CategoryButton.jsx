import React from "react";
import { useQuoteStore } from "../../store/quote.store";

const CategoryButton = ({
  text,
  style,
  selectedCategory,
  setCategory,
  quotes,
  currentIndex,
  setPickedCategory,
  pickedCategory,
  setNewQuote,
}) => {
  const { getQuotesByCategory } = useQuoteStore();
  return (
    <button
      style={{ backgroundColor: style }}
      type="button"
      className={`w-[60px] h-[40px] rounded-xl font-bold tracking-wider cursor-pointer shadow-2xl border-none shadow-red-800 font-serif   ${
        selectedCategory === text ? "opacity-100" : "opacity-50 "
      } `}
      onClick={() => {
        // setCategory(text);

        setNewQuote((prev) => ({ ...prev, category: text }));
      }}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
