"use client";

import Image from "next/image";
import styles from "../style/Header.module.css";
import ActiveLink from "./utils/ActiveLink";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
// Dynamically importing LangSelect to avoid SSR issues
const LangSelect = dynamic(() => import("./utils/LangSelect"), { ssr: false });

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations("navbar");

  useEffect(() => {
    setIsClient(true); // Ensure client-side rendering
    function clickHandler() {
      setSidebarVisible(false);
    }

    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  }, []);

  if (!isClient) return null; // Avoid rendering until client-side hydration
  return (
    <header className={styles.header}>
      <ul
        className={`${styles.mobileNav} ${sidebarVisible && styles.visible}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/" activeClassName={styles.active}>
            {t("home")}
          </ActiveLink>
        </li>
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/oferta" activeClassName={styles.active}>
            {t("offer")}
          </ActiveLink>
        </li>
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/zespol" activeClassName={styles.active}>
            {t("team")}
          </ActiveLink>
        </li>
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/cennik" activeClassName={styles.active}>
            {t("pricing")}
          </ActiveLink>
        </li>
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/#kontakt" activeClassName={styles.active}>
            {t("contact")}
          </ActiveLink>
        </li>
        <li onClick={() => setSidebarVisible(false)}>
          <ActiveLink href="/faq" activeClassName={styles.active}>
            {t("faq")}
          </ActiveLink>
        </li>
      </ul>
      <div className={styles.iconWrapper}>
        <div
          className={styles.icon}
          onClick={(e) => {
            setSidebarVisible(true);
            e.stopPropagation();
          }}
        >
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
        </div>
        <LangSelect />
      </div>
      <ul className={styles.nav}>
        <li>
          <ActiveLink href="/" activeClassName={styles.active}>
            {t("home")}
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/oferta" activeClassName={styles.active}>
            {t("offer")}
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/zespol" activeClassName={styles.active}>
            {t("team")}
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/cennik" activeClassName={styles.active}>
            {t("pricing")}
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/#kontakt" activeClassName={styles.active}>
            {t("contact")}
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/faq" activeClassName={styles.active}>
            {t("faq")}
          </ActiveLink>
        </li>
      </ul>
      <Image src="/logo.svg" alt="Logo" width={500} height={500} />
    </header>
  );
}
