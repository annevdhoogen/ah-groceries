import * as styles from "./button.css";
import Link from "next/link";
import classnames from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  label: string;
  href?: string;
  variant?: "ghost";
  icon?: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "ghost";
  icon?: boolean;
  className?: string;
  label: string;
  href?: string;
}

export const ButtonLink = ({
  variant,
  icon,
  className = "",
  label,
  href = "",
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={classnames(
        styles.button({
          ghost: variant === "ghost",
          icon: icon,
        }),
        className
      )}
      href={href}
      {...props}
    >
      {label}
    </Link>
  );
};

export const Button = ({
  variant,
  icon,
  className,
  label,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.button({
          ghost: variant === "ghost",
          icon: icon,
        }),
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
