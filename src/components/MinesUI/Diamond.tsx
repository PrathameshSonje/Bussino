import Image from "next/image";
import { useEffect, useState } from "react";
import Blocks from "./Blocks";

interface DiamondProps {
    index: number;
    onClick: (index: number) => void;
    mineFound: boolean;
}

const Diamond = ({ index, onClick, mineFound }: DiamondProps) => {

    const [myState, setMyState] = useState(false);

    const handleClick = () => {
        setMyState(true);
        onClick(index);
    };

    if (mineFound) {
        return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center">
            <Image
                src='/Diamond.svg'
                width={100}
                height={100}
                alt="Picture of a Diamond"
            />
        </div>
    } else if (myState) {
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