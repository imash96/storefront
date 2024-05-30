import AccountLayout from "@layouts/account/templates/account"
import { getCustomer } from "@libs/data"


export default async function Layouts({ children }: React.PropsWithChildren) {
    const customer = await getCustomer().catch(() => null)

    return (
        <AccountLayout customer={customer}>
            {children}
        </AccountLayout>
    )
}