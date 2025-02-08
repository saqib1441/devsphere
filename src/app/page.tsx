import About from "@/components/About";
import Clients from "@/components/Clients";
import CustomeService from "@/components/CustomeService";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Clients />
      <About />
      <Services />
      <WhyUs />
      <CustomeService />
      <Portfolio />
      <Testimonial />
      <Quote />
    </>
  );
};

export default HomePage;
