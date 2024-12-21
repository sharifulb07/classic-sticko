"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01 text-gray-900",
  },
  underline: {
    light_blue_A700_01: "text-black-900 border-b border-light_blue-a700_01 border-solid",
    blue_gray_400_01: "text-blue_gray-400_01 border-b border-blue_gray-400_01 border-solid",
  },
};

const sizes = {
  md: "h-[42px] px-4 text-[16px]",
  sm: "h-[38px] px-5 text-[14px]",
  xs: "h-[34px] px-3.5 text-[16px]",
  lg: "h-[76px] px-3.5 text-[16px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "underline",
      size = "lg",
      color = "blue_gray_400_01",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["md", "sm", "xs", "lg"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf(["gray_50_01", "light_blue_A700_01", "blue_gray_400_01"]),
};

export { Input };
