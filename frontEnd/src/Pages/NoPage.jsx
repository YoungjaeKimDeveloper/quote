import React from "react";
import { ShieldQuestion } from "lucide-react";
import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className="flex w-full  mt-20 gap-y-20 flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
      <Link to={"/"} className="underline animate-bounce ">
        메인 페이지로 돌아가기
      </Link>
      <ShieldQuestion size={100} />
    </div>
  );
};

export default NoPage;
