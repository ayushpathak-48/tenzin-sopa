import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="py-5 px-[120px] flex items-center justify-between shadow-[0px_0px_8px_0px_#00000029] border-[1px] border-[#0000000A] sticky top-0 bg-white z-[999]">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt="Remax Advantage Plus"
          height={52}
          width={148}
          className="h-[52px] w-[148px]"
        />
      </Link>
      <div className="flex items-center gap-8">
        <Link href={"/contact"}>
          <Button>Contact US</Button>
        </Link>
      </div>
    </div>
  );
};
