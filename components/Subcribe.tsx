import HeaderSection from "./HeaderSections";
import InputCustom from "./InputCustom";

function SubcribeSection() {
  return (
    <div className="p-[70px_236px] flex flex-col gap-[20px] items-center">
      <HeaderSection
        title="Stay informed"
        description="Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look. "
        position="center"
        width="w-[50%]"
      />
      <div className="border border-[#DCCA8733] bg-[#0C0C0C] flex flex-col gap-[8px] drop-shadow-2xl">
        <div className="my-[64px] px-[150px]">
          <h3 className="font-normal text-[22px] text-white text-center">
            Newsletter
          </h3>
          <h2 className="font-semibold text-[64px] text-center text-[#DCCA87]">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-normal text-[16px] text-white text-center">
            And never miss latest Updates!
          </p>
        </div>
        <div className="flex items-center gap-[20px] mb-[64px] mx-auto">
          <InputCustom placeholder="Email Address" />
          <button className="bg-[#DCCA87] text-black p-[8px_32px] uppercase h-[60px] font-semibold">
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubcribeSection;
