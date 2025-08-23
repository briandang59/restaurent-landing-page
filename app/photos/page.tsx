import { images } from "@/assets/images";
import ButtonNavigator from "@/components/ButtonNavigator";
import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import SubcribeSection from "@/components/Subcribe";
import Image from "next/image";

function Photos() {
  const imagesGl = [
    images.photoGalery1.src,
    images.photoGalery2.src,
    images.photoGalery3.src,
    images.photoGalery4.src,
    images.photoGalery5.src,
    images.photoGalery6.src,
    images.photoGalery7.src,
    images.photoGalery8.src,
    images.photoGalery9.src,
    images.photoGalery10.src,
  ];
  return (
    <div className="pt-[110px] bg-black">
      <ChildHeaderPage
        label1="Enjoy The Atmospheric"
        label2="Photos!"
        description="If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos! "
      />
      <Divider type="without-logo" />
      <div className="container mx-auto py-[70px] grid grid-cols-5 gap-[24px]">
        {imagesGl.map((img, index) => (
          <Image
            src={img}
            alt={`Gallery Image ${index + 1}`}
            width={1000}
            height={1000}
            className="w-full h-[328px] object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            key={index}
          />
        ))}
      </div>
      <div className="container mx-auto flex items-center justify-between mb-[100px]">
        <ButtonNavigator className="rotate-180" />
        <div className="flex items-center gap-[20px]">
          <p className="text-white font-semibold text-[24px]">01</p>
          <div className="border border-b border-white w-[332px]"></div>
          <p className="text-[#969493] text-[24px]">02</p>
          <p className="text-[#969493] text-[24px]">03</p>
          <p className="text-[#969493] text-[24px]">04</p>
          <p className="text-[#969493] text-[24px]">05</p>
          <p className="text-[#969493] text-[24px]">06</p>
          <p className="text-[#969493] text-[24px]">07</p>
          <p className="text-[#969493] text-[24px]">08</p>
          <p className="text-[#969493] text-[24px]">09</p>
          <p className="text-[#969493] text-[24px]">10</p>
        </div>
        <ButtonNavigator />
      </div>
      <Divider />
      <SubcribeSection />
    </div>
  );
}

export default Photos;
