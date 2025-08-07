import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Logo({ children, className }: Props) {
  return (
    <Link href={`/`}>
      <h2
        className={cn(
          "text-2xl text-darkColor from-black font-extrabold tracking-wide uppercase"
        )}
      >
        {children}
      </h2>
    </Link>
  );
}

export default Logo;
