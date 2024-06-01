import Image from "next/image";
import { useState } from "react";
import Blocks from "./Blocks";

interface DiamondProps {
    index: number;
    onClick: (index: number) => void;
}

const Diamond = ({ index, onClick }: DiamondProps) => {

    const [State, setState] = useState(false);

    const handleClick = () => {
        setState(true);
        onClick(index);
    };

    if (State) {
        return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center">
            <Image
                src='/Diamond.svg'
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

export default Diamond;