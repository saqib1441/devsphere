import PageHeader from "@/components/PageHeader";
import Quote from "@/components/Quote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FC } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const ContactPage: FC = () => {
  const data = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      description: "devsphereoffical@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      description: "+92346-7890654",
    },
    {
      icon: <RiWhatsappFill />,
      title: "WhatsApp Us",
      description: "+92346-7890654",
    },
  ];
  return (
    <section>
      <PageHeader
        title="Contact Us"
        description="We would love to hear from you."
      />
      <div className="wrapper mb-20 flex flex-col gap-10 lg:flex-row items-start">
        <div className="lg:w-1/2 shadow-mainShadow rounded-md p-5 sm:p-10 sm:flex sm:flex-col sm:items-center sm:text-center lg:text-start lg:items-start">
          <p className="text-primary mb-2">Get in touch</p>
          <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90 sm:w-[400px]">
            Your Next Big Idea Starts with a Conversation!
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Have an idea in mind or need expert guidance? We&#39;re here to
            listen, collaborate, and bring your vision to life. Whether it&#39;s
            a project inquiry, partnership opportunity, or just a question,
            let&#39;s start the conversation and create something amazing
            together. Reach out to us today!
          </p>
          <div className="mt-5 flex flex-col gap-5 sm:w-[400px] lg:w-full text-start">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4 bg-primary text-white items-center px-4 rounded-md py-3"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex flex-col">
                    <h1>{item.title}</h1>
                    <Link
                      className="break-all text-white/70"
                      href={
                        item.title === "Call Us"
                          ? "tel:+923467890654"
                          : item.title === "Email Us"
                          ? "mailto:devsphereoffice@gmail.com"
                          : item.title === "WhatsApp Us"
                          ? "https://wa.me/923467890654"
                          : ""
                      }
                    >
                      {item.description}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2 shadow-mainShadow rounded-md p-5 sm:p-10">
          <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90">
            Let&#39;s talk!
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Have questions, suggestions, or a project idea? We&#39;re here to
            listen! Reach out to us for expert guidance, collaboration, or
            support. Your feedback matters, and we&#39;re just a message away.
            Let&#39;s create something amazing together—get in touch today!
          </p>
          <form className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="grid gap-2">
                <Label>Name</Label>
                <Input placeholder="Name" />
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <Input placeholder="Phone" />
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input placeholder="Email" />
              </div>
              <div className="grid gap-2 sm:col-span-2 lg:col-span-1">
                <Label>Subject</Label>
                <Input placeholder="Subject" />
              </div>
            </div>
            <div className="grid gap-2 my-3">
              <Label>Message</Label>
              <Textarea placeholder="Message" className="resize-none" />
            </div>
            <Button className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
      <Quote />
    </section>
  );
};

export default ContactPage;
