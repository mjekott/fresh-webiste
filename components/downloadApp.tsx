import { apple, google } from "@/components/index";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="flex w-full flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4 md:mt-6">
      <Button className="w-full sm:w-auto max-w-[170px] hover:bg-white h-auto sm:h-[50px] bg-white border border-gray-200 text-tertiary-D-900 rounded-2xl px-4 py-2 flex items-center gap-2 justify-center sm:justify-start text-xs sm:text-sm">
        <Image
          src={apple}
          alt="App Store icon"
          width={22}
          height={24}
          className="w-5 h-6"
        />
        <div className="text-left leading-tight">
          Download on the <br />
          <span className="font-bold">App Store</span>
        </div>
      </Button>

      <Button className="w-full sm:w-auto max-w-[170px] h-auto sm:h-[50px] bg-tertiary-D-900 text-white rounded-2xl px-4 py-2 flex items-center gap-2 justify-center sm:justify-start text-xs sm:text-sm">
        <Image
          src={google}
          alt="Google Play icon"
          width={22}
          height={24}
          className="w-5 h-6"
        />
        <div className="text-left leading-tight">
          Get it on <br />
          <span className="font-bold">Google Play</span>
        </div>
      </Button>
    </div>
  );
};

export default DownloadApp;
