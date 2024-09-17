"use client";
import React, { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Add any dark mode logic here, such as updating the theme in Next.js
  };

  return (
    <div className="flex items-center justify-center flex-col ">
      <div
        className={`w-10 h-[100px] rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-y-7" : "translate-y-0"
          }`}
        >
          <div className={` ${
          isDarkMode ? "bg-blue-500" : "bg-blue-300"
        }`}>
            <BsMoonFill className="text-blue-700 w-5 h-5 m-0.5" />
          </div>

          <div>
            <BsSunFill className="text-yellow-500 w-5 h-5 m-0.5" />
          </div>

          {/* {isDarkMode ? (
            <BsMoonFill className="text-blue-700 w-5 h-5 m-0.5" />
          ) : (
            <BsSunFill className="text-yellow-500 w-5 h-5 m-0.5" />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
