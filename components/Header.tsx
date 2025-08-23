"use client";
import { svgs } from "@/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function Header() {
  const pathname = usePathname();

  const pages = [
    { label: "Home", paths: "/" },
    { label: "Drinks", paths: "/drinks" },
    { label: "Small Hunger", paths: "/small-hunger" },
    { label: "Suggestions", paths: "/suggestions" },
    { label: "Photos", paths: "/photos" },
    { label: "About us", paths: "/about" },
    { label: "Contact us", paths: "/contact" },
  ];

  return (
    <header className="p-[20px_40px] bg-black fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src={svgs.logo}
          alt="logo"
          width={105}
          height={105}
          className="size-[105px]"
        />
        <aside>
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
