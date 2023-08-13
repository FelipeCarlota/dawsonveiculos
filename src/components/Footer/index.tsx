import Fb from '../../img/fb-icon-footer.png'
import Ig from '../../img/ig-icon-footer.png'
import Gp from '../../img/gplus-icon-footer.png'
import Tt from '../../img/tt-icon-footer.png'
import Android from '../../img/android-icon-footer.png'
import Ios from '../../img/icon_apple_branco.png'
import Location from '../../img/localizacao-icon-footer.png'
import Phone from '../../img/cel-icon-footer.png'
import Email from '../../img/email-icon-footer.png'
import Site from '../../img/site.png'
import SaSilva from '../../img/sasilva-logo.png'


export default function Footer() {
  return (
    <div className="bg-black py-14">
      <div className="container mx-auto">
        <div className="flex flex-col px-4 md:flex-row lg:flex-row flex-wrap justify-center text-white gap-20">
          <div className="w-full md:w-[22vw] lg:w-[22vw]">
            <h2 className="font-bold text-[1.4rem] uppercase after:block after:content-[''] after:bg-[#EEB50A] after:p-1 after:my-6">Sobre</h2>
            <p>Em breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descrição</p>
            <div className='pt-3 flex flex-row gap-6'>
              <img src={Fb} alt="Icone do facebook"/>
              <img src={Gp} alt="Icone do Goole Plus"/>
              <img src={Tt} alt="Icone do Twitter"/>
              <img src={Ig} alt="Icone do Instagram"/>
            </div>
          </div>
          <div className="w-full md:w-[22vw] lg:w-[22vw]">
            <h2 className="font-bold text-[1.4rem] uppercase after:block after:content-[''] after:bg-[#EEB50A] after:p-1 after:my-6">Download App</h2>
            <p>Em breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descriçãoEm breve uma descrição</p>
            <div className="flex flex-col gap-3 w-[34vw] md:w-[12vw] lg:w-[12vw] pt-2">
              <div id='Android' className='flex flex-row justify-between items-center'>
                <h3 className="text-[1.2rem] text-[#EEB50A]">Android Users</h3>
                <img src={Android} alt="Icone dos usuários de android"/>
              </div>
              <div id='Apple' className='flex flex-row justify-between items-center'>
                <h3 className="text-[1.2rem] text-[#EEB50A]">IOS Users</h3>
                <img src={Ios} alt="Icone dos usuários de ios"/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[22vw] lg:w-[22vw]">
            <h2 className="font-bold text-[1.4rem] uppercase after:block after:content-[''] after:bg-[#EEB50A] after:p-1 after:my-6">Contato</h2>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row gap-3 items-center'>
                <img src={Location} alt='Icone da localização do contato'/>
                <p>Rua B, 435 - Chácara Harmonia II - Itu/SP</p>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <img src={Phone} alt='Icone do telefone do contato'/>
                <p>(11) 3762-7040</p>
              </div>
              <div className='flex flex-row flex-wrap gap-3 items-center'>
                <img src={Email} alt='Icone do email do contato'/>
                <p>contato@dawsonveiculos.com.br</p>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <img src={Site} alt='Icone do site do contato'/>
                <p>www.dawsonveiculos.com.br</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col pt-10 gap-2'>
          <div className='flex justify-center'>
            <img src={SaSilva} alt='logo Sasilva agencia digital'/>
          </div>
          <h5 className='text-white text-center font-semibold'>Desenvolvido por Felipe Carlota - 
            <a href='https://www.fcarlota.com.br' target='_blank' className='text-white ml-1 hover:text-[#EEB50A]'>www.fcarlota.com.br</a></h5>

        </div>
      </div>
    </div>
  )
}
