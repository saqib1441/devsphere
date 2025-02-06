import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/assets/hero.svg";

const Header: FC = () => {
  return (
    <>
      <div className="wrapper flex flex-col gap-20 pt-20 pb-40 lg:flex-row lg:gap-10">
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:text-start lg:items-start lg:justify-center">
          <p className="bg-gradient-to-r from-primary to-yellow-500 w-fit py-1 px-5 text-sm rounded-full text-white mb-4">
            Premium Services
          </p>
          <h1 className="font-nunito text-3xl leading-9 font-black text-black/80 mb-4 sm:w-[500px] sm:mx-auto sm:text-4xl lg:w-auto xl:w-[500px] lg:mx-0 xl:text-5xl xl:leading-[1.13]">
            Launch Faster with <span className="text-primary">Dev</span> Sphere
            as Your Co-Pilot
          </h1>
          <p className="text-black/70 mb-6 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0">
            Transform your business with expert web/app development, UI/UX
            design & branding. Secure, scalable IT services driving innovation
            that lasts
          </p>
          <Link href="/">
            <Button>Learn More</Button>
          </Link>
        </div>
        <div className="lg:w-1/2 lg:flex lg:items-end ">
          <Image
            src={HeroImg}
            alt="dev-sphere-hero-image"
            className="sm:w-[500px] mx-auto md:w-[550px] xl:w-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
