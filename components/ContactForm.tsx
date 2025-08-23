import InputCustom from "./InputCustom";

function ContactForm() {
  return (
    <div className="py-[70px] mx-auto w-[972px]">
      <div className="border border-[#DCCA8733] h-[783px] py-[64px] bg-[#0C0C0C] drop-shadow-2xl">
        <h3 className="text-[#DCCA87] font-semibold text-[64px] text-center mb-[24px]">
          Contact Us
        </h3>
        <p className="text-white font-normal text-[16px] text-center">
          Will do feedback As fast as we can!
        </p>

        <form className="mt-[64px] mx-auto w-[574px] flex flex-col gap-[20px]">
          <div className="grid grid-cols-2 gap-[20px]">
            <InputCustom placeholder="First Name" />
            <InputCustom placeholder="Last Name" />
          </div>
          <InputCustom placeholder="Mobile Number" />
          <InputCustom placeholder="Email Address" />
          <InputCustom
            placeholder="Content"
            type="textarea"
            height="w-[200px]"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
