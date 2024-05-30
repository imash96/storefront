import { Customer, Region } from "@medusajs/medusa"
import React from "react"

import AddAddress from "../components/add-address"
import EditAddress from "../components/edit-address"

type AddressBookProps = {
    customer: Omit<Customer, "password_hash">
    region: Region
}

export default function AddressBook({ customer, region }: AddressBookProps) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4">
                <AddAddress region={region} />
                {customer.shipping_addresses.map((address) => (
                    <EditAddress region={region} address={address} key={address.id} />
                ))}
            </div>
        </div>
    )
}