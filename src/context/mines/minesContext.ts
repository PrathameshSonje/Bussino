import { createContext } from "react";

interface minesCountInteface {
    minesCount: number;
    setminesCount: React.Dispatch<React.SetStateAction<number>>;
    distinctNumbers: number[];
    setDistinctNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    mineFound: boolean;
    setMineFound: React.Dispatch<React.SetStateAction<boolean>>;
}

export const minesContext = createContext<minesCountInteface>({
    minesCount: 1,
    setminesCount: () => {},
    distinctNumbers: [0],
    setDistinctNumbers: () => {},
    mineFound: false,
    setMineFound: () => {}
});