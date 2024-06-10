import clsx from "clsx"

interface PocketProps {
    NumberValue: string | null,
    ColorValue: string
}

export const Pocket = ({ NumberValue, ColorValue }: PocketProps) => {
    return (
        <div className={clsx("h-14 rounded-sm flex justify-center items-center", {
            'bg-red-500 w-full':ColorValue === "ONLYRED",
            'bg-neutral-800 w-full': ColorValue === "ONLYBLACK",
            'bg-red-500 w-14': ColorValue === "RED",
            'bg-neutral-800 w-14': ColorValue === "BLACK",
            'w-full border-2 border-zinc-600 bg-transparent': ColorValue === "NaN",
            'bg-green-500 w-14 h-44': ColorValue === "GREEN"
        })}>
            <span className="font-semibold text-white text-sm">{NumberValue}</span>
        </div>
    )
}