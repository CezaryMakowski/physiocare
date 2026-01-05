import styles from "@/style/homepage/AboutUs.module.css";
import Image from "next/image";
import LinkStyle from "../utils/LinkStyle";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("home.aboutUs");
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.wrapper}>
        <Image
          className={styles.teamImg}
          src="/PhysioCare_Team.png"
          alt="zespół PhysioCare"
          width={800}
          height={800}
        />
        <div className={styles.contentWrapper}>
          <Image
            className={styles.mountains}
            src="/gory_about.svg"
            alt="element ozdobny gór"
            width={800}
            height={400}
          />
          <div className={styles.content}>
            <h3>{t("subtitle")}</h3>
            <p>{t("content")}</p>
            <LinkStyle
              className={styles.btn}
              href="/zespol"
              text={t("linkText")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
