import React from "react"


type sectionProp = {
    sectionName: string,
    className?: string
} & React.PropsWithChildren

export default function CreateSection({ sectionName, className, children }: sectionProp) {
    return (
        <section aria-labelledby={`${sectionName}-heading`} className="bg-grey-20">
            <div className={`mx-auto max-w-7xl p-4 sm:px-4 sm:py-6 md:px-6 lg:px-8 lg:py-8 ${className ? className : ''}`}>
                {children}
            </div>
        </section>
    )
}