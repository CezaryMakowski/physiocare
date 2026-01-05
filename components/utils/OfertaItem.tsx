import styles from "@/style/utils/OfertaItem.module.css";
import LinkStyle from "./LinkStyle";
import RoundImg from "./RoundImg";
import Image from "next/image";

export default function OfertaItem({
  isturned = false,
  imgsrc,
  title,
  description,
}: {
  isturned?: boolean;
  imgsrc: string;
  title: string;
  description: string[];
}) {
  return (
    <section className={`${styles.section} ${isturned ? styles.turned : ""}`}>
      {isturned ? (
        <Image
          className={styles.gory}
          src="/gory_oferta.svg"
          alt="proxy"
          width={200}
          height={200}
        />
      ) : (
        <Image
          className={styles.gory}
          src="/gory_oferta_turned.svg"
          alt="proxy"
          width={200}
          height={200}
        />
      )}
      <div className={styles.content}>
        <RoundImg className={styles.img} src={imgsrc} alt="proxy" size={500} />
        <h2 className={styles.title}>{title}</h2>
        {description.map((paragraph, i) => (
          <p className={styles.description} key={i}>
            {paragraph}
          </p>
        ))}
        <LinkStyle className={styles.btn} text="umów się na wizytę" href="#" />
      </div>
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
  );
}
