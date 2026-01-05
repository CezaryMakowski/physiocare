"use client";

import styles from "../../style/utils/Slide.module.css";
import RoundImg from "./RoundImg";
import LinkStyle from "./LinkStyle";
import { useTranslations } from "next-intl";

export default function Slide({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  const t = useTranslations("home.slider");

  return (
    <div className={styles.slide}>
      <RoundImg className={styles.img} src={src} alt={alt} size={250} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <LinkStyle
            text={t("linkText")}
            href="#kontakt"
            className={styles.btn}
          />
        </div>
      </div>
    </div>
  );
}
