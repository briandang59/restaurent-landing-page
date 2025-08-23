import ButtonNavigator from "./ButtonNavigator";

interface ChildHeaderPageProps {
  label1: string;
  label2: string;
  description: string;
}
function ChildHeaderPage({
  label1,
  label2,
  description,
}: ChildHeaderPageProps) {
  return (
    <div className="py-[80px] container mx-auto">
      <h2 className="text-white font-semibold text-[120px] leading-[129px]">
        {label1}
      </h2>
      <div className="flex items-center gap-[60px] mb-[60px]">
        <h2 className="text-white font-semibold text-[120px] leading-[129px] text-nowrap">
          {label2}
        </h2>
        <p className="font-normal text-[16px] leading-[25px] text-[#969493]">
          {description}
        </p>
      </div>
      <ButtonNavigator label="Contact us" />
    </div>
  );
}

export default ChildHeaderPage;
