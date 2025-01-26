import React from "react";
// Icons
import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
const Card = ({ style }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center pt-40 ">
        <div className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="aspect-[2/3] rounded-2xl w-[200px] md:w-[250px] "
          />
          <CircleArrowRight className="text-2xl absolute right-[-50px] size-10 cursor-pointer top-[50%]  opacity-50 duration-500 hover:opacity-100 " />
          <CircleArrowLeft className="text-2xl absolute left-[-50px] size-10 cursor-pointer top-[50%] opacity-50 duration-500 hover:opacity-100" />
        </div>
      </div>
      {/* Text */}
      <div className="text-center mt-10 flex-col space-y-2">
        <h2 className="card-title font-semibold">Jeki</h2>
        <p className="font-bold">"이기는 유일한 방법은 그만두지않는것이다"</p>
      </div>
    </div>
  );
};

export default Card;
