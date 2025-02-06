import Image from "next/image";
import { FC } from "react";
import PortfolioImg from "@/assets/portfolio.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import Counter from "./Counter";

const Portfolio: FC = () => {
  return (
    <section>
      <div className="wrapper py-20 flex flex-col gap-10 lg:flex-row">
        <div className="flex justify-center lg:w-1/2">
          <Image
            src={PortfolioImg}
            alt="dev-sphere-about-image"
            className="sm:w-[500px] mx-auto md:w-[550px] xl:w-[600px]"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-center lg:text-start text-3xl font-nunito font-black mb-5 text-black/90">
            <span className="before:absolute before:w-full before:h-1 before:left-0 before:-bottom-2 inline-block before:bg-primary before:rounded-full relative">
              Our
            </span>{" "}
            Portfolio
          </h1>
          <p className="text-center lg:text-start text-black/70 mb-4 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0">
            Explore our portfolio to see how we transform ideas into reality
            with expert web development, UI/UX design, digital marketing, and
            creative solutions. From sleek websites to engaging visuals, our
            work reflects innovation, precision, and a results-driven approach.
            Let our projects speak for themselves!
          </p>
          <div className="grid grid-cols-2 gap-5 mb-7 mt-2">
            <Counter
              start={0}
              end={18}
              suffix="K+"
              description="Projects Done"
            />
            <Counter
              start={0}
              end={18}
              suffix="K+"
              prefix=""
              description="Happy Client"
            />
          </div>
          <Link href="/">
            <Button>Show Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
