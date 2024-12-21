import { Heading, Img, RatingBar } from "./..";
import React from "react";

export default function UserProfile({
  featureDescription = "Taking quick notes while studying online has never been this easy. Sticko helps me organize my thoughts effortlessly, and I love how my notes are saved automatically.",
  featureTitle = "David Kure",
  featureSubtitle = "Student",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-5 px-10 py-11 md:py-5 sm:p-5 bg-white-a700_01 rounded-[50px]`}
    >
      <Img src="img_thumbs_up_blue_50_04.svg" width={48} height={42} alt="Thumbs Up" className="h-[42px]" />
      <Heading
        size="textmd"
        as="p"
        className="w-full font-inter text-[14px] font-normal leading-5 tracking-[0.20px] text-gray-900"
      >
        {featureDescription}
      </Heading>
      <RatingBar value={1} isEditable={true} color="#0077ff" activeColor="#0077ff" size={12} className="flex gap-2.5" />
      <div className="h-px self-stretch bg-blue-50_04" />
      <div className="flex w-[54%] items-center gap-4 rounded-lg">
        <Img
          src="img_card_photo_3.png"
          width={64}
          height={64}
          alt="Card Photo 3"
          className="h-[64px] w-[40%] rounded-lg object-contain"
        />
        <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
          <Heading
            size="headingmd"
            as="p"
            className="font-inter text-[14px] font-semibold tracking-[0.20px] text-gray-900"
          >
            {featureTitle}
          </Heading>
          <Heading
            size="texts"
            as="p"
            className="font-inter text-[12px] font-normal tracking-[0.20px] text-blue_gray-400_01"
          >
            {featureSubtitle}
          </Heading>
        </div>
      </div>
    </div>
  );
}
