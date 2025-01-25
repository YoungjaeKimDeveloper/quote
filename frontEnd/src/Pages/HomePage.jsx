import React from "react";
import Card from "../components/Card";
import Category from "../components/Category";
import Suggestion from "../components/Suggestion";
const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100%-200px)] flex-col">
      <Card />
      <Category />
    </div>
  );
};

export default HomePage;
