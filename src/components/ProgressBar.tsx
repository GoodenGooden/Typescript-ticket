
interface ProgressProps {
    title: string;
    step: string;
    number1: number;
    number2: number;
    width?: string;
}


export default function ProgressBar({title, step, number1, number2, width}: ProgressProps) {
  return (
  <div>
                    <div className="flex justify-between p-6 -mt-2">
                        <p className="text-xl">{title}</p>
                        <div className="flex">
                            <p>{step}</p>
                            <p>{number1}</p>
                            <p>/</p>
                            <p> {number2}</p>
                        </div>
                    </div>
                     <div className="border-4 border-t-0 border-l-0 border-r-0 border-[#07373F] border-solid mx-4 -mt-6">
                     <div className={width}></div>
                 </div>
                 </div>
  )
}
