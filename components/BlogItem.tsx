import { images } from "@/assets/images";
import Image from "next/image";

function BlogItem() {
  return (
    <div className="flex flex-col gap-[24px] max-w-[270px] p-2">
      <Image src={images.thumb1} alt="thumnail" className="rounded-t-full" />
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[16px] font-normal text-[#969493] uppercase">
          16 Apr 2021
        </p>
        <h3 className="text-white font-semibold text-[30px]">
          Lorem ipsum dolor
        </h3>
        <p className="text-[16px] font-normal text-[#969493] leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <button className="text-[#DCCA87] font-normal uppercase text-[18px] cursor-pointer">
          Read more
        </button>
      </div>
    </div>
  );
}

export default BlogItem;
