'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import Social from "./Social"
import BackButton from "./BackButton"

interface cardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel?: string,
    backButtonHref: string,
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonHref,
    showSocial
}: cardWrapperProps) => {
    return (<>
        <Card className="w-[500px] shadow-md rounded-lg">
            <CardHeader className="flex items-center justify-center font-bold text-lg">
                {headerLabel}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Social />
            </CardFooter>
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    </>
    )
}