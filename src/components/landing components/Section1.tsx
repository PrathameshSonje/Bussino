import Image from "next/image";
import bannerImage from '../../../public/assets/section1banner.png'

export default function Section1(){
    return(
        <div className="bg-[#232323] rounded-md flex h-[45vh] ">
        <div className="h-[100%] flex flex-col justify-center p-[2rem] w-[45%]">
            <h1 className="text-white md:text-[2rem] font-bold mb-[2rem]">
                Play smarter, win harder!
            </h1>
            <span className="flex gap-[1rem] items-center">
                <button className="text-[0.8rem] bg-[#4FFFC0] py-[1rem] px-[3rem] rounded-full font-bold">
                    Register Instantly
                </button>
                <p className="font-bold text-white">or</p>
                <span>
                    <span>

                    </span>
                </span>
            </span>
            <span className="w-[80%] h-[1px] bg-white mt-[2rem] bg-[#464646]"/>
            <p className="text-white font-semibold text-[0.7rem] mt-[1rem] text-[#706969]">Read terms and conditions before proceeding <span className="text-white cursor-pointer underline underline-offset-1">Here</span></p>
        </div>
        <div className="w-[55%] h-[100%] flex items-end">
            <Image
                src={bannerImage}
                height={400}
                alt="rohit, virat and dhoni's image ek number ke juwari hai saale"
            />
        </div>
    </div>
    )
}