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
    <div className="grid grid-cols-3 gap-[20px] min-h-[600px]">
      <div className="flex flex-col gap-[8px] justify-center">
        <h2 className="font-semibold text-[50px] text-white font-athina">
          {title}
        </h2>
        <p className="font-normal text-[#969493] text-[16px] leading-[28px]">
          {description}
        </p>
      </div>
      <div className="relative">
        <Image
          src={image}
          alt="food"
          width={541}
          height={639}
          className="min-w-[541px] h-[639px] object-contain rounded-lg absolute left-0"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center gap-[30px]">
          <ul className="flex flex-col gap-[30px]">
            {categoriesList.map((cate, index) => (
              <li
                className="text-[32px] text-white uppercase font-normal"
                key={index}
              >
                {cate}
              </li>
            ))}
          </ul>
          <ButtonNavigator label="All menu" />
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
