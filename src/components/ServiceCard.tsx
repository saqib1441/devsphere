import Link from "next/link";
import { FC, ReactElement } from "react";
import { Button } from "./ui/button";

interface IServiceCard {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}
const ServiceCard: FC<IServiceCard> = ({ icon, title, description, link }) => {
  return (
    <div className="shadow-mainShadow rounded-md py-5 px-5">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/5 dark:bg-white/5 text-3xl text-primary">
        {icon}
      </div>
      <h1 className="text-lg font-black font-nunito text-black/90 dark:text-white/90 my-2">
        {title}
      </h1>
      <p className="text-black/70 dark:text-white/70 mb-3">{description}</p>
      <Link href={link}>
        <Button>Read More</Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
