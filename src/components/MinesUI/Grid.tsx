import React, { useContext } from "react";
import Diamond from "@/components/MinesUI/Diamond";
import Mine from "@/components/MinesUI/Mine";
import { minesContext } from "@/context/mines/minesContext";

const grid = () => {
    const grid = [];
    const { distinctNumbers, mineFound, setMineFound } = useContext(minesContext);

    const handleMineClick = (index: number) => {
        if (distinctNumbers.includes(index)) {
            console.log('mine');
        }
    }

    const handleDiamondClick = (index: number) => {
        if (!distinctNumbers.includes(index)) {
            console.log('diamond');
        }
    }

    for (let i = 1; i <= 25; i++) {
        if (distinctNumbers.includes(i)) {
            grid.push(<Mine key={i} index={i} onClick={handleMineClick} mineFound={mineFound} setMineFound={setMineFound} />);
        } else {
            grid.push(<Diamond key={i} index={i} onClick={handleDiamondClick} mineFound={mineFound} />);
        }
        console.log('grid changed');
        console.log(distinctNumbers);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-5 gap-2.5">
                {grid}
            </div>
        </div>
    );
};

export default grid;
