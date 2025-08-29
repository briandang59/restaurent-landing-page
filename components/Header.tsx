"use client";
import { svgs } from "@/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { paths } from "@/utils/constants/paths";

function Header() {
  const pathname = usePathname();

  const pages = [
    { label: "Home", paths: paths.home },
    { label: "Drinks", paths: paths.drinks },
    { label: "Small Hunger", paths: paths.smallHunger },
    { label: "Suggestions", paths: paths.suggestions },
    { label: "Photos", paths: paths.photos },
    { label: "About us", paths: paths.aboutUs },
    { label: "Contact us", paths: paths.contact },
  ];

  return (
    <header className="p-[10px_20px] lg:p-[20px_40px] bg-black fixed top-0 w-full z-50">
      <div className="lg:container lg:mx-auto flex items-center justify-between">
        <Image
          src={svgs.logo}
          alt="logo"
          width={1000}
          height={1000}
          className="size-[50px] lg:size-[105px]"
        />
        <aside className="lg:block hidden">
          <ul className="flex items-center gap-[35px]">
            {pages.map((page) => (
              <li
                key={page.label}
                className={clsx(
                  "uppercase duration-300 transition-all cursor-pointer",
                  pathname === page.paths
                    ? "text-white"
                    : "text-[#969493] hover:text-white"
                )}
              >
                <Link href={page.paths}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}

export default Header;
