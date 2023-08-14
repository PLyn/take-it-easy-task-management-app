"use client";
import format from "date-fns/format";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const WelcomeDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const router = useRouter();

  const HandleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const timeTicker = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timeTicker);
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[30em] bg-gray-200 rounded-lg mt-4 mx-4 text-center drop-shadow-lg">
          <div className="">
            <div className="text-4xl text-gray-500 pt-4">
              {format(currentDate, "h")}:{format(currentDate, "mm")}:
              {format(currentDate, "ss")} {format(currentDate, "aaa")}
            </div>
          </div>
          <div className="mt-4 mb-2 mx-24">
            <Separator className="bg-green-300  pt-0.25" />
          </div>
          <div className="text-md pb-4 font-extralight text-gray-500">
            <div>
              Today is{" "}
              <span className="font-bold text-lg">
                {format(currentDate, "EEEE")}
              </span>
            </div>
            <div className="">{format(currentDate, "PPP")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDisplay;
