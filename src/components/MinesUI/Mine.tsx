import Image from "next/image";
import Blocks from "./Blocks";

interface MineProps {
    index: number;
    onClick: (index: number) => void;
    mineFound: boolean;
    setMineFound: any
}

const Mine = ({ index, onClick, mineFound, setMineFound }: MineProps) => {

    const handleClick = () => {
        setMineFound(true);
        onClick(index);
    };

    if (mineFound) {
        return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center">
            <Image
                src='/Mine.svg'
                width={80}
                height={80}
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