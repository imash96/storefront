import { Metadata } from "next"
import CARTBUTTON from "./button";
import Home from "@modules/home";

export const metadata: Metadata = {
  title: "Leather Lifestyle Store",
  description: "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default function Page({ params }: { params: { countryCode: string } }) {
  const { countryCode } = params
  return (
    <>
      <Home />
      <div className="min-h-screen">
        <CARTBUTTON countryCode={countryCode} />
      </div>
    </>
  );
}
