import { minesContext } from "@/context/mines/minesContext";
import genNdistinctNumbers from "@/helpers/mines/distinctNumbers";
import { ChangeEvent, useContext, useState } from "react";

const Panel = () => {
    const [betAmount, setBetAmount] = useState('0.0000000');
    const { minesCount, setminesCount, setDistinctNumbers, setMineFound } = useContext(minesContext);

    const handleBetAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBetAmount(e.target.value);
    };

    const handleMinesChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value, 10);
        setminesCount(value);
    };

    const gen = () => {
        const numbers = genNdistinctNumbers(minesCount);
        setDistinctNumbers(numbers);
        setMineFound(false);
        console.log('hi from console');
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-2 py-4">
                <label htmlFor="bet-amount" className="text-sm font-semibold text-slate-200">Bet Amount</label>
                <input
                    id="bet-amount"
                    type="number"
                    value={betAmount}
                    onChange={handleBetAmountChange}
                    className="border-2 bg-[#141414] border-gray-300 py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-[#ffffff] w-64 h-10 font-semibold text-sm shadow-md"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="mines" className="text-sm font-semibold text-slate-200">Mines</label>
                <select
                    id="mines"
                    value={minesCount}
                    onChange={handleMinesChange}
                    className="border-2 bg-[#141414] border-gray-300 py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-[#ffffff] w-64 h-10 font-semibold text-sm shadow-md"
                >
                    {Array.from({ length: 24 }).map((_, index) => (
                        <option value={index + 1}>{index + 1}</option>
                    ))}
                </select>
            </div>
            <div className="mt-4">
                <button
                    className="border-0 rounded-md bg-[#3FFFBA] w-64 h-12 shadow-md font-bold text-sm font"
                    onClick={gen}
                >
                    Bet
                </button>
            </div>
        </div>
    );
}

export default Panel;