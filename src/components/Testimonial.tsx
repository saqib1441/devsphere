import { FC } from "react";
import TestimonialSwiper from "./TestimonialSwiper";

const Testimonial: FC = () => {
  return (
    <section>
      <div className="wrapper py-20">
        <div className="text-center">
          <p className="text-primary">Testimonials</p>
          <h1 className="text-3xl font-nunito font-black mb-2">
            What other says about us
          </h1>
          {/* <p className="text-black/70 sm:w-[500px] sm:mx-auto">
            See what our clients say about us! Our testimonials reflect the
            trust, satisfaction, and success we have delivered through our
            expert digital solutions. Hear from businesses and individuals who
            have experienced excellence with us.
          </p> */}
        </div>
        <div className="mt-10">
          <TestimonialSwiper />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
