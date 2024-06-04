'use client'

import React, { useEffect, useState } from "react";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import genNdistinctNumbers from "@/helpers/distincNumbers";
import Diamond from "@/components/MinesUI/Diamond";
import Mine from "@/components/MinesUI/Mine";

const mines = () => {
    const grid = [];
    const [distinctNumbers, setDistinctNumbers] = useState([0]);
    const [minesCount, setminesCount] = useState(1);
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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid grid-cols-5 gap-2.5">
                {grid}
            </div>
            <div className="mt-10 flex items-center justify-center gap-10">
                <div>
                    <Button
                        variant="contained"
                        onClick={gen}>
                        Generate
                    </Button></div>
                <div className="bg-slate-500 p-1 rounded-md">
                    <FormControl variant="standard" sx={{ minWidth: 60 }}>
                        <Select
                            value={minesCount}
                            onChange={handleChange}
                        >
                            {Array.from({ length: 25 }).map((_, index) => (
                                <MenuItem value={index + 1}>{index + 1}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default mines;
