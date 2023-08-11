import Logo from "./Logo/Logo";
import Navbar from "./Menu/Navbar/Navbar";
import { Subtitle, Title } from "./Text";
import CarroBanner from '../img/img-header.png';

export default function Header() {
  return (
    <header
      className="
        w-full
        max-sm:h-[70vh] max-md:h-[73vh] max-lg:h-[83vh] max-xl:h-[85vh] max-2xl:h-[86vh] h-[86vh] 
        pt-10 
      "
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-center sm:justify-center lg:justify-between items-center flex-wrap w-full">
          <Logo center/>
          <Navbar />
        </div>
        <div className="
            flex 
            flex-col
            justify-center 
            text-center 
            sm:leading-6 lg:leading-10 
            p-10 md:p-15  xl:p-10
            lg:mt-[2rem] 
            max-xl:mt-[3rem] 
            gap-2 md:gap-6
          "
        >
          <Title 
            text="Bem vindos" 
            className="
              max-sm:text-red-500 max-md:text-blue-500 max-lg:text-orange-400 max-xl:text-green-400 max-2xl:text-yellow-400
              font-maximize
              text-center
              text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 
              whitespace-nowrap
            "
          />
          <Subtitle 
            text="A sua melhor concessionária de carros"
            className="
              max-sm:text-[1rem] md:text-[1rem] lg:text-[1.3rem]
              text-[#ff9000]
              font-semibold 
              tracking-wider lg:tracking-widest
              whitespace-nowrap
            "
          />
        </div>

        <div 
          className="
            w-full
          "
        >
          <img 
            src={CarroBanner}
            alt="Imagem de um carro no banner do site" 
            className="
              mx-auto 
              h-[16rem] max-sm:h-[14rem] md:h-[22rem] lg:h-[28rem]
              w-auto
            "
          />
        </div>
      </div>
    </header>
  )
}
