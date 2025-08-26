import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  date: string;
  title: string;
  description: string;
  labelButton?: string;
  thumbnail: string;
}
function BlogItem({
  date,
  title,
  thumbnail,
  description,
  labelButton = "Read more",
}: BlogItemProps) {
  return (
    <div className="flex flex-col gap-[24px] max-w-[270px] p-2">
      <Image
        src={thumbnail}
        width={1000}
        height={1000}
        alt="thumnail"
        className="rounded-t-full h-[267] object-cover"
      />
      <div className="flex flex-col items-start gap-[10px]">
        <p className="text-[16px] font-normal text-[#969493] uppercase">
          {date}
        </p>
        <h3 className="text-white font-semibold text-[30px] text-nowrap">
          {title}
        </h3>
        <p className="text-[16px] font-normal text-[#969493] leading-[25px]">
          {description}
        </p>
        <Link href={"/blog/1"}>
          <button className="text-[#DCCA87] font-normal uppercase text-[18px] cursor-pointer">
            {labelButton}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
