import WavesStyling from "@/components/utils/WavesStyling";
import Curve from "@/public/curve";
import styles from "@/style/cennik/cennik.module.css";
import { useTranslations } from "next-intl";

type serviceItem = {
  category: string;
  items: { name: string; price: string }[];
};

export default function CennikPage() {
  const t = useTranslations("pricing");
  const services: serviceItem[] = t.raw("services");

  return (
    <main>
      <WavesStyling>
        <h1>{t("title")}</h1>
      </WavesStyling>
      <section className={styles.section}>
        <div className={styles.grid}>
          {services.map((group) => (
            <div key={group.category}>
              <div className={styles.card}>
                <h2 className={styles.category}>{group.category}</h2>
                <div className={styles.list}>
                  {group.items.map((item) => (
                    <div className={styles.row} key={item.name}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.price}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Curve className={styles.curve} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
