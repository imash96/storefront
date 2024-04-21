import type { Metadata } from "next";
import { cookies } from 'next/headers'
import "@styles/globals.css";
import "@styles/light.css";
import "@styles/dark.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost"

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL)
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    return (
        <html lang="en" data-theme={theme?.value ? theme.value : "light"}>
            <body>
                {children}
            </body>
        </html>
    );
}
