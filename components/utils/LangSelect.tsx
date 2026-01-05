"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import Select, { SingleValue } from "react-select";
import styles from "@/style/utils/LangSelect.module.css";
import Image from "next/image";

type LanguageOption = { value: string; icon: string };

export default function LangSelect() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const countries: LanguageOption[] = [
    { value: "pl", icon: "/locales/pl.svg" },
    { value: "en", icon: "/locales/gb.svg" },
    { value: "de", icon: "/locales/de.svg" },
  ];
  const selectedOption = countries.find((country) => country.value === locale);

  function changeLocale(option: SingleValue<LanguageOption>) {
    if (option) {
      router.push(pathname, { locale: option.value });
    }
  }

  return (
    <Select
      value={selectedOption}
      options={countries}
      styles={{
        indicatorsContainer: () => ({ display: "none" }),
        control: (provided) => ({
          ...provided,
          border: "none",
          cursor: "pointer",
          padding: 0,
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor:
            state.isFocused || state.isSelected ? "#f0f0f0" : "white",
        }),
        container: (provided) => ({
          ...provided,
          flexShrink: 0,
        }),
      }}
      formatOptionLabel={(country) => (
        <div className={styles.option}>
          <Image
            src={country.icon}
            alt={country.value}
            width={20}
            height={20}
          />
        </div>
      )}
      onChange={changeLocale}
    />
  );
}
