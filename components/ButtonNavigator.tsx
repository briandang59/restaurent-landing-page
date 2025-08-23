import { svgs } from "@/assets/svgs";
import clsx from "clsx";
import Image from "next/image";

interface ButtonNavigatorProps {
  label?: string;
  className?: string;
}
function ButtonNavigator({ label, className }: ButtonNavigatorProps) {
  return (
    <button className="flex items-center gap-[20px] cursor-pointer">
      <p className="text-[#DCCA87] uppercase font-normal text-[18px]">
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
