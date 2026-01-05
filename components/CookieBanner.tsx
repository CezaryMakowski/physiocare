"use client";

import React, { useEffect, useState } from "react";
import styles from "@/style/CookieBanner.module.css";
import ButtonStyle from "./utils/ButtonStyle";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "cookie-consent-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("cookieBanner");

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleOk = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={styles.cookieBanner}
      role="dialog"
      aria-label="cookie-banner"
    >
      <div style={{ flex: 1 }}>{t("content")}</div>
      <ButtonStyle text="OK" onClick={handleOk} aria-label="OK" />
    </div>
  );
}
