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

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserList from "./UserList";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex w-full">
      <UserList />
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
            <h4 className="text-black font-semibold"> Duxica Team</h4>
            <p className="text-gray-300 text-sm">
              <span>22</span> Members. <span>12</span> Online
            </p>
          </div>
        </div>
        <div className="text-gray-300 text-xl flex items-center justify-center gap-2">
          <div>
            <span>
              <IoIosCall />
            </span>
          </div>
          <div>
            <span>
              <IoSearchSharp />
            </span>
          </div>
          <div>
            <span onClick={togglePopup} className="cursor-pointer">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>

      {/* Popup Menu */}
      {isPopupOpen && (
        <div className="fixed right-0 top-0 w-[300px] h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="p-5">
            <div className="flex justify-between items-center border-b pb-7 pt-1">
              <div className="flex gap-2 items-center">
                <span className="w-[20px] p-[4px] flex items-center justify-center rounded-full h-[20px] bg-primary text-white text-xl">
                  <BsThreeDots />
                </span>
                <h3 className="text-lg text-black font-semibold">Group info</h3>
              </div>
              <div onClick={togglePopup}>
                <span className="text-xl text-gray-400">
                  <IoClose />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center text-center flex-col gap-3">
              <div className="pt-5">
                <Image
                  src="/assets/images/logo.jpeg"
                  alt="Sample Image"
                  width={60}
                  height={60}
                  className=" rounded-full"
                />
              </div>
              <div>
                <h3 className="text-black font-semibold text-lg">
                  Duxica Team
                </h3>
                <span className="text-gray-400 text-sm">22 Members</span>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-black font-semibold">Description</h4>
              <p className="text-gray-400 text-sm">
                We are digital design agency based in vancouver, Canada, with
                <span className="text-black"> 10+ years</span> of experience designing products
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isPopupOpen && (
        <div
          onClick={togglePopup}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Header;
