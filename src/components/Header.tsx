import Logo from "./Logo/Logo";
import Navbar from "./Menu/Navbar/Navbar";
import { Subtitle, Title } from "./Text";
import CarroBanner from '../img/img-header.png';

export default function Header() {
  return (
    <header
      className="
        w-full
        max-sm:h-[90vh]
      "
    >
      <div className="container mx-auto">
        <div 
          className="
            w-full
            pt-10
            flex flex-row items-center flex-wrap
            justify-center
            max-sm:justify-center max-sm:gap-6
            lg:justify-between
          "
        >
          <Logo center/>
          <Navbar />
        </div>
        <div className="
            flex 
            flex-col
            max-sm:justify-center
            max-sm:text-center
            max-sm:mt-20
            max-sm:mb-10
          "
        >
          <Title 
            text="Bem vindos" 
            className="
              max-sm:text-red-500 max-md:text-blue-500 max-lg:text-orange-400 max-xl:text-green-400 max-2xl:text-yellow-400
              font-maximize
              max-sm:text-[3rem]
            "
          />
          <Subtitle 
            text="A sua melhor concessionária de carros"
            className="
              text-[#ff9000]
              font-semibold
            "
          />
        </div>

        <div
          className="
            relative
            max-sm:h-[20vh]
          "
        >
          <img 
            src={CarroBanner}
            alt="Imagem de um carro no banner do site" 
            className="
              absolute
              mx-auto 
              max-sm:mt-[2.5rem]
              w-auto
              max-sm:h-[30vh]
              left-[-50%]
              right-[-50%]
            "
          />
        </div>
      </div>
    </header>
  )
}
