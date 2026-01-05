import styles from "@/style/homepage/Contact.module.css";
import Image from "next/image";
import ContactForm from "../utils/ContactForm";
import { Link } from "@/i18n/routing";
import Map from "../utils/Map";
import WavesStyling from "../utils/WavesStyling";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("home.contact");
  return (
    <section className={styles.section} id="kontakt">
      <h2 className={styles.title}>{t("title")}</h2>
      <WavesStyling>
        <ContactForm />
      </WavesStyling>
      <div className={styles.contactWrapper}>
        <Link href="tel:+48501530155" className={styles.contactInfo}>
          <Image src="/phone.svg" alt="telefon do nas" width={60} height={60} />
          <p>+48 884 423 772</p>
        </Link>
        <Link
          href="mailto:chmura.fizjoterapia@gmail.com"
          className={styles.contactInfo}
        >
          <Image src="/mail.svg" alt="telefon do nas" width={60} height={60} />
          <p>chmura.fizjoterapia@gmail.com</p>
        </Link>
      </div>
      <div className={styles.mapWrapper}>
        <Map />
        <div className={styles.text}>
          <p>PhysioCare</p>
          <p>Kaszubska 4/21, 70-403 Szczecin</p>
        </div>
      </div>
    </section>
  );
}
