import Image from "next/image";
import NoiseBackground from "../NoiseBackground";
import LoginForm from "./LoginForm";
import { img40, leafDark, leafLight, flower, onion } from "..";

const AuthForm = () => {
  return (
    <NoiseBackground variant="lines" color="#E7EFEB">
      <div className="relative min-h-screen w-full flex items-center justify-center">
        <LoginForm />

        <div className="absolute bottom-0 left-0 -z-10 w-1/3 max-w-xs sm:max-w-sm h-auto">
          <Image
            src={img40}
            alt="sign in"
            className="w-full h-auto object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute top-32 left-55 -z-10 w-1/3 max-w-24 sm:max-w-40 h-auto">
          <Image
            src={leafLight}
            alt="leaf light"
            className="w-full h-auto object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute top-80 right-40 -z-10 w-1/3 max-w-24 sm:max-w-40 h-auto">
          <Image
            src={leafDark}
            alt="leaf dark"
            className="w-full h-auto object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-20 md:right-80 -z-10 w-1/3 max-w-16 sm:max-w-24 h-auto">
          <Image
            src={onion}
            alt="onion"
            className="w-full h-auto object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="absolute top-6 md:top-24 right-5 md:right-24 -z-10 w-1/3 max-w-20 sm:max-w-28 h-auto">
          <Image
            src={flower}
            alt="flower"
            className="w-full h-auto object-contain"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </NoiseBackground>
  );
};

export default AuthForm;
