import classNames from "classnames";
import React, { CSSProperties } from "react";

import styles from "./label.module.scss";

interface LabelProps {
  children: React.ReactElement | React.ReactNode | string;
  labelRef?: React.Ref<HTMLLabelElement>;
  type?: "name" | "value" | "badge" | "tag" | "chip";
  display?: boolean;
  wordBreak?: "break-all" | "break-word" | "keep-all";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "default";
  alignment?: "start" | "end" | "center";
  variant?:
    | "primary"
    | "primary__light"
    | "primary__dark"
    | "action"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "light"
    | "white"
    | "alpha"
    | "dark"
    | "name"
    | "value";
  customClassName?: CSSProperties | string;
  htmlFor?: string;
  ellipsis?: boolean;
  testId?: string;
  isDropdownOpen?: boolean;
  isSelected?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  labelRef,
  variant = "",
  isDropdownOpen = false,
  isSelected = false,
  display = false,
  alignment = "start",
  ellipsis = false,
  wordBreak = "",
  type = "",
  size = "default",
  customClassName,
  htmlFor,
  testId,
  ...rest
}) => {
  const LabelClassNames = classNames(
    styles.label,
    size && styles[`${size || "sm"}`],
    type && styles[`${type}`],
    variant && styles[`${variant}`],
    display && styles.block,
    wordBreak && `${wordBreak}`,
    isDropdownOpen && styles.is_dropdown_open,
    isSelected && styles.selected,
    alignment && `justify-content-${alignment}`,
    ellipsis && `text__ellipsis ${styles.ellipsis as string}`,
    customClassName
  );

  return (
    <label
      ref={labelRef}
      className={LabelClassNames}
      htmlFor={htmlFor}
      data-testid={testId}
      {...rest}
    >
      {children}
    </label>
  );
};
