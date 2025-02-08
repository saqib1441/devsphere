import Image from "next/image";
import { FC, ReactElement } from "react";
import AboutImg from "@/assets/about.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa6";

interface IData {
  title: string;
  icon: ReactElement;
}

const About: FC = () => {
  const data: IData[] = [
    {
      title: "Smart digital solutions, seamless success.",
      icon: <FaCheck />,
    },
    {
      title: "Timely, efficient, and seamless delivery.",
      icon: <FaCheck />,
    },
    {
      title: "Innovative approach, exceptional results.",
      icon: <FaCheck />,
    },
  ];

  return (
    <section>
      <div className="wrapper py-20 flex flex-col gap-10 lg:flex-row">
        <div className="flex justify-center lg:w-1/2">
          <Image
            src={AboutImg}
            alt="dev-sphere-about-image"
            className="sm:w-[500px] mx-auto md:w-[550px] xl:w-[600px]"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-center lg:text-start text-3xl font-nunito font-black mb-5 text-black/90 dark:text-white/90">
            <span className="before:absolute before:w-full before:h-1 before:left-0 before:-bottom-2 inline-block before:bg-primary before:rounded-full relative">
              About
            </span>{" "}
            Us
          </h1>
          <p className="text-center lg:text-start text-black/70 mb-4 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0 dark:text-white/70">
            At Dev Sphere, we provide top-notch IT services, including web
            development, app development, digital marketing, SEO, WordPress,
            UI/UX design, and graphic design. Our expert team is dedicated to
            delivering innovative and customized solutions that help businesses
            thrive in the digital world. Partner with us for cutting-edge
            technology and exceptional results!
          </p>
          <div className="mb-4 grid gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-primary">{item.icon}</div>
                <h1 className="text-lg font-nunito text-black/70 dark:text-white/70">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
          <Link href="/">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
