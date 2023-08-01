import { navbarMenu } from "./MenuOption";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-row gap-2 flex-wrap justify-center sm:text-black">
        {
          navbarMenu.map((item) => 
            <li 
              key={item.id} 
              className={`text-white uppercase px-2 py-1 font-semibold ${item?.id === 1 && "bg-orange rounded-full" }`}
            >
              {item.text}
            </li>
          )
        }
      </ul>
    </nav>
  )
}
