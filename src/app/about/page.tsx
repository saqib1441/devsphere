import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Clients from "@/components/Clients";
import PageHeader from "@/components/PageHeader";
import Testimonial from "@/components/Testimonial";
import { FC } from "react";

interface IABoutPage {
  title: string;
  description: string;
}

const AboutPage: FC = () => {
  const ourVision: IABoutPage = {
    title: "Our Vision",
    description:
      "This is our vision of the Internet and the Internet is available to everyone and everyone in the world and is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world",
  };
  const ourMission: IABoutPage = {
    title: "Our Mission",
    description:
      "The mission of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the",
  };
  return (
    <section>
      <PageHeader
        title="About Us"
        description="Providing brilliant ideas for your business."
      />
      <About />
      <div className="wrapper py-20 flex flex-col gap-10 lg:flex-row">
        <AboutCard
          title={ourVision.title}
          description={ourVision.description}
        />
        <AboutCard
          title={ourMission.title}
          description={ourMission.description}
        />
      </div>
      <div className="py-20">
        <Clients />
      </div>
      <Testimonial />
    </section>
  );
};

export default AboutPage;
