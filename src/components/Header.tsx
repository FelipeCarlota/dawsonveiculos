import Logo from "./Logo/Logo";
import Navbar from "./Menu/Navbar/Navbar";
import { Subtitle, Title } from "./Text";
import CarroBanner from '../img/img-header.png';

export default function Header() {
  return (
    <header className="bg-city h-[80vh] pt-10 relative">
      <div className="container mx-auto">
        <div className="flex flex-row justify-center sm:justify-center lg:justify-between items-center flex-wrap w-full">
          <Logo center/>
          <Navbar />
        </div>
        <div className="flex flex-col justify-center text-center sm:leading-6 lg:leading-10 p-10 md:p-15 lg:p-20 lg:mt-[2rem] gap-6">
          <Title 
            text="Bem vindos" 
            className="text-white font-maximize text-[3rem] lg:text-[4rem] text-center"
          />
          <Subtitle 
            text="A sua melhor concessionária de carros"
            className="text-[1rem] lg:text-[1.3rem] text-[#ff9000] font-semibold tracking-wider lg:tracking-widest"
          />
        </div>

        <div className="w-full">
          <img 
            src={CarroBanner}
            alt="Imagem de um carro no banner do site" 
            className="sm:mt-[0.5rem] md:mt-[1.1rem] lg:mt-[-1.8rem] mx-auto w-full md:w-[90%] lg:w-[48%]"
          />
        </div>
      </div>
    </header>
  )
}
