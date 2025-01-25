import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";

const App = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-white-500  to-red-500 w-full h-screen flex flex-col items-center ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
