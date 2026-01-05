import RoundImg from "../utils/RoundImg";
import styles from "../../style/homepage/Important.module.css";
import LinkStyle from "../utils/LinkStyle";
import Curve from "@/public/curve";
import { useTranslations } from "next-intl";

export default function Important() {
  const t = useTranslations("home.important");

  return (
    <section className={styles.section}>
      <div className={styles.images}>
        <RoundImg
          className={styles.bigImage}
          src="/PhysioCare_welcomes.webp"
          alt="jakieś zdjęcie"
          size={600}
        />
        <RoundImg
          className={styles.smallImage}
          src="/happy_customers.webp"
          alt="jakieś zdjęcie"
          size={400}
        />
      </div>
      <div className={styles.content}>
        <Curve className={styles.curve} />
        <h2>{t("title")}</h2>
        <p>{t("content")}</p>
        <LinkStyle
          text={t("linkText")}
          href="#kontakt"
          className={styles.btn}
        />
      </div>
    </section>
  );
}
