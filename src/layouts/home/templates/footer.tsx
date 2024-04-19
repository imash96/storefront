import FooterTop from '../components/footer-top'
import FooterBottom from '../components/footer-bottom'
import MailIcon from "@icons/mail"

export default function Footer() {
    return (
        <footer className='footer border-t border-grey-17 shadow-md shadow-grey-19 bg-grey-20' aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="lg:py-6 py-5 px-2 sm:px-4 sm:pb-8 md:px-6 mx-auto max-w-8xl lg:p-10 text-grey-81">
                <div className='grid grid-cols-1 p-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-2 gap-y-8'>
                    <FooterTop title='COMPANY' footerData={footerData.company} />
                    <FooterTop title='USEFUL LINKS' footerData={footerData.useful} />
                    <div className='grid grid-cols-1 gap-y-2 grid-rows-[32px_auto]'>
                        <h2 className={`useful-link text-base font-bold  text-grey-81`}>CONTACT US</h2>
                        <a href="https://goo.gl/maps/ajCzMDmjeo31WXiN7" target="_blank" rel="noopener noreferrer" data-content="https://goo.gl/maps/ajCzMDmjeo31WXiN7" data-type="external" className='text-base text-grey-83 hover:text-grey-85 mt-2'>
                            A 174 5/6, B Block Social Nagar,<br />
                            90 Feet Road Dharavi,<br />
                            Mumbai, MH - 400017<br />
                            India
                        </a>
                    </div>
                    <div className="flex flex-col items-center xl:mt-0 text-center xl:items-start xl:text-left sm:col-span-2 lg:col-span-1">
                        <h2 className='uppercase text-base font-bold tracking-wider'>
                            Subscribe to our newsletter
                        </h2>
                        <p className="mt-2 text-base text-grey-83">
                            New Arrival, Sale and Promotion, sent to your inbox Monthly.
                        </p>
                        <form className="mt-4 sm:flex w-full sm:max-w-lg">
                            <div className="relative w-full max-w-md mx-auto">
                                <span className="relative">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input type="email" name="email-address" id="email-address" autoComplete="email" required className="py-1.5 pl-10 pr-16 w-full h-[38px] pt-1 rounded-3xl focus:outline-none text-sm bg-grey-17" aria-required="true" aria-invalid="false" />
                                </span>
                                <div className="absolute left-2 top-1.5 iconemail-ab">
                                    <MailIcon width={25} />
                                </div>
                                <button className="absolute right-[3px] top-[3px] uppercase bg-grey-21 rounded-3xl py-1 px-4 text-base font-medium hover:bg-grey-20 hover:text-grey-83 active:bg-grey-19">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterBottom />
            </div>
        </footer>
    )
}

const footerData = {
    company: [
        { name: 'About us', href: '/about-us' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Privacy policy', href: '/privacy-policy' },
        { name: 'Payment policy', href: '/payment-policy' },
        { name: 'Shipping policy', href: '/shipping-policy' },
        { name: 'Return Policy', href: '/return-policy' },

    ],
    useful: [
        { name: 'Contact us', href: '/contact-us' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Profile', href: '/account/profile' },
        { name: 'Orders', href: '/account/orders' },
        { name: 'Measurement', href: '/account/measurement' },
        { name: 'Guides', href: '/guides' },
    ],
}