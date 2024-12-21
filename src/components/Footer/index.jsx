import { Text, Img } from "./..";
import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center mt-[94px] py-3 border-black-900_19 border-t border-solid`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full items-center justify-between gap-5 md:flex-col">
          <Text size="body" as="p" className="text-[13px] font-normal text-blue_gray-400_01">
            © Sticko 2025. All rights reserved.
          </Text>
          <div className="flex gap-2.5">
            <Img src="img_icon.svg" width={20} height={20} alt="Icon" className="h-[20px]" />
            <Img src="img_icon_blue_gray_400_01.svg" width={20} height={20} alt="Icon" className="h-[20px]" />
            <Img src="img_icon_blue_gray_400_01_20x20.svg" width={20} height={20} alt="Icon" className="h-[20px]" />
            <Img src="img_icon_20x20.svg" width={20} height={20} alt="Icon" className="h-[20px]" />
          </div>
          <ul className="flex flex-wrap gap-[22px]">
            <li>
              <Link href="#">
                <Text size="body" as="p" className="text-[13px] font-normal text-blue_gray-400_01">
                  Privacy Policy
                </Text>
              </Link>
            </li>
            <li>
              <Link href="https://hugeicons.com/terms-of-service" target="_blank" rel="noreferrer">
                <Text size="body" as="p" className="text-[13px] font-normal text-blue_gray-400_01">
                  Cookie policy
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="body" as="p" className="text-[13px] font-normal text-blue_gray-400_01">
                  Terms of service
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
