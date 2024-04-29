import { medusaClient } from "@libs/config"
import LocalizedClientLink from "@modules/common/localized-client-link"
import Image from "next/image"


export default async function CollectionContent() {
    const { collections } = await medusaClient.collections.list({
        limit: 20
    })
    const filteredcollection = collections.filter((collection) => collection.is_active)
    return (
        <div className="grid mt-6 gap-4 justify-items-center xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-x-8 xl:gap-4">
            {filteredcollection.map((collection) => (
                <LocalizedClientLink key={collection.id} href={collection.title} className="relative shadow-md shadow-grey-84 flex h-80 min-w-72 xs:min-w-40 xs:min-h-64 sm:min-w-72 md:min-w-56 md:min-h-80 xm:min-w-72 lg:min-w-56 xl:min-w-48 flex-col overflow-clip rounded-lg p-6 hover:opacity-75 xl:w-auto" >
                    <span aria-hidden="true" className="absolute inset-0">
                        <Image width={200} height={400} src={collection.thumbnail ? collection.thumbnail : ''} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-grey-11 opacity-70"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-grey-86">{collection.title}</span>
                </LocalizedClientLink>
            ))}
        </div>

    )
}