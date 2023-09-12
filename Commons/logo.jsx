import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center ml-20 sm:ml-20">
        <Image
          src={logo}
          alt="Leap Rewards Logo"
          width={100}
          height={50}
          layout="intrinsic"
        />
        
      </div>
    </Link>
  );
}

export default Logo;
