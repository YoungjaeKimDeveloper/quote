import React from "react";
import { Image } from "lucide-react";
import Input from "../components/Input";
import Category from "../components/Category";

const CreatePage = () => {
  return (
    <div className=" mt-10 lg:mt-30">
      <form className="flex flex-col  items-center justify-center gap-y-10">
        <Input text="Author" placeholder="Author" target={"author"} />
        <Input
          text="Content"
          placeholder="오늘 하지 않으면 내일은 없다"
          target={"content"}
        />
        <label htmlFor="image">
          <input type="file" id="image" hidden />
          <Image
            size="40"
            className="duration-1000 hover:stroke-yellow-300 cursor-pointer"
          />
        </label>
        <Category />
        <button
          className="mt-5  w-1/2 p-4 rounded-2xl opacity-75 bg-white cursor-pointer duration-1000 hover:opacity-100 font-serif"
          type="submit"
        >
          명언 제작하기
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
