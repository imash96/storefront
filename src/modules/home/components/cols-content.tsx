import ArrowRight from "@icons/arrow-right"
import { medusaClient } from "@libs/config"
import LocalizedClientLink from "@modules/common/localized-client-link"
import Image from "next/image"


export default async function CollectionContent() {
    const { collections } = await medusaClient.collections.list({
        limit: 20
    })
    const filteredcollection = collections.filter((collection) => collection.is_active)
    return (
        <div className="grid mt-6 justify-items-center gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {filteredcollection.map((collection) => (
                <LocalizedClientLink key={collection.id} href={`/collections/${collection.handle}`} className="flex flex-col relative shadow-md shadow-grey-84 rounded-md w-full hover:opacity-75 overflow-clip aspect-h-12 aspect-w-10">
                    <span aria-hidden="true" className="absolute inset-0">
                        <Image
                            width={300}
                            height={400}
                            src={collection.thumbnail ? collection.thumbnail : ''}
                            alt={`collection.alt`}
                            className="h-full w-full object-cover object-center"
                        />
                    </span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-grey-83 from-30% opacity-50" />
                    <h3 className="flex items-end justify-center pb-8 px-2 text-xl font-bold text-grey-86 text-center">{collection.title}</h3>

                    <p aria-hidden="true" className="mt-0.5 text-base text-grey-88 flex items-end justify-center pb-4">
                        Shop now <ArrowRight />
                    </p>
                </LocalizedClientLink>
            ))}
        </div>
    )
}