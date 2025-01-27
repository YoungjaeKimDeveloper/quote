import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-6 w-full flex flex-col items-center justify-center  ">
      {/* 소셜 미디어 및 링크 */}
      <div className="flex gap-x-6 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 duration-300"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 duration-300"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 duration-300"
        >
          Twitter
        </a>
      </div>

      {/* 내부 링크 */}
      <nav className="flex gap-x-6 mb-4">
        <Link to="/" className="hover:underline">
          홈
        </Link>
        <Link to="/create" className="hover:underline">
          명언 생성하기
        </Link>
      </nav>

      {/* 저작권 및 사이트 정보 */}
      <div className="text-center">
        <p className="text-gray-400 text-xs">
          &copy; 2025 오늘의 명언. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1"></p>
      </div>
    </footer>
  );
};

export default Footer;
