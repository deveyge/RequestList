import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "bg-primary hover:bg-accent rounded-lg px-4 py-2 font-semibold transition-colors duration-300 hover:text-white",
        {},
        [className || ""],
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
