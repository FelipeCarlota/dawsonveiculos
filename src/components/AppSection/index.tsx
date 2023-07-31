import { Paragraph, TitleSection } from "../Text";
import ImgApp from '../../img/app-img-breve.png'
import BtnApp from "../Button/BtnApp";

export default function AppSection() {
  return (
    <div className="bg-appSection bg-center bg-cover pt-20">
      <TitleSection text="Em breve" emphasis="Na playstore e appstore" emphasisColor="!text-white" className="text-primary leading-8"/>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col p-4 pb-0 pt-16 container mx-auto gap-10">
        <div>
          <Paragraph 
            text="Agora, encontrar o veículo perfeito é mais fácil do que nunca! Nosso aplicativo é o ponto de encontro entre os apaixonados por carros e uma ampla variedade de opções de todas as marcas, modelos e estilos. Com um simples toque na tela do seu smartphone, você terá acesso a uma extensa coleção de carros novos e usados, disponíveis para compra imediata. Encontre o carro dos seus sonhos sem sair de casa!"
            className="text-white md:p-0 lg:p-0 lg:w-[40vw] md:w-[40vw] text-[1.2rem] lg:text-[1.6rem] md:text-[1.6rem] leading-[1.6rem] md:leading-[2rem] lg:leading-[2rem]"
          />
          <div className="flex flex-row justify-center items-center lg:justify-normal md:justify-normal gap-6 mt-10">
            <BtnApp android/>
            <BtnApp />
          </div>
        </div>
        <div>
          <img src={ImgApp} alt="Imagem de uma mão segurando um celular com o aplicativo aberto" className="h-[35rem]"/>
        </div>

      </div>
    </div>
  )
}
