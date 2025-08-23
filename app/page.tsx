import { svgs } from "@/assets/svgs";
import BlogItem from "@/components/BlogItem";
import FoodSection from "@/components/FoodSection";

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
    <div className="bg-[#000000] min-h-screen pt-[130px]">
      <div className="container mx-auto">
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
      <div className="flex items-center gap-[20px] container mx-auto">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}
