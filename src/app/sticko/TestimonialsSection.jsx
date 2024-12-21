import { Heading, Img, RatingBar } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

export default function TestimonialsSection() {
  return (
    <>
      {/* testimonials section */}
      <div className="mt-[166px] flex justify-center gap-9 md:flex-col">
        <div className="flex w-[60%] justify-center gap-9 md:w-full md:flex-col md:px-5">
          <div className="flex w-full flex-col items-start gap-5 rounded-[50px] bg-white-a700_01 px-10 py-11 md:py-5 sm:p-5">
            <Img src="img_thumbs_up_blue_50_04.svg" width={48} height={42} alt="Thumbs Up" className="h-[42px]" />
            <div className="flex flex-col gap-5 self-stretch">
              <Heading
                size="textmd"
                as="h2"
                className="font-inter text-[14px] font-normal leading-5 tracking-[0.20px] text-gray-900"
              >
                Sticko has completely transformed how I take notes while researching. It&#39;s quick, seamless, and I
                love the ability to switch themes. I can’t imagine browsing without it!
              </Heading>
              <div className="flex gap-1.5">
                <Img src="img_signal.svg" width={14} height={12} alt="Signal" className="h-[12px]" />
                <Img src="img_signal.svg" width={14} height={12} alt="Signal" className="h-[12px]" />
                <Img src="img_signal.svg" width={14} height={12} alt="Signal" className="h-[12px]" />
                <Img src="img_signal.svg" width={14} height={12} alt="Signal" className="h-[12px]" />
                <Img src="img_signal_light_blue_a700_01.svg" width={12} height={12} alt="Signal" className="h-[12px]" />
              </div>
            </div>
            <div className="h-px self-stretch bg-blue-50_04" />
            <div className="flex w-[62%] items-center gap-4 rounded-lg md:w-full">
              <Img
                src="img_card_photo_1.png"
                width={64}
                height={64}
                alt="Card Photo 1"
                className="h-[64px] w-[36%] rounded-lg object-contain"
              />
              <div className="flex flex-1 flex-col items-start justify-center">
                <Heading
                  size="headingmd"
                  as="h3"
                  className="font-inter text-[14px] font-semibold tracking-[0.20px] text-gray-900"
                >
                  Jane Suey
                </Heading>
                <Heading
                  size="texts"
                  as="h4"
                  className="font-inter text-[12px] font-normal tracking-[0.20px] text-blue_gray-400_01"
                >
                  Freelance Writer
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-5 rounded-[50px] bg-white-a700_01 px-10 py-[34px] sm:p-5">
            <Img src="img_thumbs_up_blue_50_04.svg" width={48} height={42} alt="Thumbs Up" className="h-[42px]" />
            <Heading
              size="textmd"
              as="h5"
              className="w-full font-inter text-[14px] font-medium leading-5 tracking-[0.20px] text-gray-900"
            >
              I’ve tried countless note-taking tools, but Sticko stands out for its simplicity and efficiency. It helps
              me capture ideas instantly and keeps my workflow smooth. A game-changer for productivity!
            </Heading>
            <RatingBar
              value={1}
              isEditable={true}
              color="#0077ff"
              activeColor="#0077ff"
              size={12}
              className="flex gap-2.5"
            />
            <div className="h-px self-stretch bg-blue-50_04" />
            <div className="flex w-[62%] items-center gap-4 rounded-lg md:w-full">
              <Img
                src="img_card_photo_2.png"
                width={64}
                height={64}
                alt="Card Photo 2"
                className="h-[64px] w-[36%] rounded-lg object-contain"
              />
              <div className="flex flex-1 flex-col items-start justify-center gap-0.5">
                <Heading
                  size="headingmd"
                  as="h6"
                  className="font-inter text-[14px] font-semibold tracking-[0.20px] text-gray-900"
                >
                  Mark Tome
                </Heading>
                <Heading
                  size="texts"
                  as="p"
                  className="font-inter text-[12px] font-normal tracking-[0.20px] text-blue_gray-400_01"
                >
                  Project Manager
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-9 flex w-[60%] gap-9 md:ml-0 md:w-full md:flex-col md:px-5">
          <UserProfile />
          <UserProfile />
        </div>
      </div>
    </>
  );
}
