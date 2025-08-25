import ChildHeaderPage from "@/components/ChildHeaderPage";
import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSections";
import MenuItem from "@/components/MenuItem";
import SubcribeSection from "@/components/Subcribe";

function Suggestions() {
  const suggestions = [
    "Steak met peper of champignonsaus",
    "Steak taratar",
    "Stoofvlees van varkenswangentjes",
    "Preparéschotel",
    "Diverse croques",
  ];
  return (
    <div className="pt-[130px]">
      <ChildHeaderPage
        label1="Geniet Van De"
        label2="Suggesties!"
        description="Wilt u genieten van een Weekend Suggestie in Zelzate? Dan bent u bij Café Regina aan het juiste adres! In het weekend bij Café Regina kun je jezelf trakteren op een heerlijke warme maaltijd die met veel zorg en liefde wordt bereid. Kom dus zeker eens langs in de zaak of neem contact op!"
        labelButton="Contact us"
      />
      <Divider type="without-logo" />

      <div className="mx-auto container mt-[166px] mb-[100px]">
        <div className="flex items-center justify-center">
          <HeaderSection
            title="Vlaamse Klassiekers"
            description="Er zijn heel wat verschillende suggesties waar u in het weekend van kan genieten bij deze zaak. Zo zijn er bijvoorbeeld de traditionele Vlaamse klassiekers die door de chef-kok op tafel getoverd worden. Zo kan u genieten van huisbereid stoofvlees, maar ook van varkenswangetjes met abdijbier. Een andere optie is dan weer konijn op grootmoeders wijze."
            position="center"
            width="w-[774px]"
          />
        </div>
        <div className="w-[628px] mx-auto mt-[80px]">
          <h3 className="text-[40px] font-normal text-white mb-[30px] text-center">
            SUGGESTIES
          </h3>
          <div className="flex flex-col gap-[35px]">
            {suggestions.map((item, index) => (
              <MenuItem label={item} key={index} type="view" />
            ))}
          </div>
        </div>
      </div>
      <Divider />
      <SubcribeSection />
    </div>
  );
}

export default Suggestions;
