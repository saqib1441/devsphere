import { FC, ReactElement } from "react";
import {
  FaArrowUpWideShort,
  FaChartBar,
  FaImage,
  FaLaptopCode,
  FaMobile,
  FaPalette,
} from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

interface IService {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}

const Services: FC = () => {
  const data: IService[] = [
    {
      icon: <FaPalette />,
      title: "Graphic Designing",
      description:
        "Looking for stunning designs? Our graphic design services create eye-catching visuals that make your brand stand out. Creative, and effective designs for all your needs.",
      link: "#",
    },
    {
      icon: <FaImage />,
      title: "UX/UI Designing",
      description:
        "Transform your user experience with our UX/UI design services. We create intuitive, user-friendly interfaces that make your website or app easy to navigate and visually appealing.",
      link: "#",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Turn your ideas into reality with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
      link: "#",
    },
    {
      icon: <FaMobile />,
      title: "App Development",
      description:
        "Bring your ideas to life with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
      link: "#",
    },
    {
      icon: <FaChartBar />,
      title: "Digital Marketing",
      description:
        "Boost your online presence with our digital marketing services. From social media to SEO, we help you reach your audience, grow your brand, and drive results.",
      link: "#",
    },
    {
      icon: <FaArrowUpWideShort />,
      title: "SEO",
      description:
        "Enhance your website ranking with expert SEO services. We optimize keywords, build links, and refine on-page strategies to drive traffic and increase visibility.",
      link: "#",
    },
  ];

  return (
    <section>
      <div className="wrapper py-20">
        <div className="flex flex-col gap-1 items-center text-center mb-10">
          <p className="text-sm text-primary">FEATURED SERVICES</p>
          <h1 className="font-nunito text-3xl font-black sm:w-[500px]">
            You bring the business, and we bring the brilliant minds
          </h1>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
