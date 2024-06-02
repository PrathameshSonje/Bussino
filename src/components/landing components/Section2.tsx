import Image from "next/image";
import sec2img1 from '../../../public/assets/sec2img1.jpg'
import sec2img2 from '../../../public/assets/sec2img2.jpg'
import sec2img3 from '../../../public/assets/sec2img3.jpg'
import CasinoIcon from '@mui/icons-material/Casino';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

export default function Section2(){
    return(
        <div className="p-[4rem] w-[100%] bg-[#181818]">
            <div className="flex justify-between">
                <span>
                    <p className="font-bold mb-[1rem] text-white z-3">Casino</p>
                    
                    <div className="overflow-hidden relative rounded-md">
                        <div className="p-[2rem] flex gap-[1rem] flex-col justify-center linear-gradient1 h-[100%] absolute w-[100%] bg-white z-2">
                            <CasinoIcon className="text-[#FF5F5F] text-[2rem]"/>
                            <p className="text-white">Browse our amazing casino<br/>games and win big prizes</p>
                        </div>
                        <Image
                            src={sec2img1}
                            width={500}
                            alt="casino image"
                        />
                    </div>
                </span>
                <span>
                    <p className="font-bold mb-[1rem] text-white z-3">Elections</p>
                    <div className="overflow-hidden relative rounded-md">
                        <div className="p-[2rem] flex gap-[1rem] flex-col justify-center linear-gradient1 h-[100%] absolute w-[100%] bg-white z-2">
                        <HowToVoteIcon className="text-[#E0FF88]"/>
                            <p className="text-white">Turn your political knowledge into a source<br/>to earn, bid on the candidates</p>
                        </div>
                        <Image
                            src={sec2img2}
                            width={500}
                            alt="casino image"
                        />
                    </div>
                </span>
            </div>
            <div className="w-[100%] relative h-[80vh] mt-[3rem] rounded-md overflow-hidden">
                <div className="absolute z-2 h-[100%] linear-gradient1 gap-[1rem] w-[100%] flex justify-center p-[2rem] flex-col">
                    <SportsBasketballIcon className="text-[#3FFFBA]"/>
                    <h1 className="text-[#A9A9A9] font-bold text-[2.5rem]">Sports</h1>
                    <p className="text-white">
                        Bet on your favorite teams, players and<br/>win rewards on every succeful bet
                    </p>
                    <button className="bg-[#3FFFBA] w-fit px-[2rem] py-[1rem] rounded-full font-bold">
                        $ Bid
                    </button>
                </div>
                <Image
                    src={sec2img3}
                    alt="sports image"
                    className="w-[100%] h-[100%]"
                />
            </div>
        </div>
    )
}