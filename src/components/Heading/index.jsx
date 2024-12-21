import React from "react";

const sizes = {
  other_16_18_24__up: "tracking-[3.84px] font-dmsans uppercase text-[16px] font-medium",
  h2_bold: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
  h1_bold: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  title1_bold: "text-[19px] font-bold",
  texts: "text-[12px] font-medium",
  textmd: "text-[14px] font-medium",
  text4xl: "text-[60px] font-medium md:text-[52px] sm:text-[46px]",
  headingxs: "text-[10px] font-semibold",
  headings: "text-[12px] font-semibold",
  headingmd: "text-[14px] font-semibold",
  headinglg: "text-[15px] font-semibold",
  headingxl: "text-[21px] font-semibold",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
