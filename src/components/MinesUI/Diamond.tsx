import Image from "next/image";

const Diamond = () => {
    return <div className="bg-slate-700 h-28 w-28 rounded-lg flex items-center justify-center">
        <Image 
            src='/Diamond.svg'
            width={100}
            height={100}
            alt="Picture of a Diamond"
        />
    </div>
}

export default Diamond;