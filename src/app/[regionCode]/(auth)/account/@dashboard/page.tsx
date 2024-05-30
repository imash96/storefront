import { Metadata } from "next"

import { getCustomer, listCustomerOrders } from "@libs/data"
import { notFound } from "next/navigation"
import Overview from "@modules/account/templates/overview"

export const metadata: Metadata = {
    title: "Account",
    description: "Overview of your account activity.",
}

export default async function OverviewTemplate() {
    const customer = await getCustomer().catch(() => null)
    const orders = (await listCustomerOrders().catch(() => null)) || null

    if (!customer) {
        notFound()
    }

    return <Overview customer={customer} orders={orders} />
}