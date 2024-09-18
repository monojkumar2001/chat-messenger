'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const ProfileImageUploader = () => {
  const [imageSrc, setImageSrc] = useState("/assets/images/profile.jpg");
  // const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      // setSelectedImage(file);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#CA52AB] to-[#a97a80] border-2 rounded-full p-1 relative">
      <Image
        src={imageSrc}
        alt="Profile"
        width={60}
        height={60}
        className="rounded-full bg-white p-[2px]"
      />
      <label
        htmlFor="profile"
        className="absolute text-white bg-primary text-lg border-2 border-white rounded-full top-11 right-0"
      >
        <FiPlus />
      </label>
      <input
        type="file"
        id="profile"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageUploader;
