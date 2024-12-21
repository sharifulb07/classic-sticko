"use client";

import { Img, Button, Text, Input, Heading } from "../../components";
import Link from "next/link";
import React from "react";

export default function ContactSupportSection() {
  return (
    <>
      {/* contact support section */}
      <div className="mt-32 flex flex-col items-center gap-[54px] sm:gap-[27px]">
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <div className="flex w-[52%] flex-col items-center gap-2 md:w-full">
            <Link href="Support" target="_blank" rel="noreferrer">
              <Heading
                size="other_16_18_24__up"
                as="h2"
                className="font-dmsans text-[16px] font-medium uppercase tracking-[3.84px] text-light_blue-a700_01"
              >
                Support
              </Heading>
            </Link>
            <Heading
              size="h1_bold"
              as="h3"
              className="text-center text-[48px] font-bold leading-[140%] text-gray-900_01 md:text-[44px] sm:text-[38px]"
            >
              <>
                Get in touch with us <br />
                We&#39;re here to assist you
              </>
            </Heading>
          </div>
        </div>
        <div className="flex w-[88%] items-center justify-center gap-10 md:w-full md:flex-col md:px-5">
          <div className="flex flex-1 flex-col items-start gap-[30px] rounded-[40px] bg-white-a700_01 p-10 md:self-stretch sm:p-5">
            <div className="self-stretch">
              <Input
                color="light_blue_A700_01"
                size="xs"
                shape="square"
                name="text field"
                placeholder={`Sazz`}
                className="mr-1.5 mt-3 !border-b px-3.5 md:mr-0"
              />
              <Input
                size="md"
                shape="square"
                type="email"
                name="Container"
                placeholder={`E-mail`}
                className="mr-1.5 mt-7 !border-b px-4 md:mr-0"
              />
              <div className="mr-1.5 mt-2 md:mr-0">
                <div className="flex gap-6 sm:flex-col">
                  <Input
                    shape="square"
                    type="number"
                    name="Outlined text field"
                    placeholder={`WhatsApp Number (Live Chat)`}
                    className="flex-grow !border-b px-3.5"
                  />
                  <Input
                    shape="square"
                    type="text"
                    name="Outlined text field"
                    placeholder={`Package Name`}
                    className="w-[32%] !border-b px-3.5 sm:w-full"
                  />
                </div>
                <div className="relative mt-[-22px]">
                  <div className="mt-3">
                    <div className="mb-4 flex flex-col items-start gap-2.5">
                      <Text as="p" className="ml-4 text-[16px] font-normal text-blue_gray-400_01 md:ml-0">
                        Let’s talk about your trouble
                      </Text>
                      <div className="h-px w-full self-stretch bg-blue_gray-400_01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-1.5 flex flex-col items-start gap-3 self-stretch md:mr-0">
              <div className="flex items-center justify-center gap-6 self-stretch border border-dashed border-blue_gray-400_01 p-10 sm:p-5">
                <Img src="img_twitter_blue_gray_400_01.svg" width={24} height={24} alt="Twitter" className="h-[24px]" />
                <Text as="p" className="text-[16px] font-normal text-blue_gray-400_01">
                  Upload Additional file
                </Text>
              </div>
              <Text size="body" as="p" className="text-[13px] font-normal text-blue_gray-400_01">
                Attach file. File size of your documents should not exceed 10MB
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
              className="min-w-[292px] gap-2 rounded-[28px] px-[34px] font-bold sm:px-5"
            >
              Leave us a Message
            </Button>
          </div>
          <Img
            src="img_clip_path_group.png"
            width={588}
            height={556}
            alt="Clip Path Group"
            className="h-[556px] w-[48%] object-contain md:w-full"
          />
        </div>
      </div>
    </>
  );
}
