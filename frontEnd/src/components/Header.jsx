import React from "react";
import { Link } from "react-router-dom";
import { SquarePlus, House } from "lucide-react";
const Header = ({ text }) => {
  return (
    <header className="bg-black text-white text-sm lg:text-2xl py-4 w-full h-[60px] flex items-center justify-evenly shadow-2xl text-center ">
      <div className="w-[60px]"></div>
      <Link to={"/"}>
        <h1 className="font-bold tracking-wider text-2xl text-center font-serif">
          오늘의 명언
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-x-4 mr-2">
          <li>
            <Link to={"/"} aria-label="홈">
              <House className="hover:stroke-red-200 duration-500 cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link to={"/create"} aria-label="명언 생성">
              <SquarePlus className="hover:stroke-yellow-200 duration-500 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
