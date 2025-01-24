import React from "react";
import Button from "./Button";

const Category = () => {
  return (
    <div className="bg-[#CFC0C0] flex w-[350px] h-[100px] rounded-xl justify-around items-center mt-[20px] shadow-2xl">
      <Button text={"운동"} style={"#FF3B30"} />
      <Button text={"사랑"} style={"#FF69B4"} />
      <Button text={"삶"} style={"#34C759"} />
      <Button text={"공부"} style={"#007AFF"} />
    </div>
  );
};

export default Category;
