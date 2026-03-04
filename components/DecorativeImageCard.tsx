import Image, { StaticImageData } from "next/image";

interface DecorativeImageCardProps {
  src: string | StaticImageData;
  alt?: string;
  vectorSrc?: string | StaticImageData;
}

const DecorativeImageCard: React.FC<DecorativeImageCardProps> = ({
  src,
  alt = "decorative image",
  vectorSrc,
}) => {
  return (
    <figure
      data-aos="zoom-in-right"
      className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[346px] aspect-[346/388]"
    >
      <div className="absolute -left-[12.9%] top-[9%] w-[108%] h-full bg-[#E7EFEB] rounded-full" />
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        className="object-cover z-10 rounded-full"
      />
      {vectorSrc && (
        <Image
          src={vectorSrc}
          alt={alt}
          width={175.54}
          height={132}
          placeholder="blur"
          className="absolute w-auto h-auto md:h-[132px] md:w-[175px] -left-[12.9%] -top-[9%] z-10"
        />
      )}
    </figure>
  );
};

export default DecorativeImageCard;
