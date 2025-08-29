import { svgs } from "@/assets/svgs";
import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import SubcribeSection from "@/components/Subcribe";
import Image from "next/image";

function AboutUs() {
  const years = [
    { label: 1927, active: true },
    { label: 1940, active: false },
    { label: 1957, active: false },
    { label: 1965, active: false },
    { label: 1979, active: false },
    { label: 1990, active: false },
    { label: 1999, active: false },
    { label: 2010, active: false },
    { label: 2024, active: false },
  ];

  return (
    <div className="lg:pt-[110px] px-4 lg:px-0">
      <ChildHeaderPage
        label1="Know About Cafe"
        label2="Regina"
        description="Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time!"
        labelButton="Contact us"
      />
      <Divider type="without-logo" />
      <div className="lg:pt-[70px] lg:pb-[100px] lg:container lg:mx-auto px-4 lg:px-0">
        <div className="lg:relative hidden">
          <Image src={svgs.line} alt="line" width={5000} height={1000} />
          {/* Years */}
          <div className="absolute top-[-40px] left-0 right-0 px-[90px] flex justify-between">
            {years.map((item, index) => (
              <span
                key={index}
                className={`text-[22px] ${
                  item.active
                    ? "text-[#DCCA87] font-medium"
                    : "text-[#969493] font-normal"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-[70px] flex flex-col gap-[40px]">
          <h3 className="text-white font-semibold text-[25px] lg:text-[50px]">
            Lorem Ipsum is simply dummy text
          </h3>
          <p className="text-[#969493] text-[14px] lg:text-[16px] font-normal lg:leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum&nbsp;
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-[#969493] text-[16px] font-normal leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-[#969493] text-[16px] font-normal leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <Divider />
      <SubcribeSection />
    </div>
  );
}

export default AboutUs;
