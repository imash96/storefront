import LocalizedClientLink from "@modules/common/localized-client-link"

type footerTop = {
    title: string
    footerData: {
        name: string
        href: string
    }[]
}

export default function FooterTop({ title, footerData }: footerTop) {

    return (
        <div className='grid grid-cols-2 grid-rows-5 gap-y-3'>
            <h2 className="useful-link text-base font-bold text-grey-81 col-span-2">{title}</h2>
            {footerData.map((item) => (
                <span key={item.name}>
                    <LocalizedClientLink href={item.href} className="text-base text-grey-83 hover:text-grey-85">
                        {item.name}
                    </LocalizedClientLink>
                </span>
            ))}
        </div>
    )
}