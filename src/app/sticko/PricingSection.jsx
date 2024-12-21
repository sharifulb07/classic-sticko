import { Text, Switch, Heading } from "../../components";
import SubscriptionPlan from "../../components/SubscriptionPlan";
import React, { Suspense } from "react";

const pricingOptions = [
  {
    planName: "Pro",
    deviceCount: "1 Device",
    planDescription: "Best for individual",
    price: "$4",
    billingCycle: "per month",
    featureCheckImage1: "img_check.svg",
    featureDescription1: "All Features",
    featureCheckImage2: "img_check.svg",
    featureDescription2: "14 Days Free trial",
    featureCheckImage3: "img_check.svg",
    featureDescription3: "Premium Support",
    buttonText: "Get Started",
  },
  {
    planName: "Diamond",
    deviceCount: "5 Devices",
    planDescription: "Best for family use",
    price: "$14",
    billingCycle: "per month",
    featureCheckImage1: "img_check.svg",
    featureDescription1: "All Features",
    featureCheckImage2: "img_check.svg",
    featureDescription2: "14 Days Free trial",
    featureCheckImage3: "img_check.svg",
    featureDescription3: "Premium Support",
    buttonText: "Get Started",
    featurecheckimage1: "img_check_white_a700_01.svg",
    featuredescription1: "All Features",
    featurecheckimage2: "img_check_white_a700_01.svg",
    featuredescription2: "14 Days Free trial",
    featurecheckimage3: "img_check_white_a700_01.svg",
    featuredescription3: "Premium Support",
  },
  {
    planName: "Pro",
    deviceCount: "1 Device",
    planDescription: "Best for individual",
    price: "$4",
    billingCycle: "per month",
    featureCheckImage1: "img_check.svg",
    featureDescription1: "All Features",
    featureCheckImage2: "img_check.svg",
    featureDescription2: "14 Days Free trial",
    featureCheckImage3: "img_check.svg",
    featureDescription3: "Premium Support",
    buttonText: "Get Started",
    featurecheckimage1: "img_check.svg",
    featuredescription1: "All Features",
    featurecheckimage2: "img_check.svg",
    featuredescription2: "14 Days Free trial",
    featurecheckimage3: "img_check.svg",
    featuredescription3: "Premium Support",
  },
];

export default function PricingSection() {
  return (
    <>
      {/* pricing section */}
      <div className="mt-[138px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-16 md:px-5 sm:gap-8">
          <div className="mx-[290px] flex flex-col items-center gap-11 md:mx-0">
            <div className="flex flex-col items-center gap-2.5 self-stretch">
              <Text as="p" className="text-[16px] font-normal text-light_blue-a700_01">
                PRICING
              </Text>
              <Heading
                size="h1_bold"
                as="h2"
                className="text-shadow-ts text-[48px] font-bold text-gray-900 md:text-[44px] sm:text-[38px]"
              >
                Easy Plan No Surprise{" "}
              </Heading>
              <Text
                size="title1"
                as="p"
                className="self-stretch text-center text-[19px] font-normal leading-[140%] text-blue_gray-400_01"
              >
                Knowledge, tips & tricks gained when mastering of every new Figma feature - all included in the kit.
              </Text>
            </div>
            <div className="flex w-[40%] items-center justify-between gap-5 md:w-full">
              <Text as="p" className="text-[16px] font-normal text-gray-900">
                Monthly
              </Text>
              <Switch size="sm" value={true} />
              <Text as="p" className="text-[16px] font-normal text-gray-900">
                Annually
              </Text>
            </div>
          </div>
          <div className="flex gap-[26px] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {pricingOptions.map((d, index) => (
                <SubscriptionPlan {...d} key={"priceCard" + index} className="mt-[60px] bg-white-a700_01 md:mt-0" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
