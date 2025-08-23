import Image from "next/image";
import ButtonNavigator from "./ButtonNavigator";
import { svgs } from "@/assets/svgs";

interface FoodSectionProps {
  title: string;
  image: string;
  description: string;
  categoriesList: string[];
}
function FoodSection({
  title,
  image,
  description,
  categoriesList,
}: FoodSectionProps) {
  return (
    <div className="grid grid-cols-3 gap-[60px]">
      <div className="flex flex-col gap-[8px] justify-center">
        <h2 className="font-semibold text-[32px] text-white font-athina">
          {title}
        </h2>
        <p className="font-normal text-[#969493] text-[16px] leading-[28px]">
          {description}
        </p>
      </div>
      <div>
        <Image
          src={image}
          alt="food"
          width={800}
          height={600}
          className="w-[800px] h-[600px]"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center gap-[30px]">
          <ul className="flex flex-col gap-[30px]">
            {categoriesList.map((cate, index) => (
              <li
                className="text-[24px] text-white uppercase font-normal"
                key={index}
              >
                {cate}
              </li>
            ))}
          </ul>
          <ButtonNavigator />
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
