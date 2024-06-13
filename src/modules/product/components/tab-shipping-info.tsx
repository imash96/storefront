import DeliveryIcon from "@/icons/delivery"
import ExchangeIcon from "@/icons/excahnge"
import ReturnIcon from "@/icons/return"

export default function ShippingInfoTab() {
    return (
        <div className="text-sm py-4 text-grey-81">
            <div className="grid grid-cols-1 gap-y-8">
                <div className="flex items-start gap-x-2">
                    <DeliveryIcon width={22} />
                    <div>
                        <span className="font-semibold">Fast delivery</span>
                        <p className="max-w-sm text-grey-83">
                            Your package will arrive in 3-5 business days at your pick up
                            location or in the comfort of your home.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <ExchangeIcon width={22} />
                    <div>
                        <span className="font-semibold inline-block">Simple exchanges</span>
                        <p className="max-w-sm text-grey-83">
                            Is the fit not quite right? No worries - we&apos;ll exchange your
                            product for a new one.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <ReturnIcon width={22} />
                    <div>
                        <span className="font-semibold inline-block">Easy returns</span>
                        <p className="max-w-sm text-grey-83">
                            Just return your product and we&apos;ll refund your money. No
                            questions asked – we&apos;ll do our best to make sure your return
                            is hassle-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}