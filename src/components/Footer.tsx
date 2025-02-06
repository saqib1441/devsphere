import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo-light.svg";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer>
      <div className="wrapper text-center grid gap-10 mb-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex items-center flex-col gap-5 lg:col-span-2 xl:items-start xl:text-start">
          <Image
            src={Logo}
            alt="dev-sphere-logo"
            className="w-[200px] inline-block"
          />
          <p className="text-black/70">
            Transform your business with expert web/app development, UI/UX
            design & branding. Secure, scalable IT services driving innovation
            that lasts
          </p>
          <div className="flex gap-3 text-lg text-primary">
            <Link
              href="/"
              className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center"
            >
              <RiInstagramFill />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="/"
              className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center"
            >
              <RiLinkedinFill />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black">Services</h1>
          <div className="flex flex-col gap-3 text-black/70">
            <Link href="/">Graphic Desiging</Link>
            <Link href="/">UI/UX Designing</Link>
            <Link href="/">Web Development</Link>
            <Link href="/">App Development</Link>
            <Link href="/">Digital Marketing</Link>
            <Link href="/">SEO</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black">Usefull Links</h1>
          <div className="flex flex-col gap-3 text-black/70">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Team</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black">Contact Us</h1>
          <div className="flex flex-col gap-3 text-black/70">
            <Link href="/">+92 346 7890654</Link>
            <Link href="/">devsphereofficial@gmail.com</Link>
          </div>
        </div>
      </div>
      <p className="text-center text-black/70 mb-5">
        &copy; {new Date().getFullYear()} DevSphere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
