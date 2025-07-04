import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
};

const Button = ({
  variant = "primary",
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const variantClass = styles[variant] || styles.primary;
  return (
    <button
      className={clsx(styles.button, variantClass, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
