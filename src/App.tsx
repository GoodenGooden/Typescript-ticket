import Tickets from "./components/Tickets";
import User from "./components/User";

import FinalT from "./components/FinalT";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default  function App () {
  return (
    <div > 
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tickets />} />
      <Route path="User" element={<User />} />
      <Route path="FinalT" element={<FinalT />} />
    </Routes>
  </BrowserRouter>
   
    </div>
  )
}


