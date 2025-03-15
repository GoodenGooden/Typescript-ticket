

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context data (state and setState functions)
interface AlldataContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  request: string;
  setRequest: React.Dispatch<React.SetStateAction<string>>;
  numbertickets: string;
  setNumbertickets: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  ticketType: string;
  setTicketType: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedTicket: string;
  setSelectedTicket: React.Dispatch<React.SetStateAction<string>>;
  isTicketClicked: boolean;
  setIsTicketClicked: React.Dispatch<React.SetStateAction<boolean>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of `undefined` (to handle cases when the context is used outside of a provider)
const Alldata = createContext<AlldataContextType | undefined>(undefined);

// The Context component now has typed children as ReactNode
interface ContextProps {
  children: ReactNode;
}

function Context({ children }: ContextProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [request, setRequest] = useState<string>('');
  const [numbertickets, setNumbertickets] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [ticketType, setTicketType] = useState<string>('Regular');
  const [step, setStep] = useState<number>(1);
  const [selectedTicket, setSelectedTicket] = useState<string>(ticketType);
  const [isTicketClicked, setIsTicketClicked] = useState(false);
   const [emailError, setEmailError] = useState("");
  return (
    <Alldata.Provider value={{
      name, setName,
      email, setEmail,
      request, setRequest,
      numbertickets, setNumbertickets,
      image, setImage,
      ticketType, setTicketType,
      step, setStep,
      selectedTicket, setSelectedTicket,
      isTicketClicked, setIsTicketClicked,
      emailError, setEmailError,
    }}>
      {children}
    </Alldata.Provider>
  );
}

// A custom hook to access the context values. It's important to check for `undefined` to prevent errors if used outside of a provider.
export function Allstate() {
  const context = useContext(Alldata);
  
  if (!context) {
    throw new Error('Allstate must be used within a Context Provider');
  }

  return context;
}

export default Context;






/*

import { createContext, useContext, useState } from "react";
const Alldata = createContext ();

function Context({children}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState ('');
    const [request, setRequest] = useState ('');
    const [numbertickets, setNumbertickets] = useState('');
    const [image, setImage] = useState("");
    const [ticketType, setTicketType] = useState("Regular");
    const [step, setStep] = useState(1);


    return (
        <Alldata.Provider value={{name, step, setStep, setName, email, setEmail,  request, setRequest, image, setImage, numbertickets,
        ticketType, setTicketType, setNumbertickets}}> 
       
       {children}
       </Alldata.Provider>
    )
}


export function Allstate () {
    return useContext(Alldata)
}

export default Context

*/





