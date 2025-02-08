import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

const CustomeService: FC = () => {
  return (
    <section>
      <div className="wrapper flex flex-col gap-2 items-center text-center py-20">
        <h1 className="text-black/90 dark:text-white/90 text-3xl font-nunito font-black">
          Need custom services?
        </h1>
        <p className="text-black/70 dark:text-white/70 sm:w-[550px] mb-2">
          Looking for custom services tailored to your needs? We offer
          personalized solutions designed to meet your unique requirements and
          deliver exceptional results.
        </p>
        <Link href="/">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default CustomeService;
