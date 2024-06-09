import { auth, signOut } from "@/../auth"

const page = async () => {
    const session = await auth();

    return (
        <div className="text-xl text-white">
            {JSON.stringify(session)}
            <form action={async () => {
                'use server';
                await signOut();
            }}>
                <button
                    className="border-0 rounded-md bg-[#3FFFBA] w-full h-12 shadow-md font-bold text-sm text-zinc-900"
                    type="submit"
                >
                    SignOut
                </button>
            </form>
        </div>
    )
}

export default page;