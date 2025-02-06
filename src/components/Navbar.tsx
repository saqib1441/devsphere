import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo-light.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar: FC = () => {
  return (
    <nav className="shadow bg-white/30 backdrop-blur-sm">
      <div className="wrapper flex items-center py-5 justify-between">
        <div>
          <Image
            src={Logo}
            alt="dev-sphere-logo"
            className="w-[150px] lg:w-[200px]"
          />
        </div>
        <div className="lg:flex gap-5 items-center hidden">
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Team
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBarsStaggered className="text-lg" />
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetTitle></SheetTitle>
              <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                <SheetClose asChild>
                  <Link href="/">Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">About</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">Services</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">Team</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">Portfolio</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">Testimonials</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">
                    <Button>Contact Us</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
