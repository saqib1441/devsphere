"use client";

import { FC } from "react";
import { FaQuoteLeft, FaUser } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface IData {
  name: string;
  location: string;
  text: string;
}

const TestimonialSwiper: FC = () => {
  const data: IData[] = [
    {
      name: "John Doe",
      location: "CEO, Company XYZ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    },
    {
      name: "Jane Smith",
      location: "Product Manager, Company ABC",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      name: "Jane Smith",
      location: "Product Manager, Company ABC",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      name: "Jane Smith",
      location: "Product Manager, Company ABC",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      name: "Jane Smith",
      location: "Product Manager, Company ABC",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={true}
      loop={true}
      spaceBetween={50}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      style={{ padding: "2%" }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="pb-10">
          <div className="p-5 flex flex-col items-center shadow-xl rounded-xl cursor-pointer dark:shadow-gray-800/40">
            <div className="mb-2 text-3xl text-primary">
              <FaQuoteLeft />
            </div>
            <p className="text-black/70 dark:text-white/70 text-center">
              {item.text}
            </p>
            <div className="flex items-center mt-3 flex-col">
              <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden text-3xl border border-primary mb-1">
                <FaUser />
              </div>
              <h1 className="text-lg font-nunito font-black dark:text-white/90 text-black/90">
                {item.name}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSwiper;
