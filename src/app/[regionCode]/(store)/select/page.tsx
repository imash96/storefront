import CountrySelect from "@modules/common/country-select"
import { listRegions } from "@libs/data"

export default async function Page() {
    const regions = await listRegions()

    if (!regions) return null
    return (
        <div className="flex flex-col gap-4 mx-4 my-8">
            <CountrySelect
                regions={regions}
            />
        </div>
    )
}

