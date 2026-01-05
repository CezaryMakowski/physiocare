import { ComponentPropsWithoutRef } from "react";
import styles from "../../style/utils/ButtonLink.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
}

export default function ButtonStyle({
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.content}>{text}</div>
    </button>
  );
}
