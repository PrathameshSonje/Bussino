'use client'

import React, { useEffect, useState } from "react";
import Blocks from "@/components/MinesUI/Blocks";
import { Button } from "@mui/material";
import genNdistinctNumbers from "@/helpers/distincNumbers";
import Diamond from "@/components/MinesUI/Diamond";
import Mine from "@/components/MinesUI/Mine";

const mines = () => {
    const grid = [];
    const [distinctNumbers, setDistinctNumbers] = useState([1]);

    useEffect(() => {
        const numbers = genNdistinctNumbers(6);
        setDistinctNumbers(numbers); 
    }, [])

    for(let i = 1; i <= 25; i++) {
        if(distinctNumbers.includes(i)) {
            grid.push(<Mine key={i} />);
        } else {
            grid.push(<Diamond key={i} />)
        }
        
    }

    const gen = () => {
        const numbers = genNdistinctNumbers(6);
        setDistinctNumbers(numbers);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid grid-cols-5 gap-2.5">
                {grid}
            </div>
            <div className="mt-10">
                <Button 
                    variant="contained"
                    onClick={gen}>Generate</Button>
            </div>
        </div>
    );
};

export default mines;
