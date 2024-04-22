import FeedbackIcon from "@icons/feedback";
import CustomerIcon from "@icons/customer";
import SupportIcon from "@icons/support";
import HandcraftedIcon from "@icons/handcrafted";
import { IconProps } from "types/icon";

export default function PointOfDifference() {
    return (
        <section aria-labelledby="perks-heading" className="bg-grey-20">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mx-auto max-w-7xl py-6 px-2 sm:px-4 sm:py-10 md:px-6 lg:py-12 lg:px-8">
                {podData.map((POD) => (
                    <div key={POD.name} className="sm:flex text-grey-83">
                        <div className="w-20 mx-auto sm:mx-0">
                            <POD.icon width={80} col={{ ...POD.color }} style={{ ...POD.type }} />
                        </div>
                        <div className="sm:flex flex-col justify-center align-middle sm:ml-2 text-center sm:text-left uppercase">
                            <h3 className="text-sm font-bold tracking-wider text-grey-81">{POD.name}</h3>
                            <p className="font-normal text-xs">{POD.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export const podData = [
    {
        name: '1272+',
        icon: (props: IconProps) => (
            <FeedbackIcon {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description: 'Positive Review',
        type: { stroke: 'rgb(var(--gray-83))' },
        color: { stroke: 'rgb(var(--gray-11))' }
    },
    {
        name: '10000+',
        icon: (props: IconProps) => (
            <CustomerIcon {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        description: 'Customers Served',
        type: { stroke: 'rgb(var(--gray-83))' },
        color: { fill: 'rgb(var(--gray-10))' }
    },
    {
        name: '24x7',
        icon: (props: IconProps) => (
            <SupportIcon {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description: 'Chat Support',
        type: { stroke: 'rgb(var(--gray-83))' },
        color: { fill: 'rgb(var(--gray-10))' }
    },
    {
        name: 'Handcrafted',
        icon: (props: IconProps) => (
            <HandcraftedIcon {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
        description: 'Customize Products',
        type: { stroke: 'rgb(var(--gray-83))' },
        color: { fill: 'rgb(var(--gray-10))' }
    },
]