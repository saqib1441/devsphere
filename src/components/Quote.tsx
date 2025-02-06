import { FC } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Quote: FC = () => {
  return (
    <section>
      <div className="wrapper py-20">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="font-nunito font-black text-3xl text-black/90">
            Get a Free trial
          </h1>
          <p className="text-black/70 sm:w-[500px] md:w-[600px]">
            Try our services risk-free! Sign up for a free trial and experience
            the quality and innovation we bring to digital solutions. No
            commitment—just results!
          </p>
        </div>
        <form className="mt-10 flex flex-col gap-5 sm:items-center border md:w-[650px] md:mx-auto sm:py-16 sm:px-10 p-5 rounded-xl">
          <div className="grid gap-5 sm:grid-cols-2 sm:w-full">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Company</Label>
              <Input type="text" id="company" placeholder="Company" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" id="phone" placeholder="Phone" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Request Quote
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Quote;
