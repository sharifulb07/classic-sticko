import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    white_A700_01: "bg-white-a700_01 shadow-2xl",
    light_blue_A700: "bg-light_blue-a700",
    black_900: "bg-black-900 text-white-a700_cc",
    blue_50_01: "bg-blue-50_01 text-gray-900",
  },
  outline: {
    red_50: "border-red-50 border border-solid",
    blue_50: "border-blue-50 border border-solid",
    blue_50_06: "border-blue-50_06 border border-solid",
  },
  gradient: {
    light_blue_A700_01_light_blue_400: "bg-gradient text-white-a700_01",
  },
};
const sizes = {
  "2xl": "h-[50px] px-3.5 text-[16px]",
  "8xl": "h-[74px] px-[34px] text-[19px]",
  "3xl": "h-[52px] px-[34px] text-[20px]",
  lg: "h-[42px] px-[34px] text-[22px]",
  "6xl": "h-[58px] px-[34px] text-[16px]",
  md: "h-[30px] px-1.5",
  "4xl": "h-[56px] px-3",
  "5xl": "h-[58px] px-[34px] text-[19px]",
  xs: "h-[24px] px-2 text-[12px]",
  "10xl": "h-[98px] px-[34px] text-[18px]",
  "9xl": "h-[78px] px-[34px] text-[19px]",
  sm: "h-[28px] px-3.5 text-[12px]",
  xl: "h-[50px] px-4",
  "7xl": "h-[64px] px-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "7xl",
  color = "white_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "8xl", "3xl", "lg", "6xl", "md", "4xl", "5xl", "xs", "10xl", "9xl", "sm", "xl", "7xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "white_A700_01",
    "light_blue_A700",
    "black_900",
    "blue_50_01",
    "red_50",
    "blue_50",
    "blue_50_06",
    "light_blue_A700_01_light_blue_400",
  ]),
};

export { Button };
