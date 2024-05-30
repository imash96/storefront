import AccountLayout from "@layouts/account/templates/account"
import { getCustomer } from "@libs/data"

type Props = {
    dashboard?: React.ReactNode
    login?: React.ReactNode
}

export default async function Layout({ dashboard, login }: Props) {
    const customer = await getCustomer().catch(() => null)

    return (
        <div>
            {customer ? dashboard : login}
        </div>
    )
}