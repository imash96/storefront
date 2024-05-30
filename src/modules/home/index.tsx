import Category from "./templates/cats";
import CollectionPromotion from "./templates/colp";
import Collection from "./templates/cols";
import Hero from "./templates/hero";
import NewArrival from "./templates/newa";
import PointOfDifference from "./templates/podf";
import Promotion from "./templates/prom";
import Sale from "./templates/sale";
import Testimonal from "./templates/test";
import UniqueSellingPoint from "./templates/uspt";

export default function Home({ regionCode }: { regionCode: string }) {
    return (
        <>
            <Hero regionCode={regionCode} />
            <UniqueSellingPoint />
            <Category />
            <Collection />
            <Promotion regionCode={regionCode} />
            <CollectionPromotion />
            <NewArrival regionCode={regionCode} />
            <Testimonal />
            <Sale regionCode={regionCode} />
            <PointOfDifference />
        </>
    )
}