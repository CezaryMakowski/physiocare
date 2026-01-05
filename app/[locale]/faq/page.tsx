import FaqItem from "@/components/utils/FaqItem";
import WavesStyling from "@/components/utils/WavesStyling";
import styles from "@/style/FAQ/Faq.module.css";
import { useTranslations } from "next-intl";

type faqItem = {
  q: string;
  a: string;
};

export default function FaqPage() {
  const faqs: faqItem[] = useTranslations("faq").raw("items");

  return (
    <main>
      <WavesStyling>
        <h1>FAQ</h1>
      </WavesStyling>

      <section className={styles.section}>
        {faqs.map((item) => (
          <FaqItem question={item.q} answer={item.a} key={item.q} />
        ))}
      </section>
    </main>
  );
}
