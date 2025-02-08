"use client";

import LogoLight from "@/assets/logo-light.png";
import LogoDark from "@/assets/logo-dark.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";

const Logo: FC = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Image
        src={theme === "dark" ? LogoDark : LogoLight}
        alt="dev-sphere-logo"
        className="w-[150px] lg:w-[200px]"
      />
    </div>
  );
};

export default Logo;
