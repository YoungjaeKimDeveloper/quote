import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Category from "../components/Category";

import { useQuoteStore, } from "../../store/quote.store";

const HomePage = () => {
  const { getQuote, quotes } = useQuoteStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    console.info("Handle Left Clicked");
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleRight = () => {
    console.log("HandleRight Clicked");
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <div className="flex justify-center items-center w-full h-[calc(100%-200px)] flex-col">
      <Card
        quotes={quotes}
        handleLeft={handleLeft}
        handleRight={handleRight}
        currentIndex={currentIndex}
      />
      <Category quotes={quotes} currentIndex={currentIndex} />
    </div>
  );
};

export default HomePage;
