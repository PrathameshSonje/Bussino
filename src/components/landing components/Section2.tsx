import Image from "next/image";
import sec2img1 from '../../../public/assets/sec2img1.jpg'

export default function Section2(){
    return(
        <div className="p-[4rem] w-[100%] bg-[#181818]">
            <div className="flex">
                <span>
                    <p className="font-bold mb-[1rem] text-white z-3">Casino</p>
                    
                    <div className="overflow-hidden relative rounded-md">
                        <div className="p-[2rem] items-center h-[100%] absolute w-[100%] bg-white z-2">
                            
                        </div>
                        <Image
                            src={sec2img1}
                            width={450}
                            alt="casino image"
                        />
                    </div>
                </span>
                <span>
                    <p className="font-bold text-white">Casino</p>
                    <div>

                    </div>
                </span>
            </div>
        </div>
    )
}