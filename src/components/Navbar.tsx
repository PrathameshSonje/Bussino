'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    return (
        <header className="flex justify-between py-[1rem] items-center px-[2rem] border-[#323533] border-b-[1px]">
            <div className="text-white ">
                Bussino
            </div>
            <div className="flex text-white items-center">
                <ul className="lg:flex gap-[2rem] text-[13px]">
                    <li>
                        Affilate
                    </li>
                    <li>
                        Blogs
                    </li>
                </ul>
                <div className="w-[0.1em] bg-[#393838] h-[2em] mx-[2rem]" />
                <div className="flex gap-[2rem]">
                    <button className="text-[15px]">Sign In</button>
                    <button
                        className="bg-[#3FFFBA] py-[0.8em] text-[13px] text-black px-[2em] rounded-[2px]"
                        onClick={() => {
                            router.push(pathname + '?' + createQueryString('tab', 'register'))
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}