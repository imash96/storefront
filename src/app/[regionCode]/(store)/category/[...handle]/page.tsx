
export type SortOptions = "price_asc" | "price_desc" | "created_at"

type Props = {
    params: { handle: string[]; regionCode: string }
    searchParams: {
        page?: string
        sortBy?: SortOptions
    }
}

export default async function Page({ params, searchParams }: Props) {
    return (
        <div className="min-h-screen">{params.handle.join("/")}</div>
    )
}