import Link from "next/link";
import { ReactElement } from "react";
import { FaChartLine } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import { Button } from "./ui/button";

interface IData {
  icon: ReactElement;
  title: string;
  description: string;
}

const WhyUs = () => {
  const data: IData[] = [
    {
      icon: <PiCertificateBold />,
      title: "Certified Professionals & Experts",
      description:
        "Our certified experts deliver quality solutions with proven skills and experience.",
    },
    {
      icon: <FaChartLine />,
      title: "We are fast, Accurate & Reliable",
      description:
        "We are fast, accurate, reliable, and committed to delivering exceptional results.",
    },
    {
      icon: <TbDeviceLandlinePhone />,
      title: "24/7 Customer Support",
      description:
        "Providing 24/7 customer support with fast, accurate, and reliable service.",
    },
  ];
  return (
    <section>
      <div className="wrapper py-20 flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center text-center gap-3 lg:w-[50%] lg:items-start lg:text-start">
          <p className="text-sm text-primary">Why choose us</p>
          <h1 className="font-nunito font-black text-3xl sm:w-[500px] lg:w-auto lg:text-4xl text-black/90 dark:text-white/90">
            We are here to provide you with consistent satisfaction
          </h1>
          <p className="text-black/70 dark:text-white/70 sm:w-[500px] lg:w-auto">
            Discover why we are your best choice! With a commitment to
            excellence, we ensure top-notch service, reliability, and customer
            satisfaction every time. Your success is our priority!
          </p>
          <Link href="/">
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="grid gap-5 lg:w-[50%] md:w-[600px] md:mx-auto lg:mx-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 p-5 shadow-mainShadow rounded-xl flex-col sm:flex-row sm:items-center"
            >
              <div className="text-primary w-20 bg-primary/5 dark:bg-white/5 h-16 rounded-xl flex items-center justify-center text-3xl sm:w-28 sm:h-full">
                {item.icon}
              </div>
              <div className="w-full">
                <h1 className="text-lg font-nunito font-black text-black/90 dark:text-white/90">
                  {item.title}
                </h1>
                <p className="text-black/70 dark:text-white/70 md:w-[450px] lg:w-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
