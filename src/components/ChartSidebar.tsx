import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import { RiCheckDoubleFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { LuFileSymlink } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { RiPushpin2Fill } from "react-icons/ri";
import Link from "next/link";

const ChartSidebar = () => {
  return (
    <div className="w-[350px] bg-[#FAFAFA] h-[calc(100vh-80px)] flex flex-col">
 
      <div className="flex-1 overflow-hidden shadow-md">
        <div >
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <h3 className="text-black text-xl font-semibold">
              Messages <span className="text-sm text-primary">48 new</span>
            </h3>
            <span className=" text-primary text-xl">
              <FaEdit />
            </span>
          </div>

          {/* Search Input */}
          <div className="mt-3 px-4">
            <form>
              <div className="flex items-center mt-3 rounded bg-white p-3 shadow-sm">
                <input
                  type="text"
                  className="w-full bg-none border-none outline-none text-black"
                  placeholder="Search messages"
                />
                <button className="text-gray-300 text-xl">
                  <IoSearchSharp />
                </button>
              </div>
            </form>
          </div>

          {/* Pin Chats */}

          <div className="flex items-center gap-2 pb-3 mt-5 px-4">
            <span className="text-gray-400 text-xl">
              <RiPushpin2Fill />
            </span>
            <h3 className="uppercase text-sm text-gray-400 font-medium">
              Pin Chats
            </h3>
          </div>

          {/* Example pinned chat */}
          <div className="border-b relative transition-all">
            <Link href={""}>
              <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/images/logo.jpeg"
                    alt="Sample Image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-md mb-0 text-black">Arman</h3>
                    <span className="text-xs text-gray-400">
                      Here is some 3D short I designed
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="w-[20px] h-[20px] bg-red-500 flex items-center justify-center text-sm rounded-full">
                    2
                  </div>
                  <span className="text-xs text-gray-400">12:52</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Groups & Channels */}
          <div className="flex items-center gap-2 mt-5 px-4">
            <span className=" bg-gray-400 w-[20px] h-[20px] rounded-md flex items-center justify-center">
              #
            </span>
            <h3 className="  uppercase text-sm text-gray-400 font-medium">
              Groups & Channels
            </h3>
          </div>

          <div className="mt-4 relative">
            <div className="flex items-center px-4 py-2 justify-between gap-4 bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full before:bg-primary">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div>
                    <Image
                      src="/assets/images/logo.jpeg"
                      alt="Sample Image"
                      width={40}
                      height={40}
                      className=" rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Image
                      src="/assets/images/logo.jpeg"
                      alt="Sample Image"
                      width={20}
                      height={20}
                      className=" rounded-full"
                    />
                    <Image
                      src="/assets/images/logo.jpeg"
                      alt="Sample Image"
                      width={20}
                      height={20}
                      className=" rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-medium text-black">
                    Duxica Team
                  </h3>
                  <span className="text-xs text-gray-400">22 Members</span>
                </div>
              </div>
              <div className="flex justify-end gap-2 text-right items-end">
                <div className="w-[20px] h-[20px] bg-white flex items-center justify-center text-sm rounded-full ">
                  <span className="text-primary"> @</span>
                </div>
                <div className="w-[20px] h-[20px] bg-primary flex items-center justify-center text-sm rounded-full ">
                  5
                </div>
              </div>
            </div>
          </div>

          {/* All Messages */}
          <div className="pb-5">
            <h3 className="mt-5 px-4 pb-2 uppercase text-sm text-gray-400 font-medium">
              All Messages
            </h3>
            <div className="flex-1 overflow-y-auto h-[calc(70vh-300px)] pb-10">
              <div className="mt-2 border-b relative transition-all">
                <Link href={""}>
                  <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/images/logo.jpeg"
                        alt="Sample Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-md font-medium text-black">
                          Arman
                        </h3>
                        <div className="flex items-center gap-1">
                          <MdKeyboardVoice className="text-primary text-lg" />
                          <span className="text-gray-400 text-xs">
                            Voice Message
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <RiCheckDoubleFill className="text-green-600 text-xl" />
                      <span className="text-xs text-gray-400">12:52</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-b relative transition-all">
                <Link href={""}>
                  <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src="/assets/images/logo.jpeg"
                          alt="Sample Image"
                          width={40}
                          height={40}
                          className=" rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-md text-black">Arman</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-primary text-lg">
                            <BsThreeDots />
                          </span>
                          <span className="text-gray-400 text-xs">
                            is typing...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end flex-col text-right items-end">
                      <div className="w-[20px] h-[20px] text-green-600 text-xl flex items-center justify-center">
                        <RiCheckDoubleFill />
                      </div>
                      <span className="text-xs text-gray-400">12.52</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-b relative transition-all">
                <Link href={""}>
                  <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/images/logo.jpeg"
                        alt="Sample Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-md font-medium text-black">
                          Arman
                        </h3>
                        <div className="flex items-center gap-2">
                          <LuFileSymlink className="text-primary text-lg" />
                          <span className="text-gray-400 text-xs">3 Files</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="w-[20px] h-[20px] bg-gray-500 flex items-center justify-center text-sm rounded-full">
                        5
                      </div>
                      <span className="text-xs text-gray-400">12:52</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-b relative transition-all">
                <Link href={""}>
                  <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/images/logo.jpeg"
                        alt="Sample Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-md font-medium text-black">
                          Arman
                        </h3>
                        <div className="flex items-center gap-2">
                          <LuFileSymlink className="text-primary text-lg" />
                          <span className="text-gray-400 text-xs">3 Files</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="w-[20px] h-[20px] bg-gray-500 flex items-center justify-center text-sm rounded-full">
                        5
                      </div>
                      <span className="text-xs text-gray-400">12:52</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-b relative transition-all">
                <Link href={""}>
                  <div className="flex  items-center px-4 py-2 transition justify-between gap-4 hover:bg-[#E9F2F7] before:absolute before:left-[-0px] before:top-0 before:w-[2px] before:h-full hover:before:bg-primary">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/images/logo.jpeg"
                        alt="Sample Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-md font-medium text-black">
                          Arman
                        </h3>
                        <div className="flex items-center gap-2">
                          <LuFileSymlink className="text-primary text-lg" />
                          <span className="text-gray-400 text-xs">3 Files</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="w-[20px] h-[20px] bg-gray-500 flex items-center justify-center text-sm rounded-full">
                        5
                      </div>
                      <span className="text-xs text-gray-400">12:52</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSidebar;
