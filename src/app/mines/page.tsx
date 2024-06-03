'use client'

import Grid from "@/components/MinesUI/Grid";
import Panel from "@/components/MinesUI/Panel";
import { minesContext } from "@/context/mines/minesContext";
import { useState } from "react";

const mines = () => {
    const [minesCount, setminesCount] = useState(1);
    const [distinctNumbers, setDistinctNumbers] = useState([0]);
    const [mineFound, setMineFound] = useState(false);

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