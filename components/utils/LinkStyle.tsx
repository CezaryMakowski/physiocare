import styles from "../../style/utils/ButtonLink.module.css";
import { ComponentPropsWithoutRef } from "react";
import { Link, LinkProps } from "@/i18n/routing";

interface ButtonProps extends LinkProps {
  text: string;
}

export default function LinkStyle({
  text,
  className,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<"a">) {
  return (
    <Link className={`${styles.button} ${className}`} {...props}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.content}>{text}</div>
    </Link>
  );
}
