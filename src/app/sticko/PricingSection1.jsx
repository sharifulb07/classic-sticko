import { Text, Img, Button, Heading } from "../../components";
import React from "react";

export default function PricingSection1() {
  return (
    <>
      {/* pricing section */}
      <div className="mt-32 flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[72px] px-14 md:gap-[54px] md:px-5 sm:gap-9">
          <div className="mx-16 flex w-[66%] flex-col items-center gap-3.5 md:mx-0 md:w-full">
            <Heading
              size="h1_bold"
              as="h2"
              className="text-shadow-ts text-[48px] font-bold text-gray-900 md:text-[44px] sm:text-[38px]"
            >
              Lifetime Access
            </Heading>
            <Text
              size="title1"
              as="p"
              className="self-stretch text-center text-[19px] font-normal leading-[140%] text-blue_gray-400_01"
            >
              Enjoy Lifetime Access with seamless workflow, uninterrupted connections, and the freedom to work without
              worries.
            </Text>
          </div>
          <div className="flex w-[70%] flex-col gap-[72px] md:w-full md:gap-[54px] sm:gap-9">
            <div className="flex flex-col items-start gap-2.5">
              <Button
                size="lg"
                color="light_blue_A700_01_light_blue_400"
                className="ml-[30px] min-w-[80px] rounded-[20px] !bg-gradient3 px-[34px] font-dmsans font-bold md:ml-0 sm:px-5"
              >
                1
              </Button>
              <div className="relative h-[22px] self-stretch">
                <div className="absolute bottom-1 left-0 right-0 mx-auto flex-1 rounded-md bg-gradient4">
                  <div className="h-[12px] rounded-md bg-blue_gray-50" />
                </div>
                <div className="absolute bottom-0 left-[16.50px] top-0 my-auto h-[22px] w-[22px] rounded-[10px] border-[1.5px] border-solid border-gray-300 bg-white-a700_01 shadow-xl" />
              </div>
            </div>
            <div className="rounded-bl-[70px] rounded-tl-[70px] border border-solid border-blue_gray-50 bg-white-a700_01">
              <div className="flex items-start justify-center gap-[34px] md:flex-col">
                <div className="mt-[84px] flex w-[42%] flex-col gap-[22px] md:mt-0 md:w-full">
                  <div className="flex items-start justify-between gap-5">
                    <Button
                      color="light_blue_A700"
                      size="4xl"
                      variant="fill"
                      shape="round"
                      className="w-[56px] self-center rounded-[14px] px-2.5"
                    >
                      <Img src="img_close_white_a700_01.svg" width={36} height={18} />
                    </Button>
                    <Heading
                      size="headingxl"
                      as="h3"
                      className="font-outfit text-[21px] font-semibold uppercase text-teal-300"
                    >
                      infinity
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start gap-3.5">
                    <Heading
                      size="h2_bold"
                      as="h4"
                      className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px]"
                    >
                      1 Device
                    </Heading>
                    <Text size="title1" as="p" className="text-[19px] font-normal text-blue_gray-400_01">
                      For seamless experience
                    </Text>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <Heading
                      size="h2_bold"
                      as="h5"
                      className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px]"
                    >
                      $60
                    </Heading>
                    <Heading
                      size="h2_bold"
                      as="h6"
                      className="text-[40px] font-bold text-blue_gray-400_01 md:text-[38px] sm:text-[36px]"
                    >
                      $150{" "}
                    </Heading>
                  </div>
                </div>
                <div className="flex w-[50%] flex-col gap-9 self-center rounded-br-[70px] rounded-tr-[70px] bg-gradient3 px-8 py-[70px] md:w-full md:py-5 sm:p-5">
                  <div className="flex flex-col items-start gap-5">
                    <Text size="title1" as="p" className="text-[19px] font-normal text-white-a700_01">
                      What’s included
                    </Text>
                    <div className="ml-4 mr-[22px] flex flex-col gap-1 self-stretch md:mx-0">
                      <div className="flex items-center gap-4">
                        <Img
                          src="img_check_white_a700_01.svg"
                          width={28}
                          height={28}
                          alt="Check"
                          className="h-[28px] rounded-md"
                        />
                        <Text size="title1" as="p" className="text-[19px] font-normal text-white-a700_01">
                          All Features
                        </Text>
                      </div>
                      <div className="flex items-center gap-4">
                        <Img
                          src="img_check_white_a700_01.svg"
                          width={28}
                          height={28}
                          alt="Check"
                          className="h-[28px] rounded-md"
                        />
                        <Text size="title1" as="p" className="text-[19px] font-normal text-white-a700_01">
                          14 Days Free trial
                        </Text>
                      </div>
                      <div className="flex items-center gap-4">
                        <Img
                          src="img_check_white_a700_01.svg"
                          width={28}
                          height={28}
                          alt="Check"
                          className="h-[28px] rounded-md"
                        />
                        <Text size="title1" as="p" className="text-[19px] font-normal text-white-a700_01">
                          Premium Support
                        </Text>
                      </div>
                      <div className="flex items-center gap-4">
                        <Img
                          src="img_check_white_a700_01.svg"
                          width={28}
                          height={28}
                          alt="Check"
                          className="h-[28px] rounded-md"
                        />
                        <Text size="title1" as="p" className="text-[19px] font-normal text-white-a700_01">
                          Lifetime Use
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="8xl"
                    variant="fill"
                    className="mb-5 self-stretch rounded-[36px] px-[34px] font-bold text-gray-900 sm:px-5"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:flex-col">
            <Img src="img_checkmark.svg" width={32} height={32} alt="Checkmark" className="h-[32px] sm:w-full" />
            <Text size="title1" as="p" className="text-[19px] font-normal text-neutral-600">
              <span className="text-neutral-600">It&#39;s&nbsp;</span>
              <span className="text-light_blue-a700_01">100% free payment is secured by 2checkout</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
