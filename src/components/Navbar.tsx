import { FC } from "react";
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
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";

const Navbar: FC = () => {
  return (
    <nav className="shadow dark:shadow-white/5">
      <div className="wrapper flex items-center py-5 justify-between">
        <Logo />
        <div className="lg:flex gap-5 items-center hidden">
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/team"
            className="hover:text-primary transition-all duration-300"
          >
            Team
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-primary transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/testimonials"
            className="hover:text-primary transition-all duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-all duration-300"
          >
            <Button>Contact Us</Button>
          </Link>
          <ThemeButton />
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <Sheet>
            <SheetTrigger>
              <FaBarsStaggered className="text-xl" />
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
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
