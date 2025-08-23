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
    <div className="py-[80px] container mx-auto">
      <h2 className="text-white font-semibold text-[120px] leading-[129px]">
        {label1}
      </h2>
      <div className="flex items-center gap-[60px]">
        <div className="flex flex-col gap-[60px]">
          <h2 className="text-white font-semibold text-[120px] leading-[129px] text-nowrap">
            {label2}
          </h2>
          <ButtonNavigator label={labelButton} />
        </div>
        <div className="flex flex-col gap-[60px]">
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
