import { Metadata } from "next"
import CARTBUTTON from "./button";
import Home from "@modules/home";

export const metadata: Metadata = {
  title: "Leather Lifestyle Store",
  description: "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default function Page({ params }: { params: { regionCode: string } }) {
  const { regionCode } = params
  return (
    <>
      <Home regionCode={regionCode} />
      {/* <CARTBUTTON regionCode={regionCode} /> */}
    </>
  );
}
