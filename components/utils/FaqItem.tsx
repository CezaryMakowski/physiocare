"use client";

import styles from "@/style/FAQ/FaqItem.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  function clickHandler() {
    setExpanded(!expanded);
    if (!ref.current) return;
    if (expanded) {
      ref.current.style.maxHeight = "0px";
    } else {
      ref.current.style.maxHeight = ref.current.scrollHeight + "px";
    }
  }

  return (
    <div className={styles.item}>
      <h3 onClick={() => clickHandler()} className={styles.question}>
        {question}
        <Image
          className={expanded ? `${styles.img} ${styles.expanded}` : styles.img}
          src="/arrow.svg"
          alt="strzałka FAQ"
          width={20}
          height={20}
        />
      </h3>
      <div ref={ref} className={styles.anwWrapper}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
