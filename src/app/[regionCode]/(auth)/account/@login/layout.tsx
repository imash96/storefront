import LogoIcon from "@/icons/logo";
import LocalizedClientLink from "@/modules/common/localized-client-link";
import Image from "next/image";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="flex text-grey-81 min-h-screen">
            <div className="flex flex-1 flex-col justify-center px-4 md:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full my-6 max-w-sm lg:w-96">
                    <LocalizedClientLink href='/' className="my-2">
                        <LogoIcon width={72} className="mx-auto" />
                    </LocalizedClientLink>
                    {children}
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/images/bg_hero.jpg"
                    alt=""
                    width={800}
                    height={500}
                />
            </div>
        </div>
    )
}