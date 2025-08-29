import { svgs } from "@/assets/svgs";
import clsx from "clsx";
import Image from "next/image";

interface ButtonNavigatorProps {
  label?: string;
  className?: string;
  position?: "left" | "right";
}
function ButtonNavigator({
  label,
  className,
  position = "right",
}: ButtonNavigatorProps) {
  if (position === "left") {
    return (
      <button className="flex items-center gap-[20px] cursor-pointer">
        <Image
          src={svgs.arrow}
          alt="button"
          className={clsx("min-w-[100px] h-[40px] rotate-180", className)}
        />
        <p className="text-[#DCCA87] uppercase font-normal text-[18px] text-nowrap">
          {label}
        </p>
      </button>
    );
  }
  return (
    <button className="flex items-center gap-[20px] cursor-pointer">
      <p className="text-[#DCCA87] uppercase font-normal text-[18px] text-nowrap">
        {label}
      </p>
      <Image
        src={svgs.arrow}
        alt="button"
        className={clsx("min-w-[100px] h-[40px]", className)}
      />
    </button>
  );
}

export default ButtonNavigator;
