import VeiculoCard, { VeiculoCardProps } from "./Card";
import { vehicle } from "./Card/vehicle";
import { TitleSection } from "./Text";

export default function Emphasis() {
  return (
    <div className="p-16 pb-16 bg-white">
      <TitleSection 
        text="carros em"
        emphasis="destaque"
      />

      <div className="flex lg:flex-row md:flex-row flex-col gap-10 mt-16 w-full justify-center">
        {
          vehicle?.map((item : VeiculoCardProps, index: number) => <VeiculoCard 
              vehicleName={item.vehicleName}
              vehicleInfo={item.vehicleInfo}
              vehicleLink={item.vehicleLink}
              vehiclePrice={item.vehiclePrice}
              imgSrc={item.imgSrc}
              bgColor={index % 2 === 0 ? "!bg-secondary" : "!bg-orange"}
              color={index % 2 === 0 ? "!text-primary" : "!text-secondary"}
              bgColorButton={index % 2 === 0 ? "!bg-orange" : "!bg-secondary"}
              textColorButton={index % 2 === 0 ? "!text-secondary" : "!text-primary"}
            />
          )
        }
      </div>
    </div>
  )
}
