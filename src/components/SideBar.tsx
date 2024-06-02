import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StyleIcon from '@mui/icons-material/Style';
import ForumIcon from '@mui/icons-material/Forum';
import CasinoIcon from '@mui/icons-material/Casino';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
export default function SideBar(){

    const navgames = [
        {
            icon:CasinoIcon,
            title:'Casino'
        },
        {
            icon:SportsBasketballIcon,
            title:'Sports'
        },
        {
            icon:ThumbsUpDownIcon,
            title:'Elections'
        }
    ]

    const navbtns = [
        {
            icon:SkateboardingIcon,
            title:"Leaderboard"
        },
        {
            icon:AutoAwesomeIcon,
            title:"Vip Club"
        },
        {
            icon:StyleIcon,
            title:"Blogs"
        },
        {
            icon:ForumIcon,
            title:"Forum"
        }
    ]

    return(
        <div className="h-[100%] p-[0.5rem] border-r-[1px] border-[#323533] lg:w-[14vw] hidden md:block">
            <div className=' px-[1rem] py-[2rem] rounded-[1rem]'>
                <p className='text-white mb-[2rem] font-bold text-[0.7rem]'>Games</p>
                <ul className='flex flex-col gap-[1.4rem]'>
                    {
                        navgames.map((btn,index)=>{
                            return(
                                <>
                                <li key={index} className='text-[#AEAEAE] hover:text-white duration-300 flex gap-[1rem] text-[0.7rem] gap-[1.5rem] flex items-center hover:cursor-pointer'>
                                 {<btn.icon/>}   <p>{btn.title}</p>
                                </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
            <div className=' px-[1rem] py-[2rem] rounded-[1rem]'>
                <p className='text-white mb-[2rem] font-bold text-[0.7rem]'>Other Browse</p>
                <ul className='flex flex-col gap-[1.4rem]'>
                    {
                        navbtns.map((btn,index)=>{
                            return(
                                <>
                                <li key={index} className='text-[#AEAEAE] hover:text-white duration-300 flex gap-[1rem] text-[0.7rem] gap-[1.5rem] flex items-center hover:cursor-pointer'>
                                 {<btn.icon/>}   <p>{btn.title}</p>
                                </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}