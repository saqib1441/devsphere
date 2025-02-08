import { FC } from "react";

interface IPageHeader {
  title: string;
  description: string;
}
const PageHeader: FC<IPageHeader> = ({ title, description }) => {
  return (
    <header className="py-20 text-center">
      <h1 className="text-5xl font-black font-nunito text-black/90 dark:text-white/90">
        {title}
      </h1>
      <p className="text-black/70 dark:text-white/70">{description}</p>
    </header>
  );
};

export default PageHeader;
