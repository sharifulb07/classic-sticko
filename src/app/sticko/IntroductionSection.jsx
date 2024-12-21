import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function IntroductionSection() {
  return (
    <>
      {/* introduction section */}
      <div className="mt-[228px] flex justify-center">
        <div className="container-xs flex items-start justify-center md:flex-col md:px-5">
          <div className="flex flex-1 flex-col items-start gap-[18px] md:self-stretch">
            <div className="flex flex-col gap-[34px] self-stretch">
              <div className="flex flex-col items-start">
                <Heading
                  size="h1_bold"
                  as="h2"
                  className="bg-gradient2 bg-clip-text text-[48px] font-bold text-transparent md:text-[44px] sm:text-[38px]"
                >
                  Sticko by Fixefly{" "}
                </Heading>
                <Heading
                  size="h1_bold"
                  as="h3"
                  className="text-shadow-ts text-[48px] font-bold text-gray-900_01 md:text-[44px] sm:text-[38px]"
                >
                  UI/UX agency
                </Heading>
              </div>
              <Text
                size="title1"
                as="p"
                className="w-[92%] text-justify text-[19px] font-normal leading-[140%] text-blue_gray-500 md:w-full"
              >
                <>
                  We’ve all been there working in the browser, copying text, and suddenly having a great idea, only to
                  forget it! Switching tabs or openings windows notepad to copy multiple pieces of text is such a
                  hassle.
                  <br />
                  <br />
                  So, we at Fixefly thought, “Why not make life easier?”
                  <br />
                  We’ve created an incredibly easy-to-use extension that keeps your notes and ideas right at your
                  fingertips. <br />
                  <br />
                  Whether you&#39;re a student, developer, or designer, Sticko helps you stay organized and productive
                  without the hassle. <br />
                  <br />
                  No more lost thoughts just smooth, productive vibes! 🚀💡
                </>
              </Text>
            </div>
            <Button
              size="5xl"
              color="light_blue_A700_01_light_blue_400"
              rightIcon={
                <Img
                  src="img_arrowleft.svg"
                  width={24}
                  height={24}
                  alt="Arrow Left"
                  className="h-[24px] w-[24px] object-contain"
                />
              }
              className="min-w-[234px] gap-4 rounded-[28px] px-[34px] font-bold sm:px-5"
            >
              Let’s Try Free
            </Button>
          </div>
          <div className="relative h-[708px] w-[46%] self-center md:w-full">
            <Img
              src="img_fixefly_3d_2.png"
              width={500}
              height={354}
              alt="Fixefly 3d 2"
              className="absolute bottom-[-0.41px] right-[-0.25px] m-auto h-[354px] w-[90%] object-contain"
            />
            <Img
              src="img_fixefly_3d_1_1.png"
              width={494}
              height={554}
              alt="Fixefly 3d 1 1"
              className="absolute right-[2.85px] top-0 m-auto h-[554px] w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
