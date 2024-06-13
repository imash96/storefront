import HomeLayout from "@/layouts/home"
import { Metadata } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function Layout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  )
}