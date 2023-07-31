import logo from '../../assets/img/dawson-logo.png'

interface LogoProps {
  center?: boolean
}

export default function Logo({ 
  center,
} : LogoProps) {
  return (
    <img 
      src={logo} 
      alt="Dawson Logo" 
      className={
        `w-[15rem]
        sm:w-[18rem] 
        md:w-[20rem] 
        lg:w-[10rem] 
        ${center && "justify-center align-middle"}
      `}
    />
  )
}
