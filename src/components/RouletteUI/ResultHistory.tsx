import clsx from "clsx";

export const ResultHistory = ({ result }: { result: { value: number, ColorValue: string } }) => {
    const queue = [{
        value: 0,
        ColorValue: "RED"
    }, {
        value: 35,
        ColorValue: "BLACK"
    }, {
        value: 17,
        ColorValue: "RED"
    }, {
        value: 15,
        ColorValue: "BLACK",
    }, {
        value: 5,
        ColorValue: "RED"
    }];

    return (
        <>
            <div className="flex flex-col gap-1">
                {queue.map((prev, index) => {
                    return (
                        <div
                            key={index}
                            style={{ opacity: 1 - index * 0.2 }}
                            className={clsx("h-[42px] w-[42px] rounded-full", {
                                'bg-red-500 w-14': prev.ColorValue === "RED",
                                'bg-neutral-800 w-14': prev.ColorValue === "BLACK"
                            })}>
                            <span className="text-white flex justify-center items-center h-full text-sm font-semibold">
                                {prev.value}
                            </span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}