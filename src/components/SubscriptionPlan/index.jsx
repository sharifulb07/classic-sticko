import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function SubscriptionPlan({
  planName = "Pro",
  deviceCount = "1 Device",
  planDescription = "Best for individual",
  price = "$4",
  billingCycle = "per month",
  featurecheckimage1 = "img_check.svg",
  featuredescription1 = "All Features",
  featurecheckimage2 = "img_check.svg",
  featuredescription2 = "14 Days Free trial",
  featurecheckimage3 = "img_check.svg",
  featuredescription3 = "Premium Support",
  buttonText = "Get Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-[108px] p-[38px] md:gap-[81px] sm:gap-[54px] sm:p-5 border-blue-50_08 border border-solid shadow-xs rounded-[70px]`}
    >
      <div className="flex flex-col gap-[26px] self-stretch">
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-5">
            <Img
              src="img_1devices.png"
              width={56}
              height={56}
              alt="1devices"
              className="h-[56px] w-[18%] self-center rounded-[14px] object-contain"
            />
            <Heading
              size="headingxl"
              as="h5"
              className="font-outfit text-[21px] font-semibold uppercase text-light_blue-a700_01"
            >
              {planName}
            </Heading>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3.5">
              <Heading size="h2_bold" as="h1" className="text-[40px] font-bold text-gray-900">
                {deviceCount}
              </Heading>
              <Text size="title1" as="p" className="text-[19px] font-normal text-blue_gray-400_01">
                {planDescription}
              </Text>
            </div>
            <div className="flex flex-wrap items-center gap-[13px]">
              <Heading
                size="text4xl"
                as="p"
                className="font-outfit text-[60px] font-medium tracking-[-1.00px] text-gray-900"
              >
                {price}
              </Heading>
              <Text size="title1" as="p" className="mb-[18px] self-end text-[19px] font-normal text-blue_gray-400_01">
                {billingCycle}
              </Text>
            </div>
          </div>
        </div>
        <div className="h-px bg-blue-50_08" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <Img src={featurecheckimage1} width={28} height={28} alt="Check" className="h-[28px] rounded-md" />
            <Text size="title1" as="p" className="text-[19px] font-normal text-gray-900">
              {featuredescription1}
            </Text>
          </div>
          <div className="flex items-center gap-4">
            <Img src={featurecheckimage2} width={28} height={28} alt="Check" className="h-[28px] rounded-md" />
            <Text size="title1" as="p" className="text-[19px] font-normal text-gray-900">
              {featuredescription2}
            </Text>
          </div>
          <div className="flex items-center gap-4">
            <Img src={featurecheckimage3} width={28} height={28} alt="Check" className="h-[28px] rounded-md" />
            <Text size="title1" as="p" className="text-[19px] font-normal text-gray-900">
              {featuredescription3}
            </Text>
          </div>
        </div>
      </div>
      <Button
        size="9xl"
        color="light_blue_A700_01_light_blue_400"
        className="mb-1.5 self-stretch rounded-[38px] !bg-gradient1 px-[34px] font-bold sm:px-5"
      >
        {buttonText}
      </Button>
    </div>
  );
}
