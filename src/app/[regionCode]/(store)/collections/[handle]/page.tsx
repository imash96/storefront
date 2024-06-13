import Collection from "@/modules/collections";

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type Props = {
    params: { handle: string; regionCode: string }
    searchParams: {
        page?: string
        sortBy?: SortOptions
    }
}

export default async function Page({ params, searchParams }: Props) {
    return (
        <Collection regionCode={params.regionCode} handle={params.handle} />
    )
}