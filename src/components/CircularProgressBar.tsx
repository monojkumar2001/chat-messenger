// components/CircularProgressBar.js
import React from "react";
import { FaFolderOpen } from "react-icons/fa6";
interface CircularProgressBarProps {
  percentage: number;
  totalSize: number;
  usedSize: number;
}
const CircularProgressBar =  ({ percentage, totalSize, usedSize }: CircularProgressBarProps) => {
  const radius = 25;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" relative flex items-center justify-center ">
        <svg
          height="50"
          width="50"
          className="transform -rotate-90 overflow-hidden"
        >
          <circle
            stroke="#e5e7eb" 
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#3497D8"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute">
          <span className="text-[20px] text-primary">
            <FaFolderOpen />
          </span>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-lg font-bold text-gray-700">
          {usedSize}
          <span className="text-xs">GB</span>
        </p>
        <p className="text-xs text-gray-500">{totalSize}GB</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;
