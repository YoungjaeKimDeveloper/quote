import React from "react";
import { Link } from "react-router-dom";

const Suggestion = () => {
  return (
    <div className="mt-10">
      <Link to={"/create"}>
        <p className="animate-bounce underline cursor-pointer ">
          나만의 <span className="font-bold">명언</span> 만들어보기
        </p>
      </Link>
    </div>
  );
};

export default Suggestion;
