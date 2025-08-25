import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSections";
import MenuItem from "@/components/MenuItem";

function Drinks() {
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
        label1="View The Extensive"
        label2="Drinks Menu"
        description="Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area? Then look no further, because Café Regina is the place to be! You will find many different drinks here, so you will certainly find something you will like. So be sure to visit the store or contact us! "
        labelButton="Contact us"
      />
      <Divider type="without-logo" />
      <div className="mx-auto container flex flex-col items-center justify-center py-[100px]">
        <div className="flex items-center">
          <HeaderSection
            title="Weekend Suggestion"
            description="During the weekend at Café Regina you can treat yourself to a delicious hot meal that is prepared with a lot of care and love. Our chef gets to work and conjures up traditional Flemish classics that will delight your taste buds. So be sure to drop by or contact this business! "
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
                    <h3 className="font-normal text-[40px] text-white text-nowrap uppercase">
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
                    <h3 className="font-normal text-[40px] text-white uppercase text-nowrap">
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

export default Drinks;
