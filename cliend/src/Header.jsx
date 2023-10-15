import { PiPaperPlaneDuotone } from "react-icons/pi";
import { BiSearch, BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
       <header className="flex justify-between">
      <a href="/" className="flex items-center gap-1">
        <PiPaperPlaneDuotone className="w-8 h-6" />
        <span className="font-bold text-xl">airbnb</span>
      </a>
      <div className="flex gap-2 items-center border border-gray-300 rounded-full px-5 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className=" border-l border-gray-300 font-bolbsd"></div>
        <di>Any week</di>
        <div className=" border-l border-gray-300"></div>
        <div>Add guests</div>
             <button className="bg-primary text-white p-3 rounded-full">
               <BiSearch className="text-lg" />
              </button>
      </div>

      <Link to={'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-3 px-5 overflow-hidden">
        <GiHamburgerMenu className="text-xl" />
           <div className="bg-gray-500 text-white rounded-full p-1">
              <BiUser className=" text-xl w-5 h-5 relative top-0.5" />
         </div>
      </Link>
    </header>
    </>
  )
}
