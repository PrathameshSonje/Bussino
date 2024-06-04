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
            <div className="flex justify-between gap-[3rem] w-[100%]">
                <span>
                    <p className="font-bold mb-[1rem] gap-[1rem]  text-white z-3 flex items-center"><CasinoIcon className="text-[#FF5F5F] text-[2rem]"/> Casino</p>
                    
                    <div className="overflow-hidden rounded-md duration-300 hover:translate-y-[-0.5rem]">
                        
                        <Image
                            src={sec2img1}
                            alt="casino image"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="w-[100%] mt-[1rem]">
                            <h4 className="mb-[0.3em] text-white font-bold">Leading Online Casino</h4>
                            <p className="text-[#DAD7D7] text-[0.7rem] ">Browse our giant range of casino games as Stake offers a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat, Roulette, and thousands of classic casino games right from your browser, including your favourite Stake Originals.</p>
                    </div>
                    <button className="w-[100%] btn-animated1  bg-[#0052B1] py-[0.8rem] font-bold text-white rounded-sm mt-[1rem] text-[0.8rem]">Go to casino</button>
                </span>
                <span>
                    <p className="font-bold mb-[1rem] text-white z-3 flex gap-[1rem] items-center"><HowToVoteIcon className="text-[#DCE573] text-[2rem]"/> Elections</p>
                    
                    <div className="overflow-hidden rounded-md duration-300 hover:translate-y-[-0.5rem]">
                        
                        <Image
                            src={sec2img2}
                            alt="casino image"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="w-[100%] mt-[1rem]">
                            <h4 className="mb-[0.3em] text-white font-bold"> Where Politics Meets Chance!</h4>
                            <p className="text-[#DAD7D7] text-[0.7rem] ">Browse our giant range of casino games as Stake offers a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat, Roulette, and thousands of classic casino games right from your browser, including your favourite Stake Originals.</p>
                    </div>
                    <button className="w-[100%] btn-animated1 bg-[#0052B1] relative py-[0.8rem] font-bold text-white rounded-sm mt-[1rem] text-[0.8rem]">Go to Elections</button>
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