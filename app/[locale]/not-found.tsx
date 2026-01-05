import styles from "@/style/not-found.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Błąd 404</h1>
        <p>Niestety strona, której szukasz nie zaostała znaleziona</p>
        <svg
          className={styles.curve}
          width="100%"
          height="auto"
          viewBox="0 0 1439 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M706.526 35C370.014 35.0001 0 0 0 0H1440C1440 0 1057.8 34.9999 706.526 35Z" />
        </svg>
      </section>
    </main>
  );
}
