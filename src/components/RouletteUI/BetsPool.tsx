import { Pocket } from "./Pocket"
import { pockets } from "@/lib/pockets"

export const BetsPool = () => {
    return (<div className="flex gap-1">
        <div className="h-16">
            <Pocket NumberValue="0" ColorValue="GREEN" />
        </div>
        <div className="grid grid-cols-12 gap-1">
            {pockets.map((pocket) => (
                <Pocket NumberValue={pocket.number} ColorValue={pocket.color} />
            ))}
            <div className="col-span-4">
                <Pocket NumberValue="1 to 12" ColorValue="NaN" />
            </div>
            <div className="col-span-4">
                <Pocket NumberValue="13 to 24" ColorValue="NaN" />
            </div>
            <div className="col-span-4">
                <Pocket NumberValue="25 to 36" ColorValue="NaN" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="1 to 18" ColorValue="NaN" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="Even" ColorValue="NaN" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="" ColorValue="ONLYRED" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="" ColorValue="ONLYBLACK" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="Odd" ColorValue="NaN" />
            </div>
            <div className="col-span-2">
                <Pocket NumberValue="19 to 36" ColorValue="NaN" />
            </div>
        </div>
        <div className="w-14 flex flex-col gap-1">
            <Pocket NumberValue="1:2" ColorValue="NaN" />
            <Pocket NumberValue="1:2" ColorValue="NaN" />
            <Pocket NumberValue="1:2" ColorValue="NaN" />
        </div>

    </div>
    )
}
