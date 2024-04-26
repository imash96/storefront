import Category from "./templates/cats";
import CollectionPromotion from "./templates/colp";
import Collection from "./templates/cols";
import Hero from "./templates/hero";
import NewArrival from "./templates/newa";
import PointOfDifference from "./templates/podf";
import Promotion from "./templates/prom";
import Testimonal from "./templates/test";
import UniqueSellingPoint from "./templates/uspt";

export default function Home({ countryCode }: { countryCode: string }) {
    return (
        <>
            <Hero countryCode={countryCode} />
            <UniqueSellingPoint />
            <Category />
            <Collection />
            <Promotion countryCode={countryCode} />
            <CollectionPromotion />
            <NewArrival countryCode={countryCode} />
            <Testimonal />
            <PointOfDifference />
        </>
    )
}