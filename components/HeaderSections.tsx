import clsx from "clsx";

interface HeaderSectionProps {
  title: string;
  description: string;
  position?: "left" | "center" | "right";
  width?: string;
}
function HeaderSection({
  title,
  description,
  position = "center",
  width,
}: HeaderSectionProps) {
  if (position === "left") {
    return (
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[25px] lg:text-[50px] font-semibold text-white">
          {title}
        </h2>
        <p className="text-[#969493] font-normal text-[16px] leading-[28px]">
          {description}
        </p>
      </div>
    );
  }
  if (position === "center")
    return (
      <div
        className={clsx(
          `flex flex-col gap-[20px] items-center justify-center`,
          width
        )}
      >
        <h2 className="text-[25px] lg:text-[50px] font-semibold text-white">
          {title}
        </h2>
        <p className="text-[#969493] font-normal text-[16px] leading-[28px] text-center">
          {description}
        </p>
      </div>
    );
}

export default HeaderSection;
