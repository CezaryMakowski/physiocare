import WavesStyling from "@/components/utils/WavesStyling";
import TeamItem from "@/components/utils/TeamItem";
import { useTranslations } from "next-intl";

export default function Zespol() {
  const t = useTranslations("team");
  const team = [
    {
      src: t("members.dominik.src"),
      name: t("members.dominik.name"),
      description: (
        <>
          {t.rich("members.dominik.description", {
            p: (children) => <p>{children}</p>,
            h3: (children) => <h3>{children}</h3>,
            ul: (children) => <ul>{children}</ul>,
            li: (children) => <li>{children}</li>,
          })}
        </>
      ),
    },
    {
      src: t("members.patrycja.src"),
      name: t("members.patrycja.name"),
      description: (
        <>
          {t.rich("members.patrycja.description", {
            p: (children) => <p>{children}</p>,
            h3: (children) => <h3>{children}</h3>,
            ul: (children) => <ul>{children}</ul>,
            li: (children) => <li>{children}</li>,
          })}
        </>
      ),
    },
    {
      src: t("members.beata.src"),
      name: t("members.beata.name"),
      description: (
        <>
          {t.rich("members.beata.description", {
            p: (children) => <p>{children}</p>,
            h3: (children) => <h3>{children}</h3>,
            ul: (children) => <ul>{children}</ul>,
            li: (children) => <li>{children}</li>,
          })}
        </>
      ),
    },
    {
      src: t("members.joanna.src"),
      name: t("members.joanna.name"),
      description: (
        <>
          {t.rich("members.joanna.description", {
            p: (children) => <p>{children}</p>,
            h3: (children) => <h3>{children}</h3>,
            ul: (children) => <ul>{children}</ul>,
            li: (children) => <li>{children}</li>,
          })}
        </>
      ),
    },
  ];
  return (
    <main>
      <WavesStyling>
        <h1>{t("title")}</h1>
      </WavesStyling>
      {team.map((teammate, i) => {
        const isOdd = i % 2 === 1;
        return (
          <TeamItem
            key={i}
            src={teammate.src}
            name={teammate.name}
            description={teammate.description}
            isTurned={isOdd}
          />
        );
      })}
    </main>
  );
}
