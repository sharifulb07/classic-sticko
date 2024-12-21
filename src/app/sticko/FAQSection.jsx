"use client";

import { Text, Button, Img, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  { WhatIsSticko: "1. What is Sticko?" },
  { WhatIsSticko: "2. How do I install Sticko?" },
  { WhatIsSticko: "3. Can I customize the themes in Sticko?" },
  { WhatIsSticko: "4. Does Sticko save my notes automatically?" },
  { WhatIsSticko: "4. Does Sticko save my notes automatically?" },
  { WhatIsSticko: "4. Does Sticko save my notes automatically?" },
  { WhatIsSticko: "4. Does Sticko save my notes automatically?" },
  { WhatIsSticko: "4. Does Sticko save my notes automatically?" },
];

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="mt-[86px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[60px] px-14 md:px-5 sm:gap-[30px]">
          <div className="mx-24 flex flex-col items-center gap-2 md:mx-0">
            <Heading
              size="other_16_18_24__up"
              as="h2"
              className="font-dmsans text-[16px] font-medium uppercase tracking-[3.84px] text-light_blue-a700_01"
            >
              TAKE YOU answear{" "}
            </Heading>
            <Heading
              size="h1_bold"
              as="h3"
              className="text-[48px] font-bold text-gray-900_01 md:text-[44px] sm:text-[38px]"
            >
              Frequently Asked Questions
            </Heading>
          </div>
          <Accordion preExpanded={[0]} className="flex w-[80%] flex-col gap-11">
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`Group 35550${i}`}>
                <div className="flex flex-1 flex-col gap-1.5 rounded-[52px] border-2 border-solid border-light_blue-a700_01 bg-white-a700_01 p-[34px] shadow-md sm:p-5">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex items-center justify-between gap-5">
                              <Text
                                size="text3xl"
                                as="p"
                                className="mb-1.5 self-end text-[23px] font-normal text-gray-900 md:text-[21px]"
                              >
                                {d.WhatIsSticko}
                              </Text>
                              {props?.expanded ? (
                                <Img
                                  src="img_group_35538.png"
                                  width={50}
                                  height={50}
                                  alt="Group 35538"
                                  className="h-[50px] w-[6%] rounded-[50%]"
                                />
                              ) : (
                                <Button size="xl" variant="fill" className="w-[50px] rounded-[24px] px-4">
                                  <Img src="img_arrow_right.svg" width={8} height={16} />
                                </Button>
                              )}
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="mb-[18px] flex">
                      <Text as="p" className="w-[86%] text-[16px] font-normal leading-[140%] text-blue_gray-400_01">
                        Sticko is a lightweight browser extension that lets you take quick notes while browsing, keeping
                        your ideas organized and boosting productivity.
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
