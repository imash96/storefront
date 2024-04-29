import Leather from "@icons/leather";
import Payment from "@icons/payment";
import Delivery from "@icons/delivery";
import Return from "@icons/return";
import { IconProps } from "types/icon";
import CreateSection from "@modules/common/create-section";

export default function UniqueSellingPoint() {
    return (
        <CreateSection sectionName="category" className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {uspData.map((usp) => (
                <div key={usp.name} className="sm:flex text-grey-83">
                    <div className="w-20 mx-auto sm:mx-0">
                        <usp.icon width={80} col={{ stroke: "rgb(var(--gray-11))" }} style={{ ...usp.type }} />
                    </div>
                    <div className="sm:flex flex-col justify-center align-middle sm:ml-2 text-center sm:text-left uppercase">
                        <h3 className="text-sm font-bold tracking-wider text-grey-81">{usp.name}</h3>
                        <p className="font-normal text-xs">{usp.description}</p>
                    </div>
                </div>
            ))}
        </CreateSection>
        // <section aria-labelledby="-heading" className="bg-grey-20">
        //     <div className="mx-auto max-w-7xl pt-4 px-2 sm:px-4 sm:pt-8 md:px-6 lg:pt-10 lg:px-8 ">
        //     mx-auto max-w-7xl pt-8 px-2 sm:px-4 sm:pt-12 md:px-6 lg:px-8 lg:pt-14
        //     </div>
        // </section>
    )
}


export const uspData = [
    {
        name: 'Premium Leather',
        icon: (props: IconProps) => (
            <Leather {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description: 'Sourced from the finest tannerie.',
        type: { fill: 'rgb(var(--gray-83))' }
    },
    {
        name: 'Secure Payment',
        icon: (props: IconProps) => (
            <Payment {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
        description: 'Contact support team 24x7 365 days.',
        type: { stroke: 'rgb(var(--gray-83))' }
    },
    {
        name: 'Easy returns',
        icon: (props: IconProps) => (
            <Return  {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        description: 'Not what expected Return & get full refund.',
        type: { stroke: 'rgb(var(--gray-83))' }
    },
    {
        name: 'Free Delivery',
        icon: (props: IconProps) => (
            <Delivery  {...props} />
        ),
        imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description: 'Receive your products within 5-6 Days.',
        type: { fill: 'rgb(var(--gray-83))' }
    },
];