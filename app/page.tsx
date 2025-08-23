import { images } from "@/assets/images";
import { svgs } from "@/assets/svgs";
import BlogItem from "@/components/BlogItem";
import ButtonNavigator from "@/components/ButtonNavigator";
import Divider from "@/components/Divider";
import FoodSection from "@/components/FoodSection";
import HeaderSection from "@/components/HeaderSections";
import Image from "next/image";

export default function Home() {
  const foodContents = [
    {
      title: "Extensive Drinks",
      image: svgs.drink.src,
      description:
        "At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time! ",
      categoriesList: [
        "Beers Bottle",
        "Aperitifs/Degestives",
        "Draft beers",
        "Soft drinks",
      ],
    },
    {
      title: "Small Hunger",
      image: svgs.potato.src,
      description:
        "Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend  you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer. ",
      categoriesList: [
        "Refreshments",
        "Pancakes / Waffles",
        "Savory ",
        "Little Hunger",
      ],
    },
  ];
  return (
    <div className="bg-black min-h-screen pt-[110px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[20px]">
          {foodContents.map((food, index) => (
            <FoodSection
              categoriesList={food.categoriesList}
              title={food.title}
              image={food.image}
              description={food.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <Divider />
      <div className="container mx-auto mt-[70px]">
        <div className="relative min-h-[900px]">
          <div className="flex flex-col gap-[24px] items-center justify-center">
            <HeaderSection
              title="Weekend Suggestion"
              description="During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! "
              position="center"
              width="w-[50%]"
            />
            <ButtonNavigator label="Read more" />
          </div>
          <div>
            <Image
              src={images.food1}
              alt="food"
              width={500}
              height={500}
              className="w-[257px] h-[391px] rounded-t-[160px] absolute left-0 rotate-[-16deg] object-cover"
            />
            <Image
              src={images.food2}
              alt="food"
              width={500}
              height={500}
              className="w-[212px] h-[297px] rounded-t-[160px] absolute left-[255px] top-[380px] rotate-[-6deg] object-cover"
            />
            <Image
              src={images.food3}
              alt="food"
              width={500}
              height={500}
              className="max-w-[270px] max-h-[392px] rounded-t-[160px] absolute left-[450px] top-[450px] rotate-[-11deg] object-cover"
            />
            <Image
              src={images.food6}
              alt="food"
              width={500}
              height={500}
              className="w-[239px] min-h-[336px] rounded-t-[160px] absolute right-[-50px] rotate-[5deg] object-cover"
            />
            <Image
              src={images.food5}
              alt="food"
              width={500}
              height={500}
              className="w-[239px] h-[335px] rounded-t-[160px] absolute right-[175px] top-[380px] rotate-[3deg] object-cover"
            />
            <Image
              src={images.food4}
              alt="food"
              width={500}
              height={500}
              className="w-[258px] min-h-[362px] rounded-t-[160px] absolute right-[400px] top-[480px] rotate-[11deg] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-center justify-center">
          <HeaderSection
            title="Events"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. "
            position="center"
            width="w-[50%]"
          />
          <div className="flex items-center gap-[2px]">
            <ButtonNavigator className="rotate-180" />
            <ButtonNavigator />
          </div>
          <div className="flex items-center gap-[20px] mt-[63px] mb-[100px]">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </div>
      </div>
    </div>
  );
}
