import React, { useState } from "react";
import { Loader } from "lucide-react";

import { useQuoteStore } from "../../store/quote.store";
// Icons
import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";

const Card = ({
  quotes,
  handleLeft,
  handleRight,
  currentIndex,
  isCategoryImageLoading,
}) => {
  const { isFetchingQuotes } = useQuoteStore();

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center pt-40 ">
        <div className="relative">
          {isFetchingQuotes ? (
            <div className="aspect-[2/3]  w-[200px] md:w-[250px]  bg-black rounded-2xl flex items-center justify-center">
              <Loader className="animate-spin stroke-white" />
            </div>
          ) : isCategoryImageLoading ? (
            <div className="aspect-[2/3]  w-[200px] md:w-[250px]  bg-black rounded-2xl flex items-center justify-center">
              <Loader className="animate-spin stroke-white" />
            </div>
          ) : (
            <img
              src={quotes[currentIndex]?.image || "../assets/sample.jpg"}
              alt="명언이미지"
              className="aspect-[2/3] rounded-2xl w-[200px] md:w-[250px] "
            />
          )}

          <CircleArrowRight
            className="text-2xl absolute right-[-50px] size-10 cursor-pointer top-[50%]  opacity-50 duration-500 hover:opacity-100 "
            onClick={handleRight}
          />
          <CircleArrowLeft
            className="text-2xl absolute left-[-50px] size-10 cursor-pointer top-[50%] opacity-50 duration-500 hover:opacity-100"
            onClick={handleLeft}
          />
        </div>
      </div>
      {/* Text */}
      <div className="text-center mt-10 flex-col space-y-2">
        <h2 className="card-title font-semibold">
          {quotes[currentIndex]?.author}
        </h2>
        <p className="font-bold">"{quotes[currentIndex]?.content}"</p>
      </div>
    </div>
  );
};

export default Card;
