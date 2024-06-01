import Image from "next/image";
import Blocks from "./Blocks";
import { useState } from "react";

interface MineProps {
    index : number;
    onClick: (index: number) => void;
}

const Mine = ({ index, onClick }: MineProps) => {

    const[State, setState] = useState(false);

    const handleClick = () => {
        setState(true);
        onClick(index);
    };

    if(State) {
        return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center">
        <Image 
            src='/Mine.svg'
            width={100}
            height={100}
            alt="Picture of a Diamond"
        />
        </div>
    } else {
        return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center" onClick={handleClick}>
        <Blocks />
        </div>
    }
    
}

export default Mine;