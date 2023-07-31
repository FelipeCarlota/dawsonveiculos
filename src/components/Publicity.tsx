import { Paragraph, Title } from "./Text";
import Onix from '../img/onix.png'
import ButtonCustom from "./Button";

export default function Publicity() {
  return (
    <div className="md:container mx-auto pt-24 pb-10 px-4 md:px-0 lg:px-0">
      <div className="">
        <Title
          text="já pensou em ter um carro por assinatura?"
          className="lg:text-[3.8rem] text-[1.8rem] font-bold leading-[1.675rem] lg:leading-[3.2rem] w-[23.5rem] lg:w-[49rem]"
        />
      </div>

      <div className="flex flex-col">
        <Paragraph 
          text="Você escolhe o modelo ideal e fica livre de preocupações com seguro, imposto e manutenção"
          className="w-[20rem] lg:w-[38rem] md:!text-[1.2rem] lg:!text-[2.2rem] md:!leading-[1.1rem] lg:!leading-[1.8rem] pt-10 lg:pt-20 font-semibold"
        />

        <div className="mt-10 lg:mt-20">
          <ButtonCustom text="saiba mais" styling="!text-white !bg-secondary"/>
        </div>

        <img src={Onix} alt="Imagem de um onix" className="w-[65%] self-end mt-[-4rem] sm:mt-[-8rem] md:mt-[-10rem] lg:mt-[-15rem]"/>
      </div>
    </div>
  )
}
