
import { VscArrowSmallRight } from "react-icons/vsc";

export default function Search() {
  return (
    <div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border w-4/5 md:w-2/3 mt-10 h-12 rounded-2xl border-solid border-[#197686] flex justify-between px-4 items-center">
                    <div>
                        <img src="/logo.png" alt="Logo" className="h-8" />
                    </div>
                    <div className="flex justify-between gap-7 text-sm">
                        <p className="hidden md:block ">Events</p>
                        <p className=" hidden md:block">My Tickets</p>
                        <p className="hidden md:block">About Projects</p>
                    </div>
                    <div className="flex text-black bg-white p-1.5 rounded-xl">
                        My Tickets
                        <VscArrowSmallRight className="relative top-1" />
                    </div>
                </div>
    </div>
  )
}
