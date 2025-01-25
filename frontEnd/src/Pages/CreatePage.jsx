import React from "react";
import { Image } from "lucide-react";

const CreatePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-60 ">
      <h1>새로운 명언 만들기</h1>
      <form
        action=""
        className="flex flex-col  items-center justify-center bg-green-300"
      >
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Content" />
        <label htmlFor="image">
          <input type="file" id="image" hidden />
          <Image />
        </label>
      </form>
    </div>
  );
};

export default CreatePage;
