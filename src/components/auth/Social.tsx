'use client'

import { Button } from "@mui/material"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button 
                variant="outlined"
                className="w-full h-10 border-1 border-zinc-600 shadow-lg"
                size="large"
                onClick={() => {}}
            >
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button 
                variant="outlined"
                className="w-full h-10 border-1 border-zinc-600 shadow-lg"
                size="large"
                onClick={() => {}}
            >
                <FaGithub className="h-5 w-5"/>
            </Button>
        </div>
    )
}

export default Social