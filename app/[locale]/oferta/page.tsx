import OfertaItem from "@/components/utils/OfertaItem";
import WavesStyling from "@/components/utils/WavesStyling";
import { useTranslations } from "next-intl";

type ofertaItem = {
  src: string;
  title: string;
  content: string[];
};

export default function Oferta() {
  const t = useTranslations("offer");
  const items: ofertaItem[] = t.raw("items");

  return (
    <main>
      <WavesStyling>
        <h1>{t("title")}</h1>
      </WavesStyling>
      {items.map((item, i) => {
        const isOdd = i % 2 === 1;
        return (
          <OfertaItem
            key={i}
            imgsrc={item.src}
            title={item.title}
            description={item.content}
            isturned={isOdd}
          />
        );
      })}
    </main>
  );
}
