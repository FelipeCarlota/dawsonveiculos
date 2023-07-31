import { Button } from "@mui/material";
import IconPlayStore from '../../assets/img/google_play_icon.png'
import IconAppStore from '../../assets/img/icon_apple_branco.png'

interface BtnAppProps {
  android?: boolean;
}

export default function BtnApp({ android } : BtnAppProps) {

  return android 
  ? (
    <Button className="!bg-[#222] !text-white !rounded-[4rem] cursor-pointer !border-solid !border-[0.1rem] !border-white">
      <div className="flex flex-row gap-3 px-3 py-1">
        <img src={IconPlayStore} alt="Play Store Icon" />
        <div className="flex flex-col leading-[1rem]">
          <span className="uppercase self-start text-[0.6rem]">Android app on</span>
          <span className="">Google play</span>
        </div>
      </div>

    </Button>
  ) :  (
    <Button className="!bg-[#222] !text-white !rounded-[4rem] cursor-pointer !border-solid !border-[0.1rem] !border-white">
      <div className="flex flex-row gap-3 px-3 py-1">
        <img src={IconAppStore} alt="Apple Store Icon" />
        <div className="flex flex-col leading-[1rem]">
          <span className="uppercase self-start text-[0.6rem]">Download app on</span>
          <span className="">Google play</span>
        </div>
      </div>

    </Button>
  )
}
