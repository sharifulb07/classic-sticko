import React from "react";

const sizes = {
  title2: "text-[16px] font-normal",
  title1: "text-[19px] font-normal",
  body: "text-[13px] font-normal",
  textxs: "text-[10px] font-normal",
  textlg: "text-[15px] font-normal",
  textxl: "text-[18px] font-normal",
  text2xl: "text-[20px] font-normal",
  text3xl: "text-[23px] font-normal md:text-[21px]",
};

const Text = ({ children, className = "", as, size = "title2", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400_01 font-sora ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
