"use client"
import { HeaderData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMenue() {
  const pathName=usePathname()
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {HeaderData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className="hover:text-darkColor hoverEffect relative group"
        >
          {item?.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0" />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenue;
