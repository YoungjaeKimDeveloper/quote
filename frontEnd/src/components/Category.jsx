import React from "react";
import Button from "./Button";

const Category = ({ selectedCategory, setCategory }) => {
  console.log("HERE IS THE SELECTED CATEGORY: ", selectedCategory);
  return (
    <div className="bg-[#CFC0C0] flex w-[350px] h-[100px] rounded-xl justify-around items-center mt-[20px] shadow-2xl p-4">
      <Button
        text={"운동"}
        style={"#FF3B30"}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      <Button
        text={"사랑"}
        style={"#FF69B4"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
      <Button
        text={"삶"}
        style={"#34C759"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
      <Button
        text={"공부"}
        style={"#007AFF"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
    </div>
  );
};

export default Category;
