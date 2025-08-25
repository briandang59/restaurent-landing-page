import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSections";
import MenuItem from "@/components/MenuItem";

function SmallHunger() {
  const menus = [
    {
      title: "Refreshments",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Pancakes / Waffles",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Savory mouth pleasure",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
    {
      title: "Little Hunger",
      menuItem: [
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
        {
          label: "Chapel Hill Shiraz",
          description: "AU | Bottle",
          price: 56,
        },
      ],
    },
  ];
  return (
    <div className="pt-[130px]">
      <ChildHeaderPage
        label1="Small Hunger?"
        label2="Drop By!"
        description="Are you looking for a cozy café in Zelzate ? Then look no further, because Café Regina is the right place for you! You can of course drink a lot of different things here, but if you want to eat something small, you are more than welcome here. You can always come here if you are hungry!"
        labelButton="Contact us"
      />
      <Divider type="without-logo" />
      <div className="mx-auto container flex flex-col items-center justify-center py-[100px]">
        <div className="flex items-center">
          <HeaderSection
            title="Delicious Options"
            description="At Café Regina you will find plenty of delicious options. This way you can satisfy your tasty cravings without it being too heavy on the stomach. For example, you can opt for the farm plank. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread."
            width="w-[774px]"
            position="center"
          />
        </div>
        <div className="mt-[88px]">
          <div className="flex justify-center gap-[152px]">
            {/* Cột trái */}
            <div className="flex flex-col gap-[80px] w-[400px]">
              {menus
                .filter((_, i) => i % 2 === 0) // các section chẵn -> cột trái
                .map((m, index) => (
                  <div className="flex flex-col gap-[30px]" key={index}>
                    <h3 className="font-normal text-[40px] text-white">
                      {m.title}
                    </h3>
                    <div className="flex flex-col gap-[30px]">
                      {m.menuItem.map((mt, index1) => (
                        <MenuItem
                          type="price"
                          label={mt.label}
                          description={mt.description}
                          price={mt.price}
                          key={index1}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Cột phải */}
            <div className="flex flex-col gap-[80px] w-[400px]">
              {menus
                .filter((_, i) => i % 2 !== 0) // các section lẻ -> cột phải
                .map((m, index) => (
                  <div className="flex flex-col gap-[30px]" key={index}>
                    <h3 className="font-normal text-[40px] text-white">
                      {m.title}
                    </h3>
                    <div className="flex flex-col gap-[30px]">
                      {m.menuItem.map((mt, index1) => (
                        <MenuItem
                          type="price"
                          label={mt.label}
                          description={mt.description}
                          price={mt.price}
                          key={index1}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallHunger;
