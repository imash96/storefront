import OldSelect from "@modules/test/select-old"
import CustmSelect from "./custm-select"
import CustomSelect from "./custom-select"
import CustomSelected from "./custom-selected"
import SelectCustom from "./select-custom"
import OldCustomSelect from "@modules/test/custom-select"
import Divider from "@modules/common/divider"
import NewSelect from "@modules/test/select-new"
import CountrySelect from "@modules/common/country-select"
import NewCustomSelect from "@modules/common/custom-select"
import useToggleState from "@libs/hooks/use-toggle-state"
import { listRegions } from "@libs/data"

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
    { value: 'six', label: 'Six' },
    { value: 'seven', label: 'Seven' },
    { value: 'eight', label: 'Eifht' },
    { value: 'nine', label: 'Nine' },
    { value: 'ten', label: 'Ten' },
    { value: 'eleven', label: 'Eleven' },
    { value: 'twelve', label: 'Twelve' },
    { value: 'thirteen', label: 'Thirteen' },
    { value: 'fourteen', label: 'Fourteen' },
    { value: 'fifteen', label: 'Fifteen' },
]

type OptionProp = {
    value: string;
    label: string;
}

export default async function Page() {
    const handleChangeSelect = (e: OptionProp) => {
        console.log(e.value)
    }

    const regions = await listRegions()

    if (!regions) return null

    return (
        <div className="flex flex-col gap-4 mx-4 my-8">
            {/* <CustomSelect options={options} defaultValue="seven" placeholder="Select type..." /> */}
            <Divider />
            <NewCustomSelect
                options={options}
                defaultValue={options[7]}
                placeholder="Select type..."
                checkbox
            />
            <Divider />
            {/* <SelectCustom placeholder="Select type..." options={options} defaultValue="one" /> */}
            {/* <CustomSelect placeholder="Select type..." options={options} defaultValue="two" /> */}
            {/* <CustomSelected placeholder="Select type..." options={options} defaultValue="one" checkbox /> */}
            <SelectCustom placeholder="Select type..." options={options} defaultValue="two" multiple />
            {/* <CustmSelect placeholder="Select type..." options={options} defaultValue="two" ref={valueRef} /> */}
            {/* <OldCustomSelect
                options={options}
                placeHolder='Select option...'
                onChange={(e) => handleChangeSelect(e)}
                isSearchable
            />
            <OldCustomSelect
                options={options}
                placeHolder='Select option...'
                defaultValue={{ label: 'Eleven', value: 'eleven' }}
                onChange={(e) => handleChangeSelect(e)}
            />
            <OldSelect
                options={options}
                placeHolder='Select option...'
                defaultValue={{ label: 'Eleven', value: 'eleven' }}
                onChange={(e) => handleChangeSelect(e)}
            />
            <OldSelect
                options={options}
                placeHolder='Select option'
                onChange={(e) => handleChangeSelect(e)}
                isSearchable
            /> */}
            <Divider />
            {/* <NewSelect
                options={options}
                placeHolder='Select option'
                onChange={(e) => handleChangeSelect(e)}
                isSearchable
            /> */}
            <CountrySelect regions={regions} />
            {/* <span>{valueRef.current?.value}</span> */}
        </div>
    )
}

