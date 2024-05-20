import CARTBUTTON from "app/[regionCode]/(store)/button";


export default function Slide1() {
    return (
        <div className="hero1">
            <div className="swiper-slide-content text-grey-81 gap-y-3 max-w-7xl px-6 md:px-16 xm:px-18 lg:px-20 xl:px-8">
                <div className="swiper-slide-title-1 text-5xl">Slide 1</div>
                <div className="swiper-slide-title-2 text-4xl">Slide 1</div>
                <div className="swiper-slide-text-3 md:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo saepe vero aliquid assu Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <CARTBUTTON className='w-42 text-center rounded-md border border-grey-11 bg-button-s px-6 py-3 text-base font-medium text-grey-81 shadow-sm hover:bg-button-h' regionCode={'us'} />
            </div>
        </div>
    )
}