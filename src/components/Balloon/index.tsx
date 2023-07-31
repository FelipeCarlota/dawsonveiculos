import Balloon from '../../img/balao-depoimentos.png'

export interface BalloonTestimonyProps {
  photo?: string;
  name: string;
  occupation: string;
  testimony: string;
  transform?: boolean;
}

export default function BalloonTestimony({
  photo,
  name,
  occupation,
  testimony,
  transform
} : BalloonTestimonyProps) {
  return (
    <div>
      <div className="relative w-full md:w-[40vw] lg:w-[40vw]">
        <img src={Balloon} alt="Balão de fala para depoimentos sobre os nossos produtos" className={`${transform && "scale-x-[-1]"}`}/>
        <div className="absolute left-0 top-4 px-6 md:top-8 lg:top-8 md:px-8 lg:px-8">
          <p className="text-white w-full mb-2 md:mb-4 lg:mb-4 text-[1rem] md:text-[1.250rem] lg:text-[1.250rem]">{testimony}</p>
        </div>
        <div className=" absolute bottom-10 md:bottom-14 lg:bottom-14 flex flex-row gap-6 items-center px-6 md:px-8 lg:px-8">
          <div className="h-[3rem] w-[3rem] md:h-[4.4rem] md:w-[4.4rem] lg:h-[4.4rem] lg:w-[4.4rem]">
            <img src={photo} alt="Avatar do perfil do cliente" className="object-cover rounded-[50%] h-full w-full"/>
          </div>
          <div className="flex flex-col leading-[1.8rem] text-white">
            <h2 className="text-[1.2rem] md:text-[1.6rem] lg:text-[1.6rem] text-[#EEB50A] font-semibold uppercase">{name}</h2>
            <p className="text-[1rem] md:text-[1.225rem] lg:text-[1.225rem] font-semibold uppercase">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
