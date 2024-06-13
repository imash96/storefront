import AngleRight from "@/icons/angle-right";
import HomeIcon from "@/icons/home";
import LocalizedClientLink from "@/modules/common/localized-client-link";

export default function ProductBreadcrumb({ cat }: any) {

    const lastEle = cat?.pop()

    return (
        <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center gap-x-2 text-sm font-medium text-grey-81">
                {cat &&
                    <>
                        <li>
                            <div className="flex items-center">
                                <LocalizedClientLink href='/category' className="mr-1">
                                    <HomeIcon width={16} />
                                </LocalizedClientLink>
                                <AngleRight width={16} />
                            </div>
                        </li>

                        {cat.map((breadcrumb: any) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <LocalizedClientLink href={`/category/${breadcrumb.handle}`} className="mr-2">
                                        {breadcrumb.name}
                                    </LocalizedClientLink>
                                    <AngleRight width={16} />
                                </div>
                            </li>
                        ))}
                    </>
                }
                {lastEle && <li>
                    <div className="flex items-center">
                        <LocalizedClientLink href={`/category/${lastEle.handle}`} className="mr-2">
                            {lastEle.name}
                        </LocalizedClientLink>
                    </div>
                </li>}
            </ol>
        </nav>
    )

}