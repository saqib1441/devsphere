import About from "@/components/About";
import Clients from "@/components/Clients";
import CustomeService from "@/components/CustomeService";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-yellow-5 to-primary/10">
        <Navbar />
        <Header />
      </header>
      <Clients />
      <About />
      <Services />
      <WhyUs />
      <CustomeService />
      <Portfolio />
      <Testimonial />
      <Quote />
      <Footer />
    </>
  );
};

export default HomePage;
