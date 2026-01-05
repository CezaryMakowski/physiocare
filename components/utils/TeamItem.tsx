import Curve from "@/public/curve";
import styles from "@/style/utils/TeamItem.module.css";
import RoundImg from "./RoundImg";
import { ReactNode } from "react";

export default function TeamItem({
  src,
  name,
  description,
  isTurned = false,
}: {
  isTurned?: boolean;
  src: string;
  name: string;
  description: ReactNode;
}) {
  return (
    <section className={`${styles.section} ${isTurned ? styles.turned : ""}`}>
      <RoundImg className={styles.img} src={src} alt={name} size={800} />
      <div className={styles.content}>
        <Curve className={styles.curve} />
        <h2>{name}</h2>
        {description}
      </div>
    </section>
  );
}
