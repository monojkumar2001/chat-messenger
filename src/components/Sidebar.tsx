import React from "react";
import Image from "next/image";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { AiFillSound } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { MdOutlineWifiCalling } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import CircularProgressBar from "./CircularProgressBar";
import ProfileImageUploader from "./ProfileImageUploader";
const Sidebar = () => {
  return (
    <div className=" w-[100px]  min-h-screen bg-white shadow-md">
      <div className="flex items-center w-full flex-col gap-[30px] justify-center px-4">
        <div className="pt-5">
          <Image
            src="/assets/images/logo.jpeg"
            alt="Sample Image"
            width={60}
            height={60}
            className=" rounded-full"
          />
        </div>
      
        <ProfileImageUploader />
        <div className="flex flex-col gap-5  items-center justify-between h-[calc(100vh-300px)]">
          <div className="w-full flex flex-col gap-5  items-center">
            <div className="border-b border-[#C3C3C3] flex flex-col gap-5 w-full items-center justify-center pb-5">
              <div className="relative">
                <Link href={""}>
                  <div className="text-primary text-[24px] before:absolute before:right-[-34px] before:top-0 before:w-[2px] before:h-full before:bg-primary">
                    <HiChatBubbleBottomCenterText />
                  </div>
                </Link>
              </div>

              <div>
                <Link href={""}>
                  <div className="text-[#C3C3C3] text-[24px]">
                    <HiChatBubbleBottomCenterText />
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-b border-[#C3C3C3] flex flex-col gap-5 w-full items-center justify-center pb-5">
              <div>
                <Link href={""}>
                  <div className="text-[#C3C3C3] text-[24px]">
                    <AiFillSound />
                  </div>
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <div className="text-[#C3C3C3] text-[24px]">
                    <HiMiniUsers />
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-b border-[#C3C3C3] flex flex-col gap-5 w-full items-center justify-center pb-5">
              <div>
                <Link href={""}>
                  <div className="text-[#C3C3C3] text-[24px]">
                    <MdOutlineWifiCalling />
                  </div>
                </Link>
              </div>
            </div>
            <div className="border-b border-[#C3C3C3] flex flex-col gap-5 w-full items-center justify-center pb-5">
              <div>
                <Link href={""}>
                  <div className="text-[#C3C3C3] text-[24px]">
                    <RiSettingsFill />
                  </div>
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <div className="text-[#f83737] text-[24px]">
                    <RiLogoutCircleRLine />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <CircularProgressBar
              percentage={60}
              usedSize={89.5}
              totalSize={150}
            />
            {/* <div>
              <ThemeToggle/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
