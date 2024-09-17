import Image from "next/image";
import { BsFillSendFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import ChartSidebar from "@/components/ChartSidebar";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <ChartSidebar />
        <div className="w-full">
          <div className="pb-4 ">
            <div className=" h-[calc(100vh-200px)] rounded-md p-3 overflow-y-auto ">
              <div className="w-full flex justify-start items-center">
                <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[75%]">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src="/assets/images/logo.jpeg"
                      alt="Sample Image"
                      width={50}
                      height={50}
                      className=" rounded-full w-[50px] h-[50px]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h1 className="text-black font-medium text-sm">
                        Unarshia
                      </h1>
                      <span className="text-black text-xs">04.23</span>
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-white shadow-lg shadow-white-500/50 text-black py-4 px-7 rounded-r-full rounded-es-full">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.placeat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end items-center">
                <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[45%]">
                  <div>
                    <div className="flex items-center justify-end gap-2 pb-2">
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <h1 className="text-black font-medium text-sm">
                          Unarshia
                        </h1>
                        <span className="text-black text-xs">04.23</span>
                      </div>
                      <div className="w-[20px] h-[20px]">
                        <Image
                          src="/assets/images/logo.jpeg"
                          alt="Sample Image"
                          width={20}
                          height={20}
                          className=" rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-white shadow-lg shadow-white-500/50 text-black py-4 px-7  rounded-l-full rounded-ee-full">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.placeat Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.placeat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-center">
                <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[75%]">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src="/assets/images/logo.jpeg"
                      alt="Sample Image"
                      width={50}
                      height={50}
                      className=" rounded-full w-[50px] h-[50px]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h1 className="text-black font-medium text-sm">
                        Unarshia
                      </h1>
                      <span className="text-black text-xs">04.23</span>
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-white shadow-lg shadow-white-500/50 text-black py-4 px-7 rounded-r-full rounded-es-full">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.placeat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="flex gap-3 px-5">
            <div className="flex items-center w-full gap-4">
              <div>
                <Image
                  src="/assets/images/logo.jpeg"
                  alt="Sample Image"
                  width={50}
                  height={50}
                  className=" rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="flex items-center w-full border-primary border shadow-primary/50 bg-white rounded-xl  py-[14px] px-4">
                <div className="flex items-center w-full">
                  <span className="text-gray-400 text-xl">
                    <MdAttachFile />
                  </span>
                  <input
                    className="w-full flex justify-between px-2 border-none items-center  focus:border-blue-500 rounded-md outline-none text-black"
                    type="text"
                    placeholder="Type Something..."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xl">
                      <FaFileAlt />
                    </span>
                    <span className="whitespace-nowrap text-gray-400">
                      2 Files
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xl">
                      <FaMicrophoneAlt />
                    </span>
                  </div>
                  <button className="font-semibold border-l-black px-4 text-xl bg-none border-none rounded-sm text-primary">
                    <BsFillSendFill />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
