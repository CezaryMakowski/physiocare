import styles from "../../style/homepage/PointsOfInterest.module.css";
import RoundImg from "../utils/RoundImg";
import Curve from "@/public/curve";
import { useTranslations } from "next-intl";

type point = {
  title: string;
  description: string;
  src: string;
};

export default function PointsOfInterest() {
  const t = useTranslations("home.pointsOfInterest");
  const points: point[] = t.raw("points");
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.points}>
        {points.map((point, index) => (
          <div className={styles.point} key={index}>
            <RoundImg
              className={styles.img}
              src={point.src}
              alt={point.title}
              size={200}
            />
            <div className={styles.content}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
              <Curve className={styles.curve} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
