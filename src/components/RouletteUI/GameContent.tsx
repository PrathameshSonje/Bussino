import { BetsPool } from "./BetsPool"
import { Result } from "./Result"
import { ResultHistory } from "./ResultHistory"
import { Wheel } from "./Wheel"

export const GameContent = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-9 w-full gap-2 mb-2">
                <div className="col-span-3 flex justify-center items-center">
                    <Result result={0} />
                </div>
                <div className="col-span-3">
                    <Wheel />
                </div>
                <div className="col-span-3 flex justify-center items-center">
                    <ResultHistory result={{
                        value: 0,
                        ColorValue: ""
                    }} />
                </div>
            </div>
            <div className="p-4">
                <BetsPool />
            </div>

        </div>
    )
}