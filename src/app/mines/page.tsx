'use client'

import Grid from "@/components/MinesUI/Grid";
import Panel from "@/components/MinesUI/Panel";
import { minesContext } from "@/context/mines/minesContext";
import { useState } from "react";

const mines = () => {
    const [minesCount, setminesCount] = useState(1);
<<<<<<< HEAD
    const [blockState, setBlockState] = useState(false);

    useEffect(() => {
        const numbers = genNdistinctNumbers(minesCount);
        setDistinctNumbers(numbers);
    }, [])

    const handleMineClick = (index: number) => {
        if(distinctNumbers.includes(index)) {
            
        }
    }

    const handleDiamondClick = (index: number) => {
        if(!distinctNumbers.includes(index)) {
            
        }
    }

    for (let i = 1; i <= 25; i++) {
        if (distinctNumbers.includes(i)) {
            grid.push(<Mine key={i} index={i} onClick={handleMineClick} mineFound={blockState} setMineFound={setBlockState} />);
        } else {
            grid.push(<Diamond key={i} index={i} onClick={handleDiamondClick} mineFound={blockState} />);
        }
        console.log('grid changed');
    }

    const gen = () => {
        const numbers = genNdistinctNumbers(minesCount);
        setDistinctNumbers(numbers);
        setBlockState(false)
        console.log('hi from console');
    }

    const handleChange = (event: any) => {
        setminesCount(event.target.value);
    };
=======
    const [distinctNumbers, setDistinctNumbers] = useState([0]);
    const [mineFound, setMineFound] = useState(false);
>>>>>>> 542bfca59a2b3a9ebbb48a8480029c14c4d7e0d7

    return (
        <>
            <minesContext.Provider value={{ minesCount, setminesCount, distinctNumbers, setDistinctNumbers, mineFound, setMineFound }}>
                <div className="px-14 pt-10 w-full">
                    <div className="grid grid-cols-12 rounded-lg">
                        <div className="col-span-3 bg-[#232323]">
                            <Panel />
                        </div>
                        <div className="col-span-9 py-4 bg-[#101010]">
                            <Grid />
                        </div>
                    </div>
                </div>
            </minesContext.Provider>
        </>
    )
}

export default mines;