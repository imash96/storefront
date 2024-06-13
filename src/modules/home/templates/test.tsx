import TestimonalSlider from "../components/test-slider";
import "@/styles/testimonal.css";
import CreateSection from "@/modules/common/create-section";

export default function Testimonal() {
    return (
        <CreateSection sectionName="testimonal">
            <div className="xs:flex xs:items-baseline xs:justify-between">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-grey-81">
                    What our customers say
                    <p className="text-sm md:text-base lg:text-lg font-extralight text-grey-83">
                        Real Stories, Real Experiences....!
                    </p>
                </h2>
            </div>
            <div className="flex mt-4">
                <TestimonalSlider />
            </div>
        </CreateSection >
    )
}