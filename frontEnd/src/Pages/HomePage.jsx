import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Category from "../components/Category";
import { Link, useNavigate } from "react-router-dom";
import { useQuoteStore } from "../../store/quote.store";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const defaultCategory = "삶";
  const { getQuote, quotes, getQuotesByCategory } = useQuoteStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  // isCategoryImageLoading
  const [isCategoryImageLoading, setIsCategoryImageLoading] = useState(false);

  const handleLeft = () => {
    console.info("Handle Left Clicked");
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  // 카테고리 핸들러
  const handleCategoryChange = async (category) => {
    setIsCategoryImageLoading(true);
    await getQuotesByCategory(category);
    setCurrentIndex(0);
    setIsCategoryImageLoading(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    getQuote();
    getQuotesByCategory(defaultCategory);
  }, [getQuote, getQuotesByCategory]);

  return (
    <main>
      <article
        className="flex justify-center items-center w-full h-[calc(100%-200px)] flex-col"
        aria-label="오늘의 명언 홈 페이지"
      >
        <Card
          quotes={quotes}
          handleLeft={handleLeft}
          handleRight={handleRight}
          currentIndex={currentIndex}
          isCategoryImageLoading={isCategoryImageLoading}
        />
        <Category
          quotes={quotes}
          currentIndex={currentIndex}
          handleCategoryChange={handleCategoryChange}
        />
      </article>
    </main>
  );
};

export default HomePage;
