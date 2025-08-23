import { images } from "@/assets/images";
import { svgs } from "@/assets/svgs";
import BlogItem from "@/components/BlogItem";
import ButtonNavigator from "@/components/ButtonNavigator";
import Divider from "@/components/Divider";
import FoodSection from "@/components/FoodSection";
import HeaderSection from "@/components/HeaderSections";
import SubcribeSection from "@/components/Subcribe";
import Image from "next/image";

export default function Home() {
  // Data
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
        "Savory",
        "Little Hunger",
      ],
    },
  ];

  const blogs = [
    {
      date: "16 Apr 2021",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      thumbnail: images.thumb1.src,
    },
    {
      date: "16 Apr 2021",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      thumbnail: images.thumb2.src,
    },
    {
      date: "16 Apr 2021",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      thumbnail: images.thumb3.src,
    },
    {
      date: "16 Apr 2021",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      thumbnail: images.thumb4.src,
    },
    {
      date: "16 Apr 2021",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      thumbnail: images.thumb5.src,
    },
  ];

  const suggestionImages = [
    {
      src: images.food1.src,
      className: "w-[257px] h-[391px] left-0 rotate-[-16deg]",
    },
    {
      src: images.food2.src,
      className: "w-[212px] h-[297px] left-[255px] top-[380px] rotate-[-6deg]",
    },
    {
      src: images.food3.src,
      className:
        "max-w-[270px] max-h-[392px] left-[450px] top-[450px] rotate-[-11deg]",
    },
    {
      src: images.food6.src,
      className: "w-[239px] min-h-[336px] right-[-50px] rotate-[5deg]",
    },
    {
      src: images.food5.src,
      className: "w-[239px] h-[335px] right-[175px] top-[380px] rotate-[3deg]",
    },
    {
      src: images.food4.src,
      className:
        "w-[258px] min-h-[362px] right-[400px] top-[480px] rotate-[11deg]",
    },
  ];

  const gallery = [
    images.photoGalery1.src,
    images.photoGalery2.src,
    images.photoGalery3.src,
    images.photoGalery4.src,
  ];

  return (
    <div className="bg-black min-h-screen pt-[110px]">
      {/* Food Section */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-[20px]">
          {foodContents.map((food, i) => (
            <FoodSection key={i} {...food} />
          ))}
        </div>
      </div>

      <Divider />

      {/* Weekend Suggestion */}
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

          {/* Suggestion Images */}
          {suggestionImages.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt="food"
              width={500}
              height={500}
              className={`absolute rounded-t-[160px] object-cover ${img.className}`}
            />
          ))}
        </div>

        {/* Blog Section */}
        <div className="flex flex-col gap-[24px] items-center justify-center">
          <HeaderSection
            title="Events"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
            position="center"
            width="w-[50%]"
          />
          <div className="flex items-center gap-[2px]">
            <ButtonNavigator className="rotate-180" />
            <ButtonNavigator />
          </div>
          <div className="flex items-center gap-[20px] mt-[63px] mb-[100px]">
            {blogs.map((blog, i) => (
              <BlogItem key={i} {...blog} />
            ))}
          </div>
        </div>
      </div>

      <Divider type="without-logo" />

      {/* Gallery Section */}
      <div className="mx-auto container grid grid-cols-[40%_60%] gap-[20px] mt-[100px] pb-[40px] min-h-[500px]">
        <div className="flex flex-col gap-4">
          <HeaderSection
            title="Photo Gallery"
            description="If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos! "
            position="left"
            width="w-[50%]"
          />
          <div className="flex items-center gap-[2px]">
            <ButtonNavigator className="rotate-180" />
            <ButtonNavigator />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          {gallery.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`gallery-${i}`}
              width={221}
              height={328}
              className="w-[221px] h-[328px] object-cover"
            />
          ))}
        </div>
      </div>

      <Divider />
      <SubcribeSection />
      <Divider type="without-logo" />
    </div>
  );
}
