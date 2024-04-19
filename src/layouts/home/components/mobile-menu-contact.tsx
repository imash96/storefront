import LocalizedClientLink from "@modules/common/localized-client-link"

export default function MobileMenuContact() {
    return (
        <>
            <span className="text-md font-semibold flow-root">CONTACT US</span>
            <span className='flow-root'>WhatsApp Us : <a href='https://wa.me/917506919895?text=Hi%2C%20I%20need%20to%20more%20information%20for%20product%3A%20%7B%7D%0Alink%3A%20%7B%7D' className='text-blue-1'>75069 19895</a></span>
            <span className='flow-root'>Email Us: <a href="mailto:contact@leatherlifestyle.stor" className='text-blue-1'>contact@leatherlifestyle.store</a></span>
            <span className='flow-root'>Call Us : <a href="tel:+91 75069 19895" className='text-blue-1'>75069 19895</a></span>
            <span className='flow-root text-xs !-mt-0.5'>8:00 AM to 8:00 PM, 365 days</span>
            <span className='flow-root font-light !mt-5'>Please note that you are accessing the BETA Version of
                <LocalizedClientLink href='/' className='text-blue-1'>
                    leatherlifestyle.store
                </LocalizedClientLink>
            </span>
            <span className='flow-root font-light'>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on <a href="mailto:info@leatherlifestyle.stor" className='text-blue-1'>info@leatherlifestyle.store</a></span>
        </>
    )
}