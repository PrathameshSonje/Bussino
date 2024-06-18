export const Result = ({ result }: { result: number }) => {
    return (
        <>
            <div className="h-[64px] w-[64px] bg-[#3b3b3b] rounded-md flex justify-center items-center">
                <span className="font-semibold text-white  text-xl">{result}</span>
            </div>
        </>
    )
}