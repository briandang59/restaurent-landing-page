import InputCustom from "./InputCustom";

function ContactForm() {
  return (
    <div className="py-[70px] mx-auto w-full lg:w-[972px]">
      <div className="border border-[#DCCA8733] lg:h-[783px] py-[64px] bg-[#0C0C0C] drop-shadow-2xl p-4">
        <h3 className="text-[#DCCA87] font-semibold text-[32px] lg:text-[64px] text-center mb-[24px]">
          Contact Us
        </h3>
        <p className="text-white font-normal text-[16px] text-center">
          Will do feedback As fast as we can!
        </p>

        <form className="mt-[64px] mx-auto w-full lg:w-[574px] flex flex-col gap-[20px]">
          <div className="grid grid-cols-2 gap-[20px]">
            <InputCustom placeholder="First Name" width="w-full" />
            <InputCustom placeholder="Last Name" width="w-full" />
          </div>
          <InputCustom placeholder="Mobile Number" width="w-full" />
          <InputCustom placeholder="Email Address" width="w-full" />
          <InputCustom placeholder="Content" type="textarea" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
