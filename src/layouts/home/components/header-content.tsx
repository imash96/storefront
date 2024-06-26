import ChevronDown from "@/icons/chevron-down";
import LogoIcon from "@/icons/logo";
import { medusaClient } from "@/libs/config";
import LocalizedClientLink from "@/modules/common/localized-client-link";
import { ProductCategory } from "types/medusa"
import MagnifyingGlassIcon from "@/icons/magnifying-glass";
import ShoppingCartIcon from "@/icons/shopping-cart";
import UserIcon from "@/icons/user";
import { Suspense } from "react";
import ThemeButton from "./theme-button";
import CartButton from "./cart-button";
import Image from "next/image";
import { getRandomCategory, getRandomStyle } from "@/libs/utils/get-random";

export default async function HeaderContent() {
    const { product_categories } = await medusaClient.productCategories.list({
        parent_category_id: "null",
        include_descendants_tree: true
    }, { next: { tags: ["categories"] } })
    if (!product_categories) return null

    const main_category: ProductCategory[] = []
    main_category.push(product_categories[0])
    main_category.push(product_categories[1])
    const new_category: ProductCategory[] = []
    const new_style: ProductCategory[] = []
    new_category[0] = {
        ...main_category[0],
        category_children: getRandomCategory(main_category[0].category_children, 7)
    }
    new_category[1] = {
        ...main_category[1],
        category_children: getRandomCategory(main_category[1].category_children, 7)
    }
    new_style[0] = {
        ...main_category[0],
        category_children: getRandomStyle(main_category[0].category_children[0].category_children[2], 4)
    }
    new_style[1] = {
        ...main_category[1],
        category_children: getRandomStyle(main_category[1].category_children[0].category_children[3], 4)
    }
    return (
        <>
            <div className="ml-4 flex xm:ml-0">
                <LocalizedClientLink href='/'>
                    <span className="sr-only">Leather Lifestyle</span>
                    <LogoIcon width={52} />
                </LocalizedClientLink>
            </div>
            <div className="hidden xm:ml-8 xm:block xm:self-stretch">
                <ul className="flex h-full gap-8">
                    {main_category.map((category) => (
                        <li key={category.id} className="group flex">
                            <button type="button" className="flex border-transparent relative -mb-px items-center pt-px text-sm font-medium transition-colors duration-200 ease-out group-hover:border-b-2 group-hover:border-blue-1 group-hover:text-blue-1" aria-expanded="false">
                                {category.name}
                                <ChevronDown className='ml-1 h-4 w-4 group-hover:rotate-180' aria-hidden="true" />
                            </button>
                            <div className="absolute hidden w-full left-0 top-[97%] shadow-md shadow-grey-84 bg-grey-20 border-t border-grey-17 text-sm text-left text-grey-81 mt-0.5 group-hover:block group-hover:opacity-100 transition-opacity duration-700">
                                <div className="mx-auto max-w-7xl p-10 grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div className="grid grid-cols-2 gap-x-4">
                                        <div key='men-cat-01'>
                                            <div className={`text-lg underline font-semibold`}>SHOP BY CATEGORY</div>
                                            {new_category[category.rank].category_children.map(cat => (
                                                <LocalizedClientLink href={`/category/${cat.handle}`} key={cat.id} className="block text-sm px-2 py-3 rounded-lg hover:bg-grey-18">
                                                    <span>{cat.name}</span>
                                                </LocalizedClientLink>
                                            ))}
                                            <LocalizedClientLink href={`/category/${category.handle}`} className="block text-sm px-2 py-3 rounded-lg hover:bg-grey-18">
                                                <span>View all</span>
                                            </LocalizedClientLink>
                                        </div>
                                        <div key='men-cat-02'>
                                            <div className={`text-lg underline font-semibold`}>SHOP BY STYLE</div>
                                            {new_style[category.rank].category_children.map(cat => (
                                                <LocalizedClientLink href={`/category/${cat.handle}`} key={cat.id} className="flex text-sm px-2 py-3 rounded-lg hover:bg-grey-18">
                                                    <Image src={"/thumbnails/01.webp"} width={50} height={50} alt='thumb' className="bg-sameText rounded-md shadow-md shadow-grey-15" />
                                                    <span className="ml-2 text-lg my-auto">{cat.name}</span>
                                                </LocalizedClientLink>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4">
                                        {(features as featuresType)[category.name].map((item) => (
                                            <LocalizedClientLink key={item.id} href={item.href} className="group relative overflow-clip rounded-md bg-grey-20 aspect-[0.75] text-main sm:text-sm">
                                                <Image src={item.imageSrc} width={200} height={300} alt={item.imageAlt} className="object-cover object-center group-hover:opacity-75 h-full w-full" />
                                                <div className="flex absolute bottom-0 flex-col w-full justify-end">
                                                    <div className="p-4 bg-grey-20 bg-opacity-80 text-sm">
                                                        <span className="font-medium text-grey-81">{item.name}</span>
                                                        <p aria-hidden="true" className="mt-0.5 sm:mt-1 text-grey-83">Shop now</p>
                                                    </div>
                                                </div>
                                            </LocalizedClientLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {Object.entries(pages).map(([name, href]) => (
                        <li key={name} className="relative flex">
                            <LocalizedClientLink href={href} className="flex border-transparent relative -mb-px items-center hover:text-blue-1 hover:border-blue-1 hover:border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">
                                {name}
                            </LocalizedClientLink>
                        </li>
                    ))}
                </ul>
            </div >
            <div className="ml-auto flex content-between items-center gap-3">
                <LocalizedClientLink href="#" className="header-icon hidden xm:block">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </LocalizedClientLink>

                <LocalizedClientLink href="/account" className="header-icon hidden md:block">
                    <span className="sr-only">Account</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                </LocalizedClientLink>

                <ThemeButton />

                <Suspense fallback={
                    <div className="flex items-center hover:text-grey-85 hover:bg-grey-19">
                        <span className="sr-only">items in cart, view bag</span>
                        <ShoppingCartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                        <span className="ml-2 text-sm font-medium">0</span>
                    </div>
                }>
                    <CartButton />
                </Suspense>
            </div>
        </>
    )
}

export const pages = {
    "KID": "/category/kid",
    "PILLOW": "/category/pillow",
    "ACCESSORIES": "/category/accessories",
    "TRAVEL BAGS": "/category/travel-bags",
}


export type featuresType = {
    [key: string]: {
        id: string,
        name: string;
        href: string;
        imageSrc: string;
        imageAlt: string;
    }[]
}

export const features = {
    "Men": [
        {
            id: 'men-cat-03',
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
            id: 'men-cat-04',
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
                'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        }
    ],

    "Women": [
        {
            id: 'women-cat-03',
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
            id: 'women-cat-04',
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        }
    ],
}