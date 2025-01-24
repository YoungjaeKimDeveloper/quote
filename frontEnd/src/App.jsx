import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Category from "./components/Category";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-white-500  to-red-500 w-full h-screen flex flex-col items-center ">
      <Header />
      <div className="flex justify-center items-center w-full h-[calc(100%-200px)] flex-col">
        <Card />
        <Category />
      </div>
    </div>
  );
};

export default App;
