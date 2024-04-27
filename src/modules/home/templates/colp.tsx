import { medusaClient } from "@libs/config"
import Image from "next/image"

export default async function CollectionPromotion() {
    const { collections } = await medusaClient.collections.list({
        handle: ['end-of-season-sale']
    })
    const collection = collections[0]
    return (
        <section aria-labelledby="featured-heading" className="bg-grey-20">
            <div className="mx-auto max-w-7xl pt-8 px-2 sm:px-4 sm:pt-12 md:px-6 lg:px-8 lg:pt-14">
                <div className="relative overflow-clip rounded-lg lg:h-96">
                    <div className="absolute inset-0">
                        <Image
                            fill={true}
                            src={collection.thumbnail ? collection.thumbnail : ''}
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
                    <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
                    <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-grey-23 bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                        <div>
                            <h2 id="featured-heading" className="text-xl font-bold text-grey-81">
                                {collection.title}
                            </h2>
                            <p className="mt-1 text-sm text-grey-83">
                                {collection.description}
                            </p>
                        </div>
                        <a href="#" className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-grey-11 border-opacity-25 bg-grey-14 bg-opacity-0 py-3 px-4 text-base font-medium text-grey-81 hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full">
                            View the collection
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


{/* <section aria-labelledby="featured-heading" className="bg-grey-20">
    <div className="mx-auto max-w-3xl px-4 mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative overflow-clip rounded-lg lg:h-96">
            <div className="absolute inset-0">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
            <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
            <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-grey-23 bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                <div>
                    <h2 id="featured-heading" className="text-xl font-bold text-grey-81">
                        Workspace Collection
                    </h2>
                    <p className="mt-1 text-sm text-grey-83">
                        Upgrade your desk with objects that keep you organized and clear-minded.
                    </p>
                </div>
                <a href="#" className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full">
                    View the collection
                </a>
            </div>
        </div>
    </div>
</section> */}
