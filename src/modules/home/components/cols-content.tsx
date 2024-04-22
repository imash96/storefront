import { medusaClient } from "@libs/config"
import Image from "next/image"


export default async function CollectionContent() {
    const { collections } = await medusaClient.collections.list({
        limit: 5
    })
    return (
        <div className="mt-4 flow-root">
            <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                    <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
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
            </div>
        </div>
    )
}