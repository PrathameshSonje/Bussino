import Section1 from "./landing components/Section1";
import Section2 from "./landing components/Section2";

export default function Landing(){

    return(
        <div className="md:w-[94vw] overflow-scroll hide-scrollbar w-[100vw] flex flex-col gap-[3rem]  p-[2rem]">
           <Section1/>
           <Section2/>
        </div>
    )
}