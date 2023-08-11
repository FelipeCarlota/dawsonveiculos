import Logo from "./Logo/Logo";
import Navbar from "./Menu/Navbar/Navbar";
import { Subtitle, Title } from "./Text";
import CarroBanner from '../img/img-header.png';

export default function Header() {
  return (
    <header
      className="
        h-[68vh] sm:h-[70vh] md:h-[73vh] lg:h-[83vh] xl:h-[83vh]
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
            p-10 md:p-15 lg:pt-[4.5rem] lg:pb-[2.5rem] xl:p-10
            lg:mt-[4rem] 
            xl:mt-[6rem] 
            gap-2 md:gap-6
          "
        >
          <Title 
            text="Bem vindos" 
            className="
              text-white sm:text-red-500 md:text-blue-500 lg:text-orange-400 xl:text-green-400
              font-maximize
              text-center
              text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 
            "
          />
          <Subtitle 
            text="A sua melhor concessionária de carros"
            className="
              text-[1rem] md:text-[1rem] lg:text-[1.3rem]
              text-[#ff9000]
              font-semibold 
              tracking-wider lg:tracking-widest
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
              h-[16rem] sm:h-[19rem] md:h-[22rem] lg:h-[28rem]
              w-auto
            "
          />
        </div>
      </div>
    </header>
  )
}
