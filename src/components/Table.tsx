import { Allstate } from "./Context"


export default function Table() {
 const {numbertickets, name, email, request, selectedTicket} = Allstate()

  return (
    <div className="border border-[#24A0B5] px-1 rounded-[.5rem] overflow-hidden">
    <div className="grid grid-cols-2  " >
     
        <div className="border border-[#0E464F] border-l-0 border-r-0 border-t-0">
          <label className="text-[.7rem] ">Enter Your Name</label>
          <input className=" w-22" type="text" value= {name}  readOnly/>
          </div>
           
          <div className="border border-[#0E464F] border-r-0 border-t-0">
          <label className="text-[.7rem]">Ticket Type:</label>
          <input className=" w-22 px-4" type="text" value={selectedTicket} readOnly/>
          </div>
        

          <div className="border border-[#0E464F]  border-l-0 border-t-0 ">
                   <label className="text-[.7rem]">Enter Your Email</label>
                   <input className=" w-22 text-[.6rem]  font-semibold" type="text" value= {email} readOnly/>
                   </div>
         
                   <div className="border border-[#0E464F] border-r-0 border-l-0 border-t-0 ">
                   <label className="text-[.6rem]">Ticket For:</label>
                   <input className=" w-22 px-4" type="text" value={numbertickets} readOnly/>
                   </div>
                   

                  </div>
                  <div className="w-22 ">
                  <label className="text-[.6rem]">Special Request?</label>
                  <input className=" " type="text"value={request} readOnly  />
                  </div>
                  </div>
  )
}
