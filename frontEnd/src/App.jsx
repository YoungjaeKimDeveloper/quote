import React from "react";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";

const App = () => {
  return (
    <div>
      <Header text="오늘의 명언" />
      <div className="bg-gradient-to-r from-white-500  to-red-500 w-full min-h-screen max-h-full flex flex-col items-center ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
