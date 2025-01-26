import React from "react";
import { Link } from "react-router-dom";
import { SquarePlus, House } from "lucide-react";
const Header = ({ text }) => {
  return (
    <div className="bg-white text-sm lg:text-2xl py-4 w-full h-[60px] flex items-center justify-evenly shadow-2xl text-center ">
      <div className="w-[60px]"></div>
      <Link to={"/"}>
        <h2 className="font-bold tracking-wider text-2xl text-center">
          {text}
        </h2>
      </Link>
      <div className="flex gap-x-4 mr-2">
        <Link to={"/"}>
          <House className="hover:stroke-red-200 duration-500 cursor-pointer" />
        </Link>
        <Link to={"/create"}>
          <SquarePlus className="hover:stroke-yellow-200 duration-500 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
