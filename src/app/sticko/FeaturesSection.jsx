"use client";

import { Heading, Img, Button, Text, ChipView, Input, Switch } from "../../components";
import Link from "next/link";
import React from "react";

export default function FeaturesSection() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `Sync` },
    { value: 2, label: `Backup Now` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      {/* features section */}
      <div className="mt-[138px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[136px] px-14 md:gap-[102px] md:px-5 sm:gap-[68px]">
          <div className="flex flex-col items-center">
            <Heading
              size="h1_bold"
              as="h2"
              className="text-shadow-ts bg-gradient2 bg-clip-text text-[48px] font-bold text-transparent md:text-[44px] sm:text-[38px]"
            >
              Features
            </Heading>
            <Heading
              size="h1_bold"
              as="h3"
              className="text-shadow-ts text-[48px] font-bold text-gray-900_01 md:text-[44px] sm:text-[38px]"
            >
              Here is what you get
            </Heading>
          </div>
          <div className="w-[90%] md:w-full">
            <div className="flex flex-col gap-11">
              <div className="flex justify-between gap-5 md:flex-col">
                <div className="flex w-[46%] flex-col gap-14 rounded-[40px] bg-white-a700_01 shadow-lg md:w-full sm:gap-7">
                  <div className="ml-[22px] mr-[38px] mt-6 flex flex-col items-start gap-[30px] md:mx-0">
                    <Button
                      color="blue_50_06"
                      variant="outline"
                      shape="round"
                      className="w-[64px] rounded-[12px] !border px-4"
                    >
                      <Img src="img_user_light_blue_a700_01.svg" width={22} height={28} />
                    </Button>
                    <Heading size="title1_bold" as="h4" className="text-[19px] font-bold text-gray-900">
                      Drag the Extension Anywhere
                    </Heading>
                    <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-blue_gray-400_01">
                      Move Sticko across your screen effortlessly! Keep your notes in view while you browse or work
                      without interruptions.
                    </Text>
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="relative z-[2] w-[16%] rounded-[40px] bg-white-a700_01 p-3 md:w-full">
                        <Img
                          src="img_settings.svg"
                          width={50}
                          height={54}
                          alt="Settings"
                          className="h-[54px] w-full rounded-tl-[24px] md:h-auto"
                        />
                      </div>
                      <div className="relative mt-[-68px] flex w-[82%] justify-end self-end rounded-tl-[56px] md:w-full">
                        <div className="flex w-full flex-col items-end gap-2.5 rounded-tl-[56px] bg-gray-100_01">
                          <div className="ml-[18px] mt-3.5 self-stretch rounded-tl-[24px] bg-white-a700_01 py-2 md:ml-0">
                            <div className="flex items-center justify-between gap-5 rounded-tl-[14px]">
                              <div className="flex items-center gap-1 rounded-tl-[12px]">
                                <Img
                                  src="img_close.svg"
                                  width={24}
                                  height={24}
                                  alt="Close"
                                  className="h-[24px] rounded-tl-[12px]"
                                />
                                <Heading
                                  size="headinglg"
                                  as="h5"
                                  className="font-plusjakartasans text-[15px] font-semibold text-blue_gray-800"
                                >
                                  Sticko
                                </Heading>
                              </div>
                              <Img
                                src="img_frame.svg"
                                width={12}
                                height={30}
                                alt="Frame"
                                className="h-[30px] rounded-tl-md"
                              />
                            </div>
                          </div>
                          <div className="flex w-[74%] justify-end gap-4 rounded-tl-[14px] md:w-full md:px-5">
                            <div className="flex h-[28px] w-[34px] items-center justify-center rounded-tl-[14px] md:h-auto">
                              <Heading
                                as="h6"
                                className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                              >
                                Note_1
                              </Heading>
                            </div>
                            <div className="flex h-[28px] w-[34px] items-center justify-center rounded-tl-[14px] md:h-auto">
                              <Heading
                                as="p"
                                className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                              >
                                Note_2
                              </Heading>
                            </div>
                            <Button
                              size="sm"
                              color="light_blue_A700_01_light_blue_400"
                              rightIcon={
                                <div className="flex h-[10px] w-[10px] items-center justify-center rounded-bl-[0px] rounded-br-[0px] rounded-tl-[5px] rounded-tr-[0px]">
                                  <Img
                                    src="img_frame_white_a700_01.svg"
                                    width={10}
                                    height={10}
                                    alt="Frame"
                                    className="my-0.5 h-[10px] w-[10px] rounded-tl-[5px] object-contain"
                                  />
                                </div>
                              }
                              className="min-w-[82px] gap-1 rounded-tl-[14px] px-3.5 font-inter font-bold tracking-[-0.08px]"
                            >
                              Note_3
                            </Button>
                            <div className="flex h-[28px] w-[34px] items-center justify-center rounded-tl-[14px] md:h-auto">
                              <Heading
                                as="p"
                                className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                              >
                                Note_4
                              </Heading>
                            </div>
                            <div className="flex h-[28px] w-[32px] items-center justify-center rounded-tl-[14px] md:h-auto">
                              <Heading
                                as="p"
                                className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                              >
                                Note_5
                              </Heading>
                            </div>
                          </div>
                          <div className="ml-[18px] flex self-stretch rounded-tl-[56px] border border-solid border-white-a700_07 bg-white-a700_01 px-6 py-5 md:ml-0 sm:px-5">
                            <Heading
                              size="headingmd"
                              as="p"
                              className="mb-[108px] font-inter text-[14px] font-semibold text-blue_gray-300"
                            >
                              Start your note....
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[46%] rounded-[40px] border border-solid border-black-900_0c bg-white-a700_01 md:w-full">
                  <div className="ml-6 mt-6 flex flex-col items-start gap-9 md:ml-0">
                    <Button
                      color="red_50"
                      variant="outline"
                      shape="round"
                      className="w-[64px] rounded-[12px] !border px-4"
                    >
                      <Img src="img_thumbs_up.svg" width={30} height={26} />
                    </Button>
                    <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                      Blocks System
                    </Heading>
                    <div className="relative h-[396px] self-stretch">
                      <Text
                        as="p"
                        className="absolute left-0 top-0 m-auto w-[90%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01"
                      >
                        Break down your notes into clearly separated text blocks for better readability and easy
                        organization.
                      </Text>
                      <div className="absolute bottom-0 right-[-0.50px] top-0 my-auto ml-10 h-[384px] flex-1 rotate-[-24deg] rounded-[32px] bg-gray-100_01 md:ml-0">
                        <div className="absolute right-[0.95px] top-[20.11px] my-auto ml-[22px] mr-auto flex flex-1 justify-end rounded-[24px] bg-white-a700_01 py-3 md:ml-0">
                          <Img
                            src="img_frame_21.png"
                            width={50}
                            height={72}
                            alt="Frame 21"
                            className="mb-[140px] h-[72px] w-[12%] object-contain"
                          />
                        </div>
                        <div className="absolute bottom-[-0.55px] left-0 right-0 mx-auto flex-1">
                          <div className="flex flex-col items-end">
                            <div className="relative h-[274px] content-center self-stretch md:h-auto">
                              <div className="absolute bottom-[0.91px] left-0 right-0 mx-auto flex flex-1 flex-col items-start">
                                <Heading
                                  as="p"
                                  className="relative z-[3] ml-[174px] font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300 md:ml-0"
                                >
                                  Note_2
                                </Heading>
                                <div className="relative mt-[-22px] flex w-[84%] flex-col items-start gap-1.5 self-end rounded-[24px] border border-solid border-white-a700_07 bg-white-a700_01 px-[30px] py-2.5 md:w-full sm:px-5">
                                  <div className="mx-7 flex self-stretch px-1 py-1.5 md:mx-0">
                                    <Heading
                                      as="p"
                                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                                    >
                                      Note_1
                                    </Heading>
                                  </div>
                                  <Heading
                                    size="headingmd"
                                    as="p"
                                    className="mb-[38px] font-inter text-[14px] font-semibold text-blue_gray-300"
                                  >
                                    Start your note....
                                  </Heading>
                                </div>
                              </div>
                              <div className="relative z-[4] flex flex-1 items-start justify-end">
                                <div className="relative z-[5] mt-[50px] flex items-start rounded-[30px] bg-gradient p-2.5">
                                  <Heading
                                    size="headings"
                                    as="p"
                                    className="mt-1.5 self-end font-inter text-[12px] font-bold tracking-[-0.08px] text-white-a700_01"
                                  >
                                    Note_3
                                  </Heading>
                                  <Img
                                    src="img_frame_white_a700_01.svg"
                                    width={12}
                                    height={12}
                                    alt="Frame"
                                    className="h-[12px]"
                                  />
                                </div>
                                <div className="relative ml-[-12px] w-[26%] self-center rounded-[24px] border border-solid border-white-a700_07 bg-white-a700_01 py-1">
                                  <div className="mb-[146px] flex items-start justify-center">
                                    <div className="relative h-[112px] flex-1 self-center">
                                      <div className="absolute left-0 right-0 top-[20.74px] mx-auto flex px-1 py-1.5">
                                        <Heading
                                          as="p"
                                          className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                                        >
                                          Note_4
                                        </Heading>
                                      </div>
                                      <div className="absolute left-0 right-0 top-0 mx-1.5 flex flex-1 justify-end py-1.5 md:mx-0">
                                        <Heading
                                          as="p"
                                          className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-300"
                                        >
                                          Note_5
                                        </Heading>
                                      </div>
                                      <Heading
                                        size="headingmd"
                                        as="p"
                                        className="absolute bottom-[-1.15px] right-[-1.28px] m-auto font-inter text-[14px] font-semibold text-blue_gray-300"
                                      >
                                        Start your note....
                                      </Heading>
                                    </div>
                                    <Img
                                      src="img_frame_blue_gray_300_14x1.png"
                                      width={1}
                                      height={14}
                                      alt="Frame"
                                      className="h-[14px] object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute left-0 right-0 top-[30%] z-[6] mx-[38px] flex flex-1 items-start md:mx-0">
                                <Img
                                  src="img_close.svg"
                                  width={30}
                                  height={30}
                                  alt="Close"
                                  className="h-[30px] self-end"
                                />
                                <Heading
                                  size="headinglg"
                                  as="p"
                                  className="relative mb-3 ml-[-2px] font-plusjakartasans text-[15px] font-semibold text-blue_gray-800"
                                >
                                  Sticko
                                </Heading>
                              </div>
                            </div>
                            <div className="mt-[104px] h-[-104.66px] w-[46%] bg-gradient" />
                            <Img
                              src="img_frame_27.png"
                              width={176}
                              height={1}
                              alt="Frame 27"
                              className="mt-[150px] h-px w-[44%] object-contain"
                            />
                            <div className="mt-[162px] flex flex-col items-end justify-end gap-[260px] self-stretch md:gap-[195px] sm:gap-[130px]">
                              <Heading
                                size="headinglg"
                                as="p"
                                className="mt-1.5 font-inter text-[15px] font-semibold tracking-[-0.10px] text-white-a700_01"
                              >
                                Let’s Unlock Premium All features{" "}
                              </Heading>
                              <Heading
                                size="headinglg"
                                as="p"
                                className="mr-7 flex justify-center bg-white-a700_01 bg-gradient bg-clip-text px-2.5 pt-2.5 font-inter text-[15px] font-bold tracking-[-0.10px] text-transparent md:mr-0"
                              >
                                Pro
                              </Heading>
                            </div>
                            <div className="mr-[124px] mt-44 h-[-176.62px] w-[18%] bg-black-900 md:mr-0" />
                            <Heading
                              size="headings"
                              as="p"
                              className="mr-[132px] mt-[186px] font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_cc md:mr-0"
                            >
                              Color
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 md:flex-col">
                <div className="w-[46%] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 md:w-full">
                  <div className="mt-6 flex flex-col items-start gap-[30px]">
                    <Button
                      color="blue_50_06"
                      variant="outline"
                      shape="round"
                      className="ml-[248px] w-[64px] rounded-[12px] !border px-4 md:ml-0"
                    >
                      <Img src="img_settings_light_blue_a700_01.svg" width={32} height={32} />
                    </Button>
                    <Heading
                      size="title1_bold"
                      as="h6"
                      className="ml-[248px] text-[19px] font-bold text-gray-900 md:ml-0"
                    >
                      Amazing Themes
                    </Heading>
                    <div className="flex flex-col self-stretch">
                      <Text
                        as="p"
                        className="relative z-[7] ml-[248px] w-[50%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01 md:ml-0 md:w-full"
                      >
                        Personalize your experience with stunning themes. Choose a style that matches your workflow and
                        personality.
                      </Text>
                      <div className="relative mt-[-54px] h-[814px]">
                        <Img
                          src="img_stickyfly_1.png"
                          width={672}
                          height={708}
                          alt="Stickyfly 1"
                          className="absolute right-[0.75px] top-0 m-auto h-[708px] w-[62%] object-contain"
                        />
                        <Img
                          src="img_stickyfly_1_2.png"
                          width={542}
                          height={688}
                          alt="Stickyfly 1 2"
                          className="absolute bottom-0 left-0 m-auto h-[688px] w-[50%] rounded-[34px] object-contain"
                        />
                        <Img
                          src="img_stickyfly_1_1.png"
                          width={496}
                          height={522}
                          alt="Stickyfly 1 1"
                          className="absolute bottom-[8%] left-[10%] m-auto h-[522px] w-[50%] rounded-[22px] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[46%] flex-col items-start gap-[34px] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 py-6 md:w-full sm:py-5">
                  <Button
                    color="blue_50_06"
                    variant="outline"
                    shape="round"
                    className="ml-6 w-[64px] rounded-[12px] !border px-4 md:ml-0"
                  >
                    <Img src="img_settings_light_blue_a700_01_64x64.svg" width={32} height={32} />
                  </Button>
                  <Heading size="title1_bold" as="h6" className="ml-6 text-[19px] font-bold text-gray-900 md:ml-0">
                    Customize Your Fonts
                  </Heading>
                  <Text
                    as="p"
                    className="ml-[22px] w-[90%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01 md:ml-0 md:w-full md:px-5"
                  >
                    Choose from a variety of fonts to make your notes look just the way you want. Personalization made
                    easy!
                  </Text>
                  <div className="mb-3 flex w-full flex-col gap-3.5">
                    <div className="flex items-center justify-center gap-2 sm:flex-col">
                      <div className="flex flex-1 flex-col items-end justify-center gap-1.5 sm:self-stretch">
                        <Button
                          color="blue_50_01"
                          size="10xl"
                          variant="fill"
                          className="min-w-[156px] rounded-[20px] px-[34px] font-ppmori tracking-[-0.13px] sm:px-5"
                        >
                          Stickyfly
                        </Button>
                        <Heading
                          size="texts"
                          as="p"
                          className="mr-14 font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:mr-0"
                        >
                          PP Mori
                        </Heading>
                      </div>
                      <div className="flex w-[30%] flex-col items-center gap-1.5 sm:w-full">
                        <div className="ml-2 flex flex-col items-center gap-3 self-stretch rounded-[20px] bg-blue-50_01 p-2.5 md:ml-0">
                          <Img
                            src="img_group_10.png"
                            width={22}
                            height={22}
                            alt="Group 10"
                            className="h-[22px] self-end object-cover"
                          />
                          <Text
                            size="textxl"
                            as="p"
                            className="mb-[30px] font-mali text-[18px] font-medium tracking-[-0.13px] text-gray-900"
                          >
                            Stickyfly
                          </Text>
                        </div>
                        <Heading
                          size="texts"
                          as="p"
                          className="mb-1 font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900"
                        >
                          Mali
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-1.5">
                        <Text
                          size="textxl"
                          as="p"
                          className="flex justify-center self-end rounded-[20px] bg-blue-50_01 p-[34px] font-markoone text-[18px] font-normal tracking-[-0.13px] text-gray-900 sm:p-5"
                        >
                          Stickyfly
                        </Text>
                        <Heading
                          size="texts"
                          as="p"
                          className="ml-[54px] font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:ml-0"
                        >
                          Marko One
                        </Heading>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1.5 sm:flex-col">
                      <div className="flex flex-col items-end justify-center gap-1.5">
                        <Text
                          size="textxl"
                          as="p"
                          className="flex justify-center rounded-[20px] bg-blue-50_01 p-[34px] font-clashgrotesk text-[18px] font-normal tracking-[-0.13px] text-gray-900 sm:p-5"
                        >
                          Stickyfly
                        </Text>
                        <Heading
                          size="texts"
                          as="p"
                          className="mr-9 font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:mr-0"
                        >
                          Clash Grotesk
                        </Heading>
                      </div>
                      <div className="flex w-[24%] flex-col items-center justify-center gap-1.5 sm:w-full">
                        <Button
                          color="blue_50_01"
                          size="10xl"
                          variant="fill"
                          className="ml-1.5 self-stretch rounded-[20px] px-[34px] font-plusjakartasans font-medium tracking-[-0.13px] md:ml-0 sm:px-5"
                        >
                          Stickyfly
                        </Button>
                        <Heading
                          size="texts"
                          as="p"
                          className="font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900"
                        >
                          Plus Jakarta Sans
                        </Heading>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-center gap-1.5 px-1.5 sm:self-stretch">
                        <Button
                          color="blue_50_01"
                          size="10xl"
                          variant="fill"
                          className="min-w-[156px] rounded-[20px] px-[34px] font-poppins tracking-[-0.13px] sm:px-5"
                        >
                          Stickyfly
                        </Button>
                        <Heading
                          size="texts"
                          as="p"
                          className="ml-[54px] font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:ml-0"
                        >
                          Poppins
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[46%] flex-col items-center rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 px-[22px] py-6 md:w-full sm:p-5">
                  <Button
                    color="blue_50_06"
                    variant="outline"
                    shape="round"
                    className="w-[64px] self-start rounded-[12px] !border px-[18px]"
                  >
                    <Img src="img_backup_icon.svg" width={26} height={24} />
                  </Button>
                  <div className="mr-3.5 mt-[30px] flex flex-col items-start gap-7 self-stretch md:mr-0">
                    <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                      Data Backup & Sync
                    </Heading>
                    <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-blue_gray-400_01">
                      Never lose a note! Sticko syncs seamlessly with Google Drive, ensuring your notes are always safe
                      and accessible.
                    </Text>
                  </div>
                  <div className="mb-5 ml-5 mr-[18px] mt-[70px] flex flex-col items-center gap-2.5 self-stretch rounded-[20px] bg-blue-50_01 px-3 py-4 md:mx-0">
                    <Link href="#" className="self-end bg-gradient bg-clip-text">
                      <Heading size="textmd" as="p" className="font-inter text-[14px] font-medium text-transparent">
                        Log Out
                      </Heading>
                    </Link>
                    <div className="mb-2.5 ml-6 mr-[26px] flex flex-col gap-2.5 self-stretch md:mx-0">
                      <div className="flex items-center gap-2.5">
                        <Heading
                          size="textmd"
                          as="p"
                          className="self-end font-inter text-[14px] font-medium text-gray-900"
                        >
                          Auto Backup
                        </Heading>
                        <Switch value={true} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex">
                          <Heading size="textmd" as="p" className="font-inter text-[14px] font-medium text-gray-900">
                            Connected Account
                          </Heading>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <Input
                            color="gray_50_01"
                            size="sm"
                            variant="fill"
                            shape="round"
                            type="email"
                            name="Frame 37"
                            placeholder={`sazz@gmail.com`}
                            suffix={
                              <div className="flex h-[14px] w-[14px] items-center justify-center">
                                <Img
                                  src="img_edit.svg"
                                  width={14}
                                  height={14}
                                  alt="Edit"
                                  className="my-0.5 h-[14px] w-[14px] object-contain"
                                />
                              </div>
                            }
                            className="gap-4 rounded-lg px-5 font-inter"
                          />
                          <div className="flex flex-wrap justify-end gap-1.5">
                            <Heading
                              size="textmd"
                              as="p"
                              className="self-end font-inter text-[14px] font-medium text-gray-900"
                            >
                              Last Backup:
                            </Heading>
                            <Heading
                              size="textmd"
                              as="p"
                              className="self-end font-inter text-[14px] font-medium text-gray-600_ed"
                            >
                              14 Apr 2024
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <ChipView
                        options={chipOptions}
                        setOptions={setChipOptions}
                        values={selectedChipOptions}
                        setValues={setSelectedChipOptions}
                        className="flex flex-wrap gap-2"
                      >
                        {(option) => (
                          <React.Fragment key={option.index}>
                            {option.isSelected ? (
                              <div
                                onClick={option.toggle}
                                className="flex h-[38px] cursor-pointer flex-row items-center gap-1 whitespace-pre-wrap rounded-lg bg-gradient px-4 font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_01"
                              >
                                <Img
                                  src="img_qrcode.svg"
                                  width={16}
                                  height={12}
                                  alt="Qrcode"
                                  className="h-[12px] w-[2%]"
                                />
                                <span>{option.label}</span>
                              </div>
                            ) : (
                              <div
                                onClick={option.toggle}
                                className="flex h-[38px] cursor-pointer flex-row items-center gap-1 rounded-[10px] bg-light_blue-a700_01 bg-gradient px-4 font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_01"
                              >
                                <Img
                                  src="img_qrcode.svg"
                                  width={16}
                                  height={12}
                                  alt="Qrcode"
                                  className="h-[12px] w-[2%]"
                                />
                                <span>{option.label}</span>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </ChipView>
                    </div>
                  </div>
                </div>
                <div className="w-[46%] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 md:w-full">
                  <div className="ml-[22px] mt-6 flex flex-col items-start gap-[30px] md:ml-0">
                    <Button
                      color="blue_50"
                      variant="outline"
                      shape="round"
                      className="w-[64px] rounded-[12px] !border px-4"
                    >
                      <Img src="img_darkmode_icon.svg" width={32} height={32} />
                    </Button>
                    <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                      Dark Mode 🌙
                    </Heading>
                    <div className="relative h-[436px] self-stretch">
                      <Text
                        as="p"
                        className="absolute left-0 top-0 m-auto w-[90%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01"
                      >
                        Work day or night with Sticko’s built-in dark mode, reducing eye strain and boosting
                        productivity in any lighting condition.
                      </Text>
                      <div className="absolute bottom-[0.65px] right-[-0.50px] my-auto ml-[34px] mr-auto h-[402px] flex-1 rotate-[-24deg] rounded-[32px] bg-gray-900_03 md:ml-0 md:h-auto">
                        <div className="ml-[22px] mt-5 flex flex-1 justify-end rounded-[24px] bg-gray-900_02 py-3 md:ml-0">
                          <Img
                            src="img_frame_21_blue_gray_200.png"
                            width={58}
                            height={72}
                            alt="Frame 21"
                            className="mb-[140px] h-[72px] w-[14%] object-contain"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                          <div className="flex flex-col items-end">
                            <div className="relative h-[384px] self-stretch">
                              <div className="absolute bottom-[-0.33px] left-0 right-0 mx-auto flex flex-1 flex-col items-center">
                                <div className="relative z-[8] flex px-1 py-1.5">
                                  <Heading
                                    as="p"
                                    className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-200"
                                  >
                                    Note_2
                                  </Heading>
                                </div>
                                <div className="relative mt-[-28px] flex w-[84%] flex-col items-start gap-1.5 self-end rounded-[24px] border border-solid border-white-a700_07 bg-gray-900_02 px-[30px] py-2.5 md:w-full sm:px-5">
                                  <div className="mx-7 flex self-stretch px-1 py-1.5 md:mx-0">
                                    <Heading
                                      as="p"
                                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-200"
                                    >
                                      Note_1
                                    </Heading>
                                  </div>
                                  <Heading
                                    size="textmd"
                                    as="p"
                                    className="mb-14 font-inter text-[14px] font-normal text-blue_gray-200"
                                  >
                                    Start your note....
                                  </Heading>
                                </div>
                              </div>
                              <div className="absolute bottom-[-1.07px] left-0 right-0 z-[9] mx-auto flex flex-1 items-start justify-end">
                                <div className="relative z-10 mt-[50px] flex items-start rounded-[30px] bg-gradient p-2.5">
                                  <Heading
                                    size="headings"
                                    as="p"
                                    className="mt-1.5 self-end font-inter text-[12px] font-bold tracking-[-0.08px] text-white-a700_01"
                                  >
                                    Note_3
                                  </Heading>
                                  <Img
                                    src="img_frame_white_a700_01.svg"
                                    width={12}
                                    height={12}
                                    alt="Frame"
                                    className="h-[12px]"
                                  />
                                </div>
                                <div className="relative ml-[-12px] flex w-[28%] items-start justify-end self-center rounded-[24px] border border-solid border-white-a700_07 bg-gray-900_02 py-1">
                                  <div className="mb-[216px] mt-[22px] flex flex-1 justify-end py-1.5">
                                    <Heading
                                      as="p"
                                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-200"
                                    >
                                      Note_4
                                    </Heading>
                                  </div>
                                  <div className="flex flex-1 justify-center p-1.5">
                                    <Heading
                                      as="p"
                                      className="font-inter text-[10px] font-semibold tracking-[-0.07px] text-blue_gray-200"
                                    >
                                      Note_5
                                    </Heading>
                                  </div>
                                  <Img
                                    src="img_frame_blue_gray_200.png"
                                    width={6}
                                    height={14}
                                    alt="Frame"
                                    className="h-[14px] object-cover"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 top-0 z-[11] mx-[38px] my-auto flex h-max flex-1 items-start md:mx-0">
                                <Img
                                  src="img_close.svg"
                                  width={30}
                                  height={30}
                                  alt="Close"
                                  className="h-[30px] self-end"
                                />
                                <Heading
                                  size="headinglg"
                                  as="p"
                                  className="relative mb-3 ml-[-2px] font-plusjakartasans text-[15px] font-semibold text-white-a700"
                                >
                                  Sticko
                                </Heading>
                              </div>
                              <div className="absolute bottom-0 right-[1.11px] top-0 z-[12] my-auto flex h-max w-[70%] flex-col items-end gap-[54px] rounded-[28px] bg-gray-900_ed shadow-3xl sm:gap-[27px]">
                                <div className="mt-3.5 flex flex-col items-start bg-gradient py-3.5">
                                  <Img
                                    src="img_arrow_right_white_a700_01.png"
                                    width={1}
                                    height={10}
                                    alt="Arrow Right"
                                    className="ml-3.5 h-[10px] w-full object-cover md:ml-0"
                                  />
                                </div>
                                <div className="flex items-center justify-between gap-5 self-stretch">
                                  <div className="flex w-[88%] items-start justify-center">
                                    <Img
                                      src="img_arrow_down.svg"
                                      width={22}
                                      height={24}
                                      alt="Arrow Down"
                                      className="mt-[42px] h-[24px]"
                                    />
                                    <div className="relative ml-[-4px] flex flex-1 items-start justify-center">
                                      <Text
                                        size="textxl"
                                        as="p"
                                        className="mt-[38px] font-plusjakartasans text-[18px] font-medium tracking-[-0.13px] text-white-a700"
                                      >
                                        Support & Info
                                      </Text>
                                      <div className="relative ml-[-102px] flex-1 self-center rounded-[20px] bg-gray-900_02">
                                        <div className="mt-8">
                                          <div className="relative z-[13] flex flex-col items-end">
                                            <div className="relative z-[14] flex items-start justify-end self-stretch">
                                              <Img
                                                src="img_close_blue_900.png"
                                                width={14}
                                                height={42}
                                                alt="Close"
                                                className="h-[42px] self-end object-cover"
                                              />
                                              <div className="mb-[18px] flex flex-wrap items-start gap-7">
                                                <Heading
                                                  size="headinglg"
                                                  as="p"
                                                  className="mb-3 font-plusjakartasans text-[15px] font-semibold text-white-a700"
                                                >
                                                  Sticko
                                                </Heading>
                                                <Heading
                                                  size="texts"
                                                  as="p"
                                                  className="self-end font-inter text-[12px] font-normal capitalize text-white-a700"
                                                >
                                                  by Fixefly
                                                </Heading>
                                              </div>
                                            </div>
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="relative mt-[-6px] w-[74%] font-inter text-[14px] font-normal leading-5 text-white-a700 md:w-full"
                                            >
                                              Get instant support for Sticko! Browse FAQs, contact us, or share feedback
                                              to improve your experience.
                                            </Heading>
                                          </div>
                                          <div className="relative mt-[-94px] flex flex-col items-end">
                                            <div className="mt-[46px] flex items-center justify-end gap-[18px] self-stretch">
                                              <div className="flex w-[58%] justify-end self-end border-b border-solid border-white-a700">
                                                <Heading
                                                  size="headingmd"
                                                  as="p"
                                                  className="w-full font-inter text-[14px] font-semibold leading-[22px] text-white-a700"
                                                >
                                                  Have trouble? Let Us :)
                                                </Heading>
                                              </div>
                                              <div className="flex w-[-17px] items-end justify-between gap-5 bg-gray-900_ed">
                                                <Img
                                                  src="img_vector.png"
                                                  width={1}
                                                  height={1}
                                                  alt="Vector"
                                                  className="ml-5 h-px w-full object-cover"
                                                />
                                                <Heading
                                                  size="headings"
                                                  as="p"
                                                  className="mt-5 font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700"
                                                >
                                                  Give Us Feedback
                                                </Heading>
                                              </div>
                                            </div>
                                            <div className="mt-5 flex w-[48%] flex-col items-start justify-end gap-[70px] bg-gradient md:w-full md:gap-[52px] sm:gap-[35px]">
                                              <Heading
                                                size="headings"
                                                as="p"
                                                className="mt-5 self-end font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_01"
                                              >
                                                Take Support
                                              </Heading>
                                              <Img
                                                src="img_vector_white_a700_01.png"
                                                width={24}
                                                height={1}
                                                alt="Vector"
                                                className="ml-4 h-px object-cover md:ml-0"
                                              />
                                            </div>
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="mt-8 font-inter text-[14px] font-medium text-gray-600_ed"
                                            >
                                              support@stickyfly.com
                                            </Heading>
                                            <Heading
                                              size="textmd"
                                              as="p"
                                              className="mr-6 mt-[98px] font-inter text-[14px] font-medium text-white-a700 md:mr-0"
                                            >
                                              Email Us:
                                            </Heading>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    size="textxs"
                                    as="p"
                                    className="self-end font-inter text-[10px] font-normal text-white-a700_7f"
                                  >
                                    Version: 3.1.2.4567
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="img_frame_27_blue_gray_200.png"
                              width={170}
                              height={1}
                              alt="Frame 27"
                              className="mt-[164px] h-px w-[40%] object-contain"
                            />
                            <div className="mr-[116px] mt-[188px] h-[-189.73px] w-[18%] bg-black-900 md:mr-0" />
                            <Heading
                              size="headings"
                              as="p"
                              className="mr-[126px] mt-[200px] font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_cc md:mr-0"
                            >
                              Color
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:flex-col">
                <div className="flex w-full flex-col gap-[50px]">
                  <div className="mr-[26px] flex flex-col gap-[66px] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 md:mr-0 sm:gap-[33px]">
                    <div className="ml-[22px] mr-[38px] mt-6 flex flex-col items-start gap-[34px] md:mx-0">
                      <Button
                        color="blue_50_06"
                        variant="outline"
                        shape="round"
                        className="w-[64px] rounded-[12px] !border px-4"
                      >
                        <Img src="img_minimal_icon.svg" width={32} height={32} />
                      </Button>
                      <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                        Minimal View
                      </Heading>
                      <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-blue_gray-400_01">
                        Letting you concentrate solely on your notes. Perfect for deep work and brainstorming.
                      </Text>
                    </div>
                    <div className="flex items-start justify-center gap-[22px] md:flex-col">
                      <div className="relative h-[220px] w-[46%] rounded-bl-[32px] rounded-br-[32px] rounded-tl-[32px] bg-gray-100_01 md:w-full">
                        <div className="absolute left-0 right-0 top-0 ml-auto mr-[18px] flex h-[200px] flex-1 flex-col items-start gap-1.5 rounded-[24px] bg-[url(/images/img_group_440.png)] bg-cover bg-no-repeat py-[18px] md:mr-0 md:h-auto">
                          <Heading
                            size="headings"
                            as="p"
                            className="mt-[88px] rounded bg-black-900 py-2 pr-1.5 font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_cc"
                          >
                            Color
                          </Heading>
                          <div className="mx-[22px] flex items-start justify-end self-stretch md:mx-0">
                            <Button
                              color="black_900"
                              size="xs"
                              variant="fill"
                              className="mt-[18px] min-w-[48px] self-end rounded px-2 font-inter font-semibold tracking-[-0.08px]"
                            >
                              Copy
                            </Button>
                            <Img
                              src="img_frame_blue_gray_300_18x18.svg"
                              width={18}
                              height={18}
                              alt="Frame"
                              className="h-[18px]"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-[30%] left-0 right-0 mx-auto flex items-center">
                          <Img
                            src="img_vector_blue_gray_300.svg"
                            width={14}
                            height={12}
                            alt="Vector"
                            className="h-[12px]"
                          />
                          <Img
                            src="img_television.svg"
                            width={16}
                            height={14}
                            alt="Television"
                            className="ml-[22px] h-[14px]"
                          />
                          <Img
                            src="img_television_blue_gray_300.svg"
                            width={8}
                            height={8}
                            alt="Television"
                            className="ml-[22px] h-[8px]"
                          />
                          <Img
                            src="img_television_blue_gray_300_8x8.svg"
                            width={8}
                            height={8}
                            alt="Television"
                            className="ml-[22px] h-[8px]"
                          />
                          <Img src="img_menu.svg" width={8} height={12} alt="Menu" className="ml-[22px] h-[12px]" />
                          <Img
                            src="img_television_blue_gray_300_12x12.svg"
                            width={12}
                            height={12}
                            alt="Television"
                            className="ml-[22px] h-[12px]"
                          />
                          <Img
                            src="img_television_12x12.svg"
                            width={12}
                            height={12}
                            alt="Television"
                            className="ml-[22px] h-[12px]"
                          />
                          <Img
                            src="img_megaphone.svg"
                            width={12}
                            height={8}
                            alt="Megaphone"
                            className="ml-[22px] h-[8px]"
                          />
                          <Img
                            src="img_airplane.svg"
                            width={12}
                            height={12}
                            alt="Airplane"
                            className="ml-[22px] h-[12px]"
                          />
                          <Img
                            src="img_forward.svg"
                            width={16}
                            height={8}
                            alt="Forward"
                            className="ml-[22px] h-[8px]"
                          />
                        </div>
                      </div>
                      <div className="relative h-[580px] flex-1 self-center rounded-[32px] bg-gray-100_01 px-[18px] py-5 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[540px] flex-1 rounded-[24px] border border-solid border-white-a700_07 bg-white-a700_01" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center px-1.5">
                          <div className="flex items-center justify-between gap-5 self-stretch">
                            <Heading
                              size="headingmd"
                              as="p"
                              className="mb-1.5 ml-6 self-end font-inter text-[14px] font-semibold text-blue_gray-300"
                            >
                              Start your note....
                            </Heading>
                            <Img
                              src="img_button_icon.svg"
                              width={40}
                              height={40}
                              alt="Button Icon"
                              className="h-[40px] w-[8%] rounded-[50%]"
                            />
                          </div>
                          <Button
                            color="black_900"
                            size="xs"
                            variant="fill"
                            className="ml-8 mt-[400px] min-w-[48px] self-start rounded px-2 font-inter font-semibold tracking-[-0.08px] md:ml-0"
                          >
                            Color
                          </Button>
                          <div className="mx-4 mt-1.5 flex items-start justify-center self-stretch md:mx-0 sm:flex-col">
                            <Img
                              src="img_vector_blue_gray_300.svg"
                              width={14}
                              height={12}
                              alt="Vector"
                              className="h-[12px] sm:w-full"
                            />
                            <Img
                              src="img_television.svg"
                              width={16}
                              height={14}
                              alt="Television"
                              className="ml-[22px] h-[14px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_television_blue_gray_300.svg"
                              width={8}
                              height={8}
                              alt="Television"
                              className="ml-[22px] h-[8px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_television_blue_gray_300_8x8.svg"
                              width={8}
                              height={8}
                              alt="Television"
                              className="ml-[22px] h-[8px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_menu.svg"
                              width={8}
                              height={12}
                              alt="Menu"
                              className="ml-[22px] h-[12px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_television_blue_gray_300_12x12.svg"
                              width={12}
                              height={12}
                              alt="Television"
                              className="ml-[22px] h-[12px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_television_12x12.svg"
                              width={12}
                              height={12}
                              alt="Television"
                              className="ml-[22px] h-[12px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_megaphone.svg"
                              width={12}
                              height={8}
                              alt="Megaphone"
                              className="ml-[22px] h-[8px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_airplane.svg"
                              width={12}
                              height={12}
                              alt="Airplane"
                              className="ml-[22px] h-[12px] sm:ml-0 sm:w-full"
                            />
                            <Img
                              src="img_forward.svg"
                              width={16}
                              height={8}
                              alt="Forward"
                              className="ml-[22px] h-[8px] sm:ml-0 sm:w-full"
                            />
                            <div className="ml-12 mt-[18px] flex flex-1 justify-center self-end rounded bg-black-900 px-1.5 py-2 sm:ml-0 sm:self-stretch">
                              <Heading
                                size="headings"
                                as="p"
                                className="font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_cc"
                              >
                                Copy
                              </Heading>
                            </div>
                            <Img
                              src="img_frame_blue_gray_300_18x18.svg"
                              width={18}
                              height={18}
                              alt="Frame"
                              className="h-[18px] sm:w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-[26px] flex flex-col items-start gap-[34px] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 px-[22px] py-6 md:mr-0 sm:p-5">
                    <Button
                      color="blue_50_06"
                      variant="outline"
                      shape="round"
                      className="w-[64px] rounded-[12px] !border px-[18px]"
                    >
                      <Img src="img_clock.svg" width={26} height={24} />
                    </Button>
                    <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                      Outstanding Support 💁‍♂️
                    </Heading>
                    <Text
                      as="p"
                      className="w-[96%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01 md:w-full"
                    >
                      We’ve got your back! Reach out anytime, and our team will assist you with any issues or questions
                      promptly.
                    </Text>
                    <Img
                      src="img_support_img.svg"
                      width={344}
                      height={216}
                      alt="Support Img"
                      className="mx-9 mb-2.5 h-[216px] w-full md:mx-0 md:h-auto"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[50px]">
                  <div className="ml-[26px] flex flex-col gap-[68px] rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 px-[22px] py-6 md:ml-0 sm:gap-[34px] sm:p-5">
                    <div className="mr-5 flex flex-col items-start gap-[30px] md:mr-0">
                      <Button
                        color="blue_50_06"
                        variant="outline"
                        shape="round"
                        className="w-[64px] rounded-[12px] !border px-[18px]"
                      >
                        <Img src="img_camera.svg" width={26} height={26} />
                      </Button>
                      <Heading size="title1_bold" as="h6" className="text-[19px] font-bold text-gray-900">
                        Suitable Canvas
                      </Heading>
                      <Text as="p" className="w-full text-[16px] font-normal leading-[140%] text-blue_gray-400_01">
                        Choose between Regular, Small, or Large Canvas sizes based on your content needs—more space,
                        better organization!
                      </Text>
                    </div>
                    <div className="mb-3 ml-6 mr-[30px] flex flex-col items-start gap-1.5 md:mx-0">
                      <div className="relative h-[282px] self-stretch">
                        <div className="absolute bottom-px left-0 m-auto flex w-[42%] justify-center rounded-[20px] bg-blue-50_01 p-3.5">
                          <div className="mb-[18px] h-[108px] w-[108px] rounded-[12px] bg-white-a700_01" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[42%] justify-end rounded-[20px] bg-blue-50_01 p-3.5">
                          <div className="mb-[18px] h-[108px] w-[44%] rounded-[12px] bg-white-a700_01" />
                        </div>
                        <Heading
                          size="texts"
                          as="p"
                          className="absolute bottom-[12%] left-0 right-0 mx-auto w-max font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900"
                        >
                          Small
                        </Heading>
                        <div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-end gap-1.5">
                          <Img
                            src="img_group_9.png"
                            width={156}
                            height={154}
                            alt="Group 9"
                            className="h-[154px] w-[42%] object-contain"
                          />
                          <Heading
                            size="texts"
                            as="p"
                            className="mr-[54px] font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:mr-0"
                          >
                            Regular
                          </Heading>
                        </div>
                      </div>
                      <Heading
                        size="texts"
                        as="p"
                        className="ml-[62px] font-plusjakartasans text-[12px] font-medium tracking-[-0.08px] text-gray-900 md:ml-0"
                      >
                        large
                      </Heading>
                    </div>
                  </div>
                  <div className="ml-[26px] flex flex-col items-start rounded-[40px] border border-solid border-blue-50 bg-white-a700_01 px-[22px] py-6 md:ml-0 sm:p-5">
                    <Button
                      color="blue_50_06"
                      variant="outline"
                      shape="round"
                      className="w-[64px] rounded-[12px] !border px-4"
                    >
                      <Img src="img_text_icon.svg" width={32} height={32} />
                    </Button>
                    <Heading size="title1_bold" as="h6" className="mt-[30px] text-[19px] font-bold text-gray-900">
                      Text Formatting
                    </Heading>
                    <Text
                      as="p"
                      className="mt-7 w-[94%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01 md:w-full"
                    >
                      Style your notes with bold, italics, underlines, and more. Customize your text to stay organized
                      and creative.
                    </Text>
                    <div className="mb-4 ml-8 mr-4 mt-[86px] flex flex-col items-start gap-2 self-stretch md:mx-0">
                      <Button
                        color="black_900"
                        size="xs"
                        variant="fill"
                        className="ml-3.5 min-w-[48px] rounded px-2 font-inter font-semibold tracking-[-0.08px] md:ml-0"
                      >
                        Color
                      </Button>
                      <div className="flex items-center self-stretch">
                        <Img
                          src="img_frame_27_blue_gray_300.svg"
                          width={198}
                          height={40}
                          alt="Frame 27"
                          className="h-[40px] w-[52%] object-contain"
                        />
                        <div className="flex flex-col items-end">
                          <Img
                            src="img_frame_blue_gray_300_18x18.svg"
                            width={18}
                            height={18}
                            alt="Frame"
                            className="h-[18px]"
                          />
                          <div className="mr-[18px] flex rounded bg-gradient md:mr-0">
                            <Heading
                              size="headings"
                              as="p"
                              className="font-inter text-[12px] font-semibold tracking-[-0.08px] text-white-a700_01"
                            >
                              Copied
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
