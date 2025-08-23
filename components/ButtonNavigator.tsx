import { svgs } from "@/assets/svgs";
import Image from "next/image";

function ButtonNavigator() {
  return (
    <button className="flex items-center gap-[20px] cursor-pointer">
      <p className="text-[#DCCA87] uppercase font-normal text-[20px]">
        All menu
      </p>
      <Image src={svgs.arrow} alt="button" className="min-w-[100px] h-[40px]" />
    </button>
  );
}

export default ButtonNavigator;
