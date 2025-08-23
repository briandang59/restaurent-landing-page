import { images } from "@/assets/images";
import ButtonNavigator from "@/components/ButtonNavigator";
import Divider from "@/components/Divider";
import Image from "next/image";

function BlogDetail() {
  return (
    <div className="pt-[170px] ">
      <Divider type="without-logo" />
      <div className="flex items-center justify-center py-[25px]">
        <ButtonNavigator label="Back to home" position="left" />
      </div>
      <Divider type="without-logo" />
      <div className="pt-[170px] mx-auto container">
        <div className="flex items-center gap-[94px]">
          <Image
            src={images.thumb2}
            alt="thumb"
            width={1000}
            height={1000}
            className="max-w-[423px] min-h-[618px] rounded-t-full object-cover"
          />
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[#DCCA87] text-[25px] font-normal">
              16 Apr 2021
            </h4>
            <h3 className="text-[50px] font-semibold text-white">
              Lorem Ipsum is simply dummy text
            </h3>
            <p className="text-[#969493] font-normal text-[16px] leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever.
            </p>
            <p className="text-[#969493] font-normal text-[16px] leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <p className="text-[#969493] font-normal text-[16px] leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
