"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import styles from "../../style/homepage/PhotoShowcase.module.css";
import { useState } from "react";

const gallery = [
  {
    src: "/showcase/gabinet_1.webp",
    alt: "Gabinet zdjęcie 1",
  },
  {
    src: "/showcase/gabinet_2.webp",
    alt: "Gabinet zdjęcie 2",
  },
  {
    src: "/showcase/gabinet_3.webp",
    alt: "Gabinet zdjęcie 3",
  },
  {
    src: "/showcase/gabinet_4.webp",
    alt: "Gabinet zdjęcie 4",
  },
];

export default function PhotoShowcase() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  const handleSlideClick = (index: number) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Galeria</h2>
      <Swiper
        className={styles.mySwiper}
        onSwiper={setMainSwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, EffectCoverflow]}
        slidesPerView={1}
        initialSlide={2}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div
              className={styles.thumbsWrapper}
              onClick={() => handleSlideClick(index)}
            >
              <Image
                src={image.src}
                className={styles.slide}
                alt={image.alt}
                width={1500}
                height={1000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={styles.mySwiperThumbs}
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={"auto"}
        watchSlidesProgress
        spaceBetween={15}
        centeredSlides
        initialSlide={2}
        freeMode={true}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-thumb${index}`} className={styles.thumb}>
            <Image
              src={image.src}
              className={styles.slide}
              alt={image.alt}
              width={1500}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
