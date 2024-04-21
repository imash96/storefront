import CartButtonClient from "./cart-btn-client";
import CartButtonServer from "./cart-btn-server";

export default function CartButton() {
    return (
        <CartButtonClient>
            <CartButtonServer />
        </CartButtonClient>
    )
}