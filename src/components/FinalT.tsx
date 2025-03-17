

import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import ProgressBar from "./ProgressBar";
import Search from "./Search";
import Svg from "./Svg";
import Table from "./Table";
import { Allstate } from "./Context";


export default function FinalT() {
  const {image} = Allstate()

const navigate = useNavigate()

       function handleTicket () {
        navigate('/')
       }

      

  return (
    <div className="bg-[#02191D] text-white h-auto min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10">
        <Search />
      </div>
      <div className="relative h-auto  ">

        <div className="relative top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#041E23] border
        border-[#0E464F] border-solid w-[90%] md:w-2xl mt-65 md:mt-50 h-[42rem] md:h-[43.5rem] rounded-3xl">
          <div className="text-center">
            <ProgressBar title="Ready" step="Step" number1={3} number2={3}
              width="border-4 border-t-0 border-l-0 border-r-0 border-[#24A0B5] w-[100%] relative top-1 " />
            <div className="py-4">
              <h1 className="text-2xl">Your Ticket is Booked</h1>
              <p>Check your email for a copy or you can download</p>
            </div>
          </div>
          <div className="flex justify-center  relative ">
            <Svg />
            <div className=" border absolute h-[20rem] w-[13rem] my-6 rounded-2xl border-[#24A0B5]" >
              <h1 className="text-center relative  top-5 text-[1.5rem] -mt-3 font-[Road_Rage]">Techember Fest ”25</h1>
              <p className="text-center relative  top-5 text-[.7rem]">📍 04 Rumens road, Ikoyi, Lagos </p>
              <p className="text-center relative  top-5 text-[.7rem]">📅 March 15, 2025 | 7:00 PM </p>
              <div className="relative top-6 mx-10 h-20 border-[.3rem] rounded-[.8rem]  border-[#24A0B5]">
                <img className="h-18 w-42" src={image} alt="image" />
              </div>

              <div className="relative top-6 ">
                <div className="py-2 px-2">
                  <Table />

                </div>
                <div className="relative top-7 md:top-7">
            <img src="/barcode.png" />
          </div>

              </div>

            </div>

          </div>

          <div className="flex justify-center gap-4 py-2 md:py-9">
            <Buttons handleClick={handleTicket} text="Book Another Ticket"  style="border border-[#24A0B5] px-5 md:px-15 py-1 text-xs md:text-sm lg:text-lg rounded-[.5rem]" />
              <Buttons handleClick={handleTicket} text="Download Ticket" style = "border border-[#24A0B5] px-5 md:px-15 py-1 text-xs md:text-sm  lg:text-lg  bg-[#24A0B5] rounded-[.5rem]" />
          </div>
        </div>

      </div>

    </div>
  )
}

