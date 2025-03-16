

import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import ProgressBar from "./ProgressBar";
import Search from "./Search";
import { WiCloudDown } from "react-icons/wi";
import { Allstate } from "./Context";
import { useRef } from "react";




export default function User() {


    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const { name, setName, image, setImage, email, setEmail, request, setRequest, emailError, setEmailError, isTicketClicked, setIsTicketClicked } = Allstate();

    const validateEmail = (email: string): boolean => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };



    function handleFinalT() {
        setIsTicketClicked(true); // Set state to true when the button is clicked
        if (!name || !email || !request) {
            return; // Don't navigate if any field is empty
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return; // Stop navigation if email is invalid
        } else {
            setEmailError(""); // Clear the error message if the email is valid
        }
        // If everything is valid, navigate to the next page
        navigate('/FinalT')
    }

    function handleTicket() {
        navigate('/')
    }

    async function handleFileupload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "Gooden")
        data.append("cloud_name", "djkllb0te")

        const res = await fetch(" https://api.cloudinary.com/v1_1/djkllb0te/image/upload", {
            method: "POST",
            body: data
        })
        const image = await res.json()
        console.log(image)
        setImage(image.url)
    }

    return (
        <div className="bg-[#02191D] text-white h-svh">

            <div className="relative">
                <Search />
            </div>
            <div className=" relative h-full overflow-hidden">
            <div className=" absolute left-1/2 top-[25rem] transform -translate-x-1/2 -translate-y-1/2
              bg-[#041E23] border border-[#0E464F] border-solid h-[40rem]   w-[90%] md:w-2xl rounded-3xl">
       
                    <div className="-mt-4">
                        <ProgressBar title="Attendee Details" step="Step" number1={2} number2={3}
                            width="border-4 border-t-0 border-l-0 border-r-0 border-[#24A0B5] w-[70%] relative top-1" />
                    </div>
            </div>
            <div className="relative" >
                <div className="absolute left-1/2 top-[30rem]  transform -translate-x-1/2 -translate-y-1/2 w-[90%]
                 -mt-14 md:w-[36rem] h-[37rem] border border-[#0E464F] rounded-3xl ">
                    <div className="border mt-3 m-8 h-50 bg-[#07373F] border-[#07373F] rounded-3xl ">
                        <p className="text-xs md:text-sm lg:text-lg  p-3">Upload Profile Photo</p>
                        <div className="border my-8 mx-6 h-28 flex justify-center mt-1 bg-[#052228] border-[#052228]">

                            <div className="border bg-[#0E464F] border-[#07373F]  h-34 w-34 -mt-3 rounded-3xl content-center ">
                                {image && (
                                    <img className="border bg-[#0E464F] border-[#07373F]  h-34 w-34  rounded-3xl" src={image} alt="img" />
                                )}
                                {!image && (
                                    <div className="text-[2rem] ">


                                        <WiCloudDown className="relative left-13" onClick={() => fileInputRef.current?.click()} />


                                        <div className=" ">

                                            <p className=" text-xs ">Drag & drop or click to  </p>
                                            <input ref={fileInputRef} onChange={handleFileupload} className="bg-transparent hidden" type="file" ></input>
                                            <p className="flex justify-center text-xs">upload </p>

                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>

                    </div>

                    <div className="border border-solid border-[#0E464F] mx-9 my-4"></div>
                    <div className="flex flex-col">
                        <label className="relative left-10 py-2">Enter your name</label>
                        <input className="border border-[#07373F] mx-9 py-1 rounded-[.5rem] outline-0" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        {isTicketClicked && name === "" && <span className="required-message">This input is required</span>}

                    </div>

                    <div className="flex flex-col">
                        <label className="relative left-10 py-2">Enter your email*</label>
                        <input className="border border-[#07373F] mx-9 py-1 rounded-[.5rem] outline-0" type="text" placeholder="hello@avioflagos.io"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {isTicketClicked && email === "" && <span className="required-message">This input is required</span>}
                        {isTicketClicked && email && !validateEmail(email) && <span className="email-error text-red-500">{emailError}</span>}

                    </div>

                    <div className="flex flex-col">
                        <label className="relative left-10 py-2">Special request?</label>
                        <input className="border border-[#07373F] mx-9 h-14 py-1 rounded-[.5rem] outline-0" placeholder="Textarea" type="text" value={request} onChange={(e) => setRequest(e.target.value)} />
                    </div>
                    <div className="flex justify-center gap-4 my-2">
                        <Buttons handleClick={handleTicket} text="Back" style="border border-[#07373F] px-10 md:px-22 rounded-[.5rem] text-xs md:text-sm lg:text-lg py-1" />
                        <Buttons handleClick={handleFinalT} text="Get my free ticket " style=" border border-[#07373F] rounded-[.5rem] px-1 md:px-10 text-xs md:text-sm lg:text-lg py-1  bg-[#24A0B5] " />
                    </div>

                </div>
                </div>
            </div>
            
            </div >
            
            
    )

}


/*    */