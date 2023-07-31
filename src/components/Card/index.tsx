import { Card } from '@mui/material'
import { Paragraph, Title } from '../Text';
import ButtonCustom from '../Button';
import Onix from '../../assets/img/onix.png'

export interface VeiculoCardProps {
  imgSrc: string;
  vehicleName: string;
  vehicleInfo: string;
  vehiclePrice: string;
  vehicleLink: string;
  bgColor?: string;
  bgColorButton?: string;
  color?: string
  textColorButton?: string
}

export default function VeiculoCard({
  vehicleName,
  vehicleInfo,
  vehiclePrice,
  vehicleLink,
  bgColor,
  bgColorButton,
  color,
  textColorButton,
} : VeiculoCardProps) {
  return (
    <div id="card-vehicle" className='w-full md:w-[40vw] lg:w-[40vw] mx-auto justify-center items-center align-middle text-center'>
      <img src={Onix} alt={vehicleInfo} className='w-[16rem] lg:w-[80%] z-50 mx-auto'/>
      <Card className={`flex flex-col gap-4 justify-center items-center mt-[-4.8rem] pt-[4.8rem] w-full h-[50vh] pb-2 px-4 ${bgColor}`}>
        <Title text={vehicleName} className='font-black text-[1.4rem] text-white'/>
        <div>
          <Paragraph text={vehicleInfo} className='text-white pt-2'/>
        </div>
        <Title text={`${vehiclePrice},00R$`} className={`font-black text-[2rem] text-orange py-4 ${color}`} />
        <ButtonCustom text='saiba mais' link={vehicleLink} styling={`${bgColorButton} ${textColorButton}`}/>
      </Card>
    </div>
  )
}
