

interface ButtonProps {
  handleClick: () => void;    // Function passed as a prop to execute any action
    text: string;
    style?: string;
}


export default function Buttons({ text, style, handleClick}:ButtonProps) {
  return (
    <div >
        <button onClick={handleClick} className= {`${style}`}>{text}</button>                       
    </div>
  )
}



