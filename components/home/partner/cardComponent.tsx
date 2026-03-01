import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type Props = {
  bgImg: string | StaticImageData;
  title: string;
  description: string;
  btnValue: string;
  desctextColor: string;
  onclick: (value: string) => void;
};

const CardComponent = ({
  bgImg,
  title,
  description,
  btnValue,
  onclick,
  desctextColor,
}: Props) => {
  return (
    <Card className="relative w-full lg:pt-[70px] lg:px-[55px] h-[192px] max-w-[581px] md:h-[306px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt={title}
        fill
        placeholder="blur"
        className="object-cover"
      />

      <CardHeader className="z-30 px-6 pt-6">
        <CardTitle className="font-bold md:text-2xl text-tertiary-D-900">
          {title}
        </CardTitle>
        <CardDescription
          style={{
            color: desctextColor,
          }}
          className="font-semibold max-w-[325px] md:text-[18px]"
        >
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="z-30 px-6 text-left">
        <Button
          variant="link"
          size="sm"
          className="font-bold text-primary-500 md:text-[18px] p-0"
          onClick={() => onclick(btnValue)}
        >
          {btnValue}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
