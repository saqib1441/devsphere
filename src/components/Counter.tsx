"use client";

import { FC } from "react";
import CountUp from "react-countup";

interface ICounterProps {
  start: number;
  end: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

const Counter: FC<ICounterProps> = ({
  start,
  end,
  prefix,
  suffix,
  description,
}) => {
  return (
    <div className="shadow-mainShadow text-center p-5 rounded-md">
      <CountUp
        start={start}
        end={end}
        prefix={prefix}
        suffix={suffix}
        className="text-3xl text-primary font-nunito font-black"
      />
      <p className="text-black/70 text-sm">{description}</p>
    </div>
  );
};

export default Counter;
