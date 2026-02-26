import Image from "next/image";

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
};

export default BrandIcons;
