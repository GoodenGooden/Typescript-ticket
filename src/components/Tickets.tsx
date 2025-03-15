
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import ProgressBar from "./ProgressBar";
import Search from "./Search";
import { Allstate } from "./Context";

export default function Tickets() {
    const { selectedTicket, setSelectedTicket, numbertickets, setNumbertickets } = Allstate();

     const navigate = useNavigate();

     function handleNumberChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setNumbertickets(e.target.value); 
      }

    function handleUser() {
        navigate('/User');
    }

    function handleTicket() {
        navigate('/Tickets');
    }

    // Handle ticket type selection
    function handleTicketSelection(type: string) {
        setSelectedTicket(type); // Update the selected ticket type
    }

    return (
        <div className="h-svh bg-[#02191D] text-white">
            <div className="relative">
                <Search />
            </div>

            <div className="relative">
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#041E23] border
                 border-[#0E464F] border-solid w-[90%] md:w-2xl mt-60 h-[38rem] rounded-3xl">
                    <ProgressBar title="Ticket Selection" step="Step" number1={1} number2={2}
                        width="border-4 border-t-0 border-l-0 border-r-0 border-[#24A0B5] w-[40%] relative top-1" />

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-68 w-[90%] md:w-[37rem] h-[32rem] border border-[#0E464F] rounded-3xl">
                            <div className="m-8 mt-4 h-36 rounded-3xl border-[#0E464F] border-solid border">
                                <h1 className="text-center relative top-5 text-2xl font-[Road_Rage]"> Techember Fest "25</h1>
                                <p className="relative top-5 left-3 md:left-36 text-[.7rem] md:text-[.9rem]">Join us for an unforgettable experience at</p>
                                <p className="relative top-5 left-8 md:left-40 text-[.7rem] md:text-[.9rem]">[Event Name]! Secure your spot now.</p>
                                <p className="relative top-5 left-1 md:left-34 lg:left-33 text-[.7rem] md:text-[.9rem]">📍 [Event Location] March 15, 2025 | 7:00 PM</p>
                            </div>
                            <div className="border border-solid border-[#0E464F] mx-9"></div>
                            <p className="mx-9 my-4 font-thin">Select Ticket Type:</p>
                            <div className="border border-[#0E464F] rounded-3xl h-24 mx-9 flex px-4 justify-between">
                                {/* Free Ticket Option */}
                                <div 
                                    className={`relative top-4 h-16 w-[30%] border border-solid border-[#197686] px-2 ${selectedTicket === "Free" ? "bg-[#12464E]" : "bg-transparent"}`}
                                    onClick={() => handleTicketSelection("Free")} // Update state when clicked
                                >
                                    <p className="text-[.7rem] md:text-[.9rem]">Free</p>
                                    <p className="text-[.7rem] md:text-[.8rem]">REGULAR ACCESS</p>
                                    <p className="text-[.4rem] md:text-[.9rem]">20/52</p>
                                </div>

                                {/* VIP Ticket Option */}
                                <div 
                                    className={`relative top-4 h-16 w-[30%] border border-solid border-[#197686] px-2 ${selectedTicket === "VIP" ? "bg-[#12464E]" : "bg-transparent"}`}
                                    onClick={() => handleTicketSelection("VIP")} // Update state when clicked
                                >
                                    <p className="text-[.7rem] md:text-[.9rem]">$150</p>
                                    <p className="text-[.7rem] md:text-[.8rem]">VIP ACCESS</p>
                                    <p className="text-[.4rem] md:text-[.9rem]">20/52</p>
                                </div>

                                {/* VVIP Ticket Option */}
                                <div 
                                    className={`relative top-4 h-16 w-[30%] border border-solid border-[#197686] px-2 ${selectedTicket === "VVIP" ? "bg-[#12464E]" : "bg-transparent"}`}
                                    onClick={() => handleTicketSelection("VVIP")} // Update state when clicked
                                >
                                    <p className="text-[.7rem] md:text-[.9rem]">$250</p>
                                    <p className="text-[.7rem] md:text-[.8rem]">VVIP ACCESS</p>
                                    <p className="text-[.4rem] md:text-[.9rem]">20/52</p>
                                </div>
                            </div>
                            <div className="mx-9 my-4 font-thin">Number of Tickets</div>
                            <div>
                                <select className="w-6/7 border-[#07373F] bg-[#07373F] outline-none py-1 mx-9 border" id="numberSelect" name="numbers" value={numbertickets}
                              onChange={handleNumberChange}>
                                    
                                    {[1, 2, 3, 4, 5].map((number) => (
                                     <option key={number} value={number}>
                                      {number}
                                    </option>
                                       ))}     

                                </select>
                            </div>

                            <div className="flex justify-center gap-4 my-4">
                                <Buttons handleClick={handleTicket} style="border border-[#24A0B5] px-10 md:px-25 py-1 text-xs md:text-sm lg:text-lg rounded-[.5rem]" text="Cancel" />
                                <Buttons handleClick={handleUser} style="border border-[#24A0B5] px-10 md:px-25 py-1 text-xs md:text-sm lg:text-lg bg-[#24A0B5] rounded-[.5rem]" text="Next" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

