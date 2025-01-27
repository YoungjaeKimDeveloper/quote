import React from "react";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import Footer from "./components/Footer";
import NoPage from "./Pages/NoPage";

const App = () => {
  return (
    <div>
      <Header text="오늘의 명언" />
      <div className="bg-gradient-to-r from-white-500  to-red-500 w-full min-h-screen max-h-full flex flex-col items-center ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
