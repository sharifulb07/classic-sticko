import { Button, Img, Text } from "./..";
import Link from "next/link";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center gap-5 px-2.5 py-2 bg-white-a700_cc rounded-[22px]`}
    >
      <Img
        src="img_header_logo.png"
        width={106}
        height={30}
        alt="Header Logo"
        className="h-[30px] w-[106px] object-contain sm:w-[106px]"
      />
      <ul className="flex flex-wrap gap-7">
        <li>
          <Link href="#" className="cursor-pointer sm:text-[13px]">
            <Text as="p" className="text-[16px] font-normal text-gray-900_01 hover:text-light_blue-a700_01">
              Features
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#" className="cursor-pointer sm:text-[13px]">
            <Text as="p" className="text-[16px] font-normal text-gray-900_01 hover:text-light_blue-a700_01">
              FAQs
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#" className="sm:text-[13px]">
            <Text as="p" className="text-[16px] font-normal text-light_blue-a700_01">
              Pricing
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#" className="cursor-pointer sm:text-[13px]">
            <Text as="p" className="text-[16px] font-normal text-gray-900_01 hover:text-light_blue-a700_01">
              Support
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#" className="cursor-pointer sm:text-[13px]">
            <Text as="p" className="text-[16px] font-normal text-gray-900_01 hover:text-light_blue-a700_01">
              About Us
            </Text>
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Text as="p" className="text-[16px] font-normal text-gray-900_01 sm:text-[13px]">
          Log in
        </Text>
        <Button
          size="2xl"
          shape="round"
          color="light_blue_A700_01_light_blue_400"
          leftIcon={
            <Img
              src="img_chromelogo.svg"
              width={20}
              height={20}
              alt="Chrome Logo"
              className="h-[20px] w-[20px] object-contain"
            />
          }
          className="min-w-[182px] gap-2 rounded-[12px] px-3.5"
        >
          Add to Chrome
        </Button>
      </div>
    </header>
  );
}
