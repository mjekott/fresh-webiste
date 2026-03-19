import Image from "next/image";
import { iconEgg, iconFruit } from "./index";

const BrandIcons = {
  logo: () => (
    <div className="relative w-32 h-10">
      <Image
        src="/images/logos/logo.png"
        fill
        priority
        sizes="32vw"
        alt="mobile logo"
        className="object-contain"
      />
    </div>
  ),
  IconFruit: () => (
    <Image
      src={iconFruit}
      alt="fruit icon"
      className="w-full h-auto object-contain"
      placeholder="blur"
      loading="lazy"
    />
  ),
  IconEgg: () => (
    <Image
      src={iconEgg}
      alt="egg icon"
      className="w-full h-auto object-contain"
      placeholder="blur"
      loading="lazy"
    />
  ),
};

export default BrandIcons;
