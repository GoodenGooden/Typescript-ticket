
interface BorderProps {
    
    children: React.ReactNode;
}


const Border: React.FC<BorderProps> = ({ children}) => {
  return (
    
    <div >
                    <div className="absolute  top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#041E23] border
                                         border-[#0E464F] border-solid w-[90%] md:w-2xl h-[38rem] rounded-3xl">

                    {children}
              </div>
              </div>      
  )
}

export default Border
/*
absolute  top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#041E23] border
                     border-[#0E464F] border-solid w-[90%] md:w-2xl h-[85%] rounded-3xl  */