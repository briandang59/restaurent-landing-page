import HeaderSection from "./HeaderSections";
import InputCustom from "./InputCustom";

function SubcribeSection() {
  return (
    <div className="lg:p-[70px_236px] py-[40px] flex flex-col gap-[20px] items-center">
      <HeaderSection
        title="Stay informed"
        description="Stay up to date with everything that happens at Café Regina! This business believes it is important to keep its valued guests informed of news, events and special offers. You can always find all the latest news in the newsletter, so be sure to take a look. "
        position="center"
        width="lg:w-[50%]"
      />
      <div className="border border-[#DCCA8733] bg-[#0C0C0C] flex flex-col gap-[8px] drop-shadow-2xl p-4">
        <div className="my-[64px] lg:px-[150px]">
          <h3 className="font-normal text-[16px] lg:text-[22px] text-white text-center">
            Newsletter
          </h3>
          <h2 className="font-semibold text-[32px] lg:text-[64px] text-center text-[#DCCA87]">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-normal text-[16px] text-white text-center">
            And never miss latest Updates!
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-[20px] mb-[64px] mx-auto">
          <InputCustom
            placeholder="Email Address"
            width="lg:w-[574px] w-full"
          />
          <button className="bg-[#DCCA87] text-black p-[8px_32px] uppercase lg:h-[60px] lg:w-[200px] w-full font-semibold">
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubcribeSection;
