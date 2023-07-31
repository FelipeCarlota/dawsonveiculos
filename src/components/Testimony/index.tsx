import BalloonTestimony, { BalloonTestimonyProps } from "../Balloon";
import { TitleSection } from "../Text";
import { testimonies } from "./testimonies";

export default function Testimony() {
  return (
    <div className="bg-[url('../../public/background-depoimentos.jpg')] py-10 px-4 md:p-20 lg:p-20">
      <div className="md:container lg:container mx-auto">
        <div className="mb-10">
          <TitleSection 
            text="Depoimentos"
            emphasis="de nossos clientes!"
            emphasisColor="text-white"
            className="leading-[2rem]"
          />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center pt-2 md:pt-14 lg:pt-14 gap-3 xl:gap-12">
          {
            testimonies?.map((item : BalloonTestimonyProps, index: number) => 
              <BalloonTestimony
                photo={item.photo} 
                name={item.name} 
                occupation={item.occupation}
                testimony={item.testimony}
                transform={index % 2 !== 0}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
