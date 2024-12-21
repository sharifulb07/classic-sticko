import { Heading, Img, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactSupportSection from "./ContactSupportSection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import IntroductionSection from "./IntroductionSection";
import PricingSection from "./PricingSection";
import PricingSection1 from "./PricingSection1";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

export default function StickoPage() {
  return (
    <div className="w-full bg-gray-50">
      <div>
        <div>
          <div className="flex h-[980px] items-start justify-center bg-[url(/images/img_group_16.png)] bg-cover bg-no-repeat py-[34px] md:h-auto sm:py-5">
            <div className="container-xs mb-[218px] flex justify-center px-14 md:px-5">
              <div className="flex w-[92%] flex-col gap-[122px] md:w-full md:gap-[91px] sm:gap-[61px]">
                <Header />
                <div className="flex flex-col items-center gap-[52px] px-14 md:px-5 sm:gap-[26px]">
                  <Img
                    src="img_sticko_logo_fixelfy.svg"
                    width={184}
                    height={66}
                    alt="Sticko Logo Fixelfy"
                    className="h-[66px] w-[20%] object-contain"
                  />
                  <div className="relative h-[136px] w-[54%] content-center md:h-auto">
                    <div className="flex flex-1 flex-col items-center">
                      <Heading
                        size="h2_bold"
                        as="h1"
                        className="text-shadow-ts text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px]"
                      >
                        Keep Your Ideas at Hand
                      </Heading>
                      <div className="relative mx-[34px] mt-[-8px] h-[88px] content-center self-stretch md:mx-0 md:h-auto">
                        <Heading
                          size="h2_bold"
                          as="h2"
                          className="text-shadow-ts ml-auto mr-3 text-[40px] font-bold text-black-900 md:mr-0 md:text-[38px] sm:text-[36px]"
                        >
                          Productivity
                        </Heading>
                        <Img
                          src="img_group_1597883251.svg"
                          width={284}
                          height={88}
                          alt="Group 1597883251"
                          className="absolute bottom-0 right-[-1.35px] top-0 my-auto h-[88px] w-[66%] object-contain"
                        />
                      </div>
                    </div>
                    <Heading
                      size="h2_bold"
                      as="h3"
                      className="text-shadow-ts absolute bottom-[16.35px] left-[10%] m-auto text-[40px] font-bold text-black-900 md:text-[38px] sm:text-[36px]"
                    >
                      Boost
                    </Heading>
                  </div>
                  <Text
                    size="title1"
                    as="p"
                    className="w-[68%] text-center text-[19px] font-normal leading-[140%] text-blue_gray-700 md:w-full"
                  >
                    Sticko is a browser extension that helps you capture, organize, and sync notes seamlessly, boosting
                    productivity with customizable themes and Google Drive integration.
                  </Text>
                  <div className="flex gap-[22px]">
                    <Button
                      size="6xl"
                      color="light_blue_A700_01_light_blue_400"
                      className="min-w-[174px] rounded-[28px] px-[34px] font-bold sm:px-5"
                    >
                      Get it now
                    </Button>
                    <Button
                      size="6xl"
                      variant="fill"
                      className="min-w-[160px] rounded-[28px] px-[34px] font-bold text-gray-800 !shadow-sm sm:px-5"
                    >
                      Pricing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[1] mt-[-162px] flex items-center justify-center gap-[23px] overflow-x-scroll md:flex-col">
            <div className="flex w-[608px] flex-col items-start gap-14 md:px-5 sm:gap-7">
              <div className="flex flex-col gap-3 self-stretch">
                <div className="flex flex-col items-start">
                  <Heading
                    size="h1_bold"
                    as="h4"
                    className="bg-gradient2 bg-clip-text text-[48px] font-bold text-transparent md:text-[44px] sm:text-[38px]"
                  >
                    Ideas Organized
                  </Heading>
                  <Heading
                    size="h1_bold"
                    as="h5"
                    className="text-shadow-ts text-[48px] font-bold text-gray-900_01 md:text-[44px] sm:text-[38px]"
                  >
                    Never lose again!
                  </Heading>
                </div>
                <Text size="title1" as="p" className="text-[19px] font-normal leading-[140%] text-blue_gray-400">
                  <span className="text-blue_gray-400">With Sticko,&nbsp;</span>
                  <span className="text-gray-900_01">
                    easily capture, organize, and sync your ideas across devices, ensuring you never lose a thought
                    again.
                  </span>
                </Text>
              </div>
              <div className="flex w-[46%] items-center justify-center gap-4 rounded-[16px] bg-white-a700_01 p-3 shadow-sm md:w-full">
                <Img
                  src="img_background_images.png"
                  width={46}
                  height={40}
                  alt="Background Images"
                  className="h-[40px] object-cover"
                />
                <div className="flex flex-1 flex-col items-start">
                  <Text size="textlg" as="p" className="font-inter text-[15.9px] font-normal text-black-900">
                    Install from
                  </Text>
                  <Text size="text2xl" as="p" className="font-inter text-[20.2px] font-normal text-black-900">
                    Chrome Web Store
                  </Text>
                </div>
              </div>
            </div>
            <div className="relative h-[608px] w-[716px] md:px-5">
              <div className="absolute right-[-1px] top-0 m-auto flex w-[68%] flex-col gap-2.5 rounded-[32px] bg-gray-100_01">
                <div className="ml-[18px] mt-3.5 h-[48px] rounded-[24px] bg-[url(/images/img_group_6.png)] bg-cover bg-no-repeat p-2 md:ml-0 md:h-auto">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-1 items-center">
                      <div className="flex items-center">
                        <Img src="img_close.svg" width={24} height={24} alt="Close" className="h-[24px]" />
                        <Heading
                          size="headinglg"
                          as="h6"
                          className="ml-1 font-plusjakartasans text-[15px] font-semibold text-blue_gray-800"
                        >
                          Sticko
                        </Heading>
                      </div>
                      <Img src="img_settings.svg" width={20} height={20} alt="Settings" className="h-[20px]" />
                    </div>
                    <div className="flex gap-[11px]">
                      <Img
                        src="img_frame_blue_gray_300.svg"
                        width={30}
                        height={30}
                        alt="Frame"
                        className="h-[30px] w-[16%] rounded-[50%]"
                      />
                      <Img
                        src="img_frame_blue_gray_300_30x30.svg"
                        width={30}
                        height={30}
                        alt="Frame"
                        className="h-[30px]"
                      />
                      <Button
                        size="md"
                        shape="round"
                        color="light_blue_A700_01_light_blue_400"
                        className="w-[30px] rounded-[14px] px-1.5"
                      >
                        <Img src="img_search.svg" width={16} height={14} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="ml-[102px] mr-20 flex items-center justify-center gap-4 md:mx-0 sm:flex-col">
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_1
                    </Heading>
                  </div>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_2
                    </Heading>
                  </div>
                  <Button
                    size="sm"
                    shape="round"
                    color="light_blue_A700_01_light_blue_400"
                    rightIcon={
                      <Img
                        src="img_frame_white_a700_01.svg"
                        width={10}
                        height={10}
                        alt="Frame"
                        className="my-0.5 h-[10px] w-[10px] object-contain"
                      />
                    }
                    className="min-w-[82px] gap-1 rounded-[14px] px-3.5 font-inter font-bold tracking-[-0.08px]"
                  >
                    Note_3
                  </Button>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_4
                    </Heading>
                  </div>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_5
                    </Heading>
                  </div>
                  <Img
                    src="img_frame_blue_gray_300_10x10.svg"
                    width={10}
                    height={10}
                    alt="Frame"
                    className="h-[10px] sm:w-full"
                  />
                </div>
                <div className="ml-[18px] h-[348px] rounded-[24px] bg-[url(/images/img_group_5.png)] bg-cover bg-no-repeat px-6 md:ml-0 md:h-auto sm:px-5">
                  <div className="flex flex-col items-start gap-[164px] md:gap-[123px] sm:gap-[82px]">
                    <div className="self-stretch">
                      <div className="flex items-start">
                        <Heading
                          size="headingmd"
                          as="p"
                          className="mt-5 font-inter text-[14px] font-semibold text-blue_gray-300"
                        >
                          Start your note....
                        </Heading>
                        <div className="relative ml-[-44px] flex w-[36%] flex-col items-center self-center rounded-[16px] bg-gradient5 px-1.5 py-2">
                          <div className="mx-2 mt-1 flex flex-col items-start gap-0.5 self-stretch md:mx-0">
                            <Heading
                              size="texts"
                              as="p"
                              className="font-inter text-[12px] font-medium tracking-[-0.08px] text-white-a700_01"
                            >
                              Rename Note
                            </Heading>
                            <Heading
                              size="texts"
                              as="p"
                              className="rounded-[5px] bg-white-a700_01 py-1 pl-2 pr-[34px] font-inter text-[12px] font-normal tracking-[-0.08px] text-gray-500 sm:pr-5"
                            >
                              Note_3
                            </Heading>
                          </div>
                          <Heading
                            size="texts"
                            as="p"
                            className="ml-2 mt-2.5 self-start font-inter text-[12px] font-medium tracking-[-0.08px] text-white-a700_01 md:ml-0"
                          >
                            Select Block
                          </Heading>
                          <div className="mx-2 flex justify-center gap-1.5 self-stretch md:mx-0">
                            <div className="h-[36px] w-[42px] flex-1 rounded-[5px] bg-white-a700_7f" />
                            <Img src="img_user.svg" width={40} height={36} alt="User" className="h-[36px]" />
                            <Img src="img_grid.svg" width={42} height={36} alt="Grid" className="h-[36px]" />
                          </div>
                          <Button
                            size="sm"
                            variant="fill"
                            shape="round"
                            className="mt-3.5 min-w-[54px] self-end rounded-[12px] bg-gradient bg-clip-text px-3 font-inter font-bold tracking-[-0.08px] text-transparent"
                          >
                            Done
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Heading
                      size="headings"
                      as="p"
                      className="ml-3 flex items-center justify-center rounded bg-black-900 px-2 font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_cc md:ml-0"
                    >
                      Color
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-px left-[23.50px] m-auto flex w-[74%] flex-col gap-2.5 rounded-tl-[32px] rounded-tr-[32px] bg-gray-100_01 px-[18px]">
                <div className="mt-3.5 rounded-[24px] bg-white-a700_01 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-1 items-center">
                      <div className="flex items-center">
                        <Img src="img_close.svg" width={24} height={24} alt="Close" className="h-[24px]" />
                        <Heading
                          size="headinglg"
                          as="p"
                          className="ml-1 font-plusjakartasans text-[15px] font-semibold text-blue_gray-800"
                        >
                          Sticko
                        </Heading>
                      </div>
                      <Img src="img_settings.svg" width={20} height={22} alt="Settings" className="h-[22px]" />
                    </div>
                    <div className="flex gap-[11px]">
                      <Img
                        src="img_frame_blue_gray_300.svg"
                        width={30}
                        height={30}
                        alt="Frame"
                        className="h-[30px] w-[16%] rounded-[50%]"
                      />
                      <Img
                        src="img_frame_blue_gray_300_30x30.svg"
                        width={30}
                        height={30}
                        alt="Frame"
                        className="h-[30px]"
                      />
                      <Button
                        size="md"
                        shape="round"
                        color="light_blue_A700_01_light_blue_400"
                        className="w-[30px] rounded-[14px] px-1.5"
                      >
                        <Img src="img_search.svg" width={16} height={14} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mx-[84px] flex items-center justify-center gap-4 md:mx-0 sm:flex-col">
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_1
                    </Heading>
                  </div>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_2
                    </Heading>
                  </div>
                  <Button
                    size="sm"
                    shape="round"
                    color="light_blue_A700_01_light_blue_400"
                    rightIcon={
                      <Img
                        src="img_frame_white_a700_01.svg"
                        width={10}
                        height={10}
                        alt="Frame"
                        className="my-0.5 h-[10px] w-[10px] object-contain"
                      />
                    }
                    className="min-w-[82px] gap-1 rounded-[14px] px-3.5 font-inter font-bold tracking-[-0.08px]"
                  >
                    Note_3
                  </Button>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_4
                    </Heading>
                  </div>
                  <div className="flex flex-1 justify-center py-1.5 sm:self-stretch">
                    <Heading
                      as="p"
                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                    >
                      Note_5
                    </Heading>
                  </div>
                  <Img
                    src="img_frame_blue_gray_300_10x10.svg"
                    width={10}
                    height={10}
                    alt="Frame"
                    className="h-[10px] sm:w-full"
                  />
                </div>
                <div className="flex rounded-[24px] border border-solid border-white-a700_07 bg-white-a700_01 px-6 py-5 sm:px-5">
                  <Heading
                    size="headingmd"
                    as="p"
                    className="mb-[244px] font-inter text-[14px] font-semibold text-blue_gray-300"
                  >
                    Start your note....
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* features section */}
        <FeaturesSection />

        {/* pricing section */}
        <PricingSection />

        {/* pricing section */}
        <PricingSection1 />

        {/* testimonials section */}
        <TestimonialsSection />

        {/* introduction section */}
        <IntroductionSection />

        {/* f a q section */}
        <FAQSection />

        {/* contact support section */}
        <ContactSupportSection />
        <Footer />
      </div>
    </div>
  );
}
