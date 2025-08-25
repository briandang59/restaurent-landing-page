import { svgs } from "@/assets/svgs";
import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import SubcribeSection from "@/components/Subcribe";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="pt-[130px]">
      <ChildHeaderPage
        label1="Know About Cafe"
        label2="Regina"
        description="Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time! "
        labelButton="Contact us"
      />
      <Divider type="without-logo" />
      <div className="pt-[70px] pb-[100px] container mx-auto">
        <Image src={svgs.line} alt="line" width={5000} height={1000} />

        <div className="mt-[70px] flex flex-col gap-[40px]">
          <h3 className="text-white font-semibold text-[50px]">
            Lorem Ipsum is simply dummy text
          </h3>
          <p className="text-[#969493] text-[16px] font-normal leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <p className="text-[#969493] text-[16px] font-normal leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-[#969493] text-[16px] font-normal leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <Divider />
      <SubcribeSection />
    </div>
  );
}

export default AboutUs;
