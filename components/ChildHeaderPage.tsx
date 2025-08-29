import ButtonNavigator from "./ButtonNavigator";

interface ChildHeaderPageProps {
  label1: string;
  label2: string;
  description: string;
  description2?: string;
  labelButton?: string;
}
function ChildHeaderPage({
  label1,
  label2,
  description,
  description2,
  labelButton,
}: ChildHeaderPageProps) {
  return (
    <div className="lg:py-[80px] py-[40px] container mx-auto">
      <h2 className="text-white font-semibold text-[60px] lg:text-[120px] lg:leading-[129px] text-center lg:text-left">
        {label1}
      </h2>
      <div className="flex lg:flex-row flex-col items-center lg:gap-[60px] gap-[20px]">
        <div className="flex flex-col lg:gap-[60px] gap-[20px]">
          <h2 className="text-white font-semibold text-[60px] lg:text-[120px] lg:leading-[129px] text-nowrap text-center lg:text-left">
            {label2}
          </h2>
          <ButtonNavigator label={labelButton} />
        </div>
        <div className="flex flex-col lg:gap-[60px] gap-[20px]">
          <p className="font-normal text-[16px] leading-[25px] text-[#969493]">
            {description}
          </p>
          <p className="font-normal text-[16px] leading-[25px] text-[#969493]">
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChildHeaderPage;
