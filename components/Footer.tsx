import Image from "next/image";
import styles from "@/style/Footer.module.css";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("navbar");
  return (
    <footer className={styles.footer}>
      <Image
        src="/gory_footer.svg"
        alt="obraz gór stopka"
        width={1200}
        height={200}
        className={styles.footerImg}
      />
      <div className={styles.content}>
        <div className={styles.navi}>
          <Image
            src="/logo_fav.svg"
            alt="logo"
            width={150}
            height={150}
            className={styles.logo}
          />
          <ul>
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/oferta">{t("offer")}</Link>
            </li>
            <li>
              <Link href="/zespol">{t("team")}</Link>
            </li>
            <li>
              <Link href="/cennik">{t("pricing")}</Link>
            </li>
            <li>
              <Link href="/#kontakt" scroll>
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link href="/faq">{t("faq")}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.media}>
          {/* <Link
            href="https://www.instagram.com/physiocarefizjoterapia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={40}
              height={40}
              className={styles.icon}
            />
          </Link> */}
          <Link
            href="https://booksy.com/pl-pl/309116_physiocare-fizjoterapia_fizjoterapia_18078_szczecin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Booksy.svg"
              alt="Booksy logo"
              width={40}
              height={40}
              className={styles.icon}
            />
          </Link>
          <Link
            href="https://www.instagram.com/physiocarefizjoterapia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram logo"
              width={40}
              height={40}
              className={styles.icon}
            />
          </Link>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
      </div>
    </footer>
  );
}
