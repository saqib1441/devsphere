"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Import logos
import Logo1 from "@/assets/logos/logo-1.png";
import Logo2 from "@/assets/logos/logo-2.png";
import Logo3 from "@/assets/logos/logo-3.png";
import Logo4 from "@/assets/logos/logo-4.png";
import Logo5 from "@/assets/logos/logo-5.png";
import Logo6 from "@/assets/logos/logo-6.png";

const images: StaticImageData[] = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

const Clients: FC = () => {
  return (
    <div className="wrapper shadow-mainShadow py-10 rounded-2xl text-center -mt-28 bg-white dark:bg-background">
      <h1 className="font-nunito text-3xl font-black text-black/90 dark:text-white/90">
        Join Our Happy Customers
      </h1>
      <div className="mt-2 px-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`client-logo-${index}`} className="w-full">
              <Image
                src={image}
                alt={`Client logo ${index + 1}`}
                className="mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
