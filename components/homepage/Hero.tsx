"use client";

import Slide from "../utils/Slide";
import Image from "next/image";
import styles from "@/style/homepage/Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import Curve from "@/public/curve";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type HeroProps = {
  src: string;
  title: string;
  description: string;
};

export default function Hero() {
  const t = useTranslations("home.slider");
  const slides: HeroProps[] = t.raw("slides");
  return (
    <section className={styles.section}>
      <Image
        src="/gory_header.svg"
        alt="Header Image"
        width={1200}
        height={400}
        className={styles.headerImg}
      />
      <div className={styles.media}>
        <Link
          href="https://www.instagram.com/physiocarefizjoterapia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.svg"
            alt="logo instagrama"
            width={50}
            height={50}
          />
        </Link>
        <Link
          href="https://www.instagram.com/physiocarefizjoterapia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.svg"
            alt="logo facebooka"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className={styles.swiper}>
        <Image
          src="/arrow.svg"
          alt="Arrow"
          id="left"
          className={styles.arrow}
          width={24}
          height={24}
        />
        <Swiper
          slidesPerView={1}
          speed={1000}
          loop
          effect={"creative"}
          autoplay={{
            delay: 7000,
            pauseOnMouseEnter: true,
          }}
          creativeEffect={{
            prev: {
              scale: 0.75,
              translate: [-100, 0, 0],
              opacity: 0,
            },
            next: {
              opacity: 0,
              translate: ["30%", 0, 0],
            },
          }}
          navigation={{
            prevEl: `#left`,
            nextEl: `#right`,
          }}
          modules={[Navigation, EffectCreative, Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide
                src={slide.src}
                alt={slide.title}
                title={slide.title}
                description={slide.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src="/arrow.svg"
          alt="Arrow"
          id="right"
          className={`${styles.arrow} ${styles.arrowRight}`}
          width={24}
          height={24}
        />
      </div>
      <Curve className={styles.curve} />
    </section>
  );
}
