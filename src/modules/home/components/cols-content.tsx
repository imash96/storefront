import { medusaClient } from "@libs/config"
import Image from "next/image"


export default async function CollectionContent() {
    const { collections } = await medusaClient.collections.list({
        limit: 12
    })
    return (
        <div className="grid mt-6 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-x-6">
            {collections.map((collection) => (
                <div key={collection.id} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                            src={collection.thumbnail ? collection.thumbnail : ""}
                            alt={'callout.imageAlt'}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            ))}
        </div>

    )
}

{/* <div className="mt-4 flow-root">
    <div className="relative box-content h-80 overflow-x-auto xl:overflow-visible">
        <div className="min-w-screen-xl absolute flex gap-x-2 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-4">
            {collections.map((collection) => (
                <a key={collection.id} href={collection.handle} className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto" >
                    <span aria-hidden="true" className="absolute inset-0">
                        <Image src={collection.thumbnail ? collection.thumbnail : ""} height={500} width={250} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{collection.title}</span>
                </a>
            ))}
        </div>
    </div>
</div> */}