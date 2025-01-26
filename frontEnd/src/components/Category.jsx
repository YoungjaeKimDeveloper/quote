import React, { useState } from "react";
import Button from "./Button";

const Category = ({ selectedCategory, setCategory, quotes, currentIndex }) => {
  const [pickedCategory, setPickedCategory] = useState("");
  return (
    <div className="bg-[#CFC0C0] flex w-[350px] h-[100px] rounded-xl justify-around items-center mt-[20px] shadow-2xl p-4">
      <Button
        text={"운동"}
        style={"#FF3B30"}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
        quotes={quotes}
        currentIndex={currentIndex}
        setPickedCategory={setPickedCategory}
        pickedCategory={pickedCategory}
      />
      <Button
        text={"사랑"}
        style={"#FF69B4"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        quotes={quotes}
        currentIndex={currentIndex}
        setPickedCategory={setPickedCategory}
        pickedCategory={pickedCategory}
      />
      <Button
        text={"삶"}
        style={"#34C759"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        quotes={quotes}
        currentIndex={currentIndex}
        setPickedCategory={setPickedCategory}
        pickedCategory={pickedCategory}
      />
      <Button
        text={"공부"}
        style={"#007AFF"}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        quotes={quotes}
        currentIndex={currentIndex}
        setPickedCategory={setPickedCategory}
        pickedCategory={pickedCategory}
      />
    </div>
  );
};

export default Category;
