import Image from "next/image";

interface DiamondProps {
    index: number;
    onClick: (index: number) => void;
}

const Diamond = ({ index, onClick }: DiamondProps) => {

    const handleClick = () => {
        onClick(index);
    };

    return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center" onClick={handleClick}>
        <Image 
            src='/Diamond.svg'
            width={100}
            height={100}
            alt="Picture of a Diamond"
        />
    </div>
}

export default Diamond;