import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import { FC } from "react";

const ServicesPage: FC = () => {
  return (
    <section>
      <Services />
      <WhyUs />
      <div className="pt-28 pb-20">
        <Clients />
      </div>
      <Testimonial />
    </section>
  );
};

export default ServicesPage;
