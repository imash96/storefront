"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

type LinkProp = {
    href: string
    className?: string
    onClick?: () => void
    passHref?: true
    [x: string]: any
} & React.PropsWithChildren

export default function LocalizedClientLink({ children, href, ...props }: LinkProp) {
    const { countryCode } = useParams()

    return (
        <Link href={`/${countryCode}${href}`} {...props}>
            {children}
        </Link>
    )
}