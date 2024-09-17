// import Image from "next/image";
// import React from "react";
// import { IoIosCall } from "react-icons/io";
// import { IoSearchSharp } from "react-icons/io5";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import UserList from "./UserList";

// const Header = () => {
//   return (
//     <div className="flex w-full">
//       <UserList />
//       <div className="w-full h-[80px]  px-5 bg-white py-2 shadow-md flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div>
//             <Image
//               src="/assets/images/logo.jpeg"
//               alt="Sample Image"
//               width={60}
//               height={60}
//               className=" rounded-full"
//             />
//           </div>
//           <div>
//             <h4 className="text-black font-semibold"> Duxica Team</h4>
//             <p className="text-gray-300 text-sm">
//               <span>22</span>Members. <span>12</span>Online
//             </p>
//           </div>
//         </div>
//         <div className="text-gray-300 text-xl flex items-center justify-center gap-2">
//           <div>
//             <span>
//               <IoIosCall />
//             </span>
//           </div>
//           <div>
//             <span>
//               <IoSearchSharp />
//             </span>
//           </div>
//           <div>
//             <span>
//               <BsThreeDotsVertical />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
'use client'
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex w-full relative">
      {/* Header Section */}
      <div className="w-full h-[80px] px-5 bg-white py-2 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src="/assets/images/logo.jpeg"
              alt="Sample Image"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="text-black font-semibold">Duxica Team</h4>
            <p className="text-gray-300 text-sm">
              <span>22</span> Members, <span>12</span> Online
            </p>
          </div>
        </div>
        <div className="text-gray-300 text-xl flex items-center justify-center gap-2">
          {/* Menu Button */}
          <div onClick={togglePopup}>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>

      {/* Popup Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[350px] p-5 transform transition-transform duration-300 ${
          isPopupOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/logo.jpeg"
            alt="Sample Image"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h4 className="text-black font-semibold">Duxica Team</h4>
          <p className="text-gray-500 text-sm">22 Members</p>
          <p className="text-gray-500 text-sm">12 Online</p>
        </div>
        {/* Add more content here */}
      </div>

      {/* Optional backdrop blur */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        ></div>
      )}
    </div>
  );
};

export default Header;

