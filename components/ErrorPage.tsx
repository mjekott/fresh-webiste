import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import NoiseBackground from "./NoiseBackground";
import { Button } from "./ui/button";

interface ErrorPageProps {
  image: string | StaticImageData;
  alt?: string;
  value: string;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  image,
  alt = "Error image",
  value,
  reset,
}) => {
  return (
    <NoiseBackground color="#FAF8F4">
      <Container>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <Image
            src={image}
            alt={alt}
            width={533.27}
            height={394.28}
            placeholder="blur"
            className="object-contain"
          />
          <Button
            onClick={reset}
            className="w-full max-w-[349px] h-[52px] rounded-2xl"
          >
            {value}
          </Button>
        </div>
      </Container>
    </NoiseBackground>
  );
};

export default ErrorPage;
