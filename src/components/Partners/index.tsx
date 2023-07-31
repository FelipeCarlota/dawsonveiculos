import Bv from '../../img/parceiro-1.jpg.png'
import { TitleSection } from '../Text';
import { partiners } from './partners';

export interface PartnersProps {
  id?: string;
  srcPartner?: string;
}

export default function Partners({

} : PartnersProps) {
  return (
    <div className="bg-white p-16">
      <TitleSection text="Alguns de nossos parceiros" className='pb-4'/>
      <div className="container mx-auto flex flex-row flex-wrap justify-center gap-10">
        {
          partiners?.map((item: PartnersProps) => 
            <img 
              src={Bv}
              alt="Imagem da logo do parceiro" 
              key={item.id}
              className="w-[20vw] md:w-[16vw] lg:w-[8vw]"
            />
          )
        }
      </div>
    </div>
  )
}
