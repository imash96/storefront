"use client"

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// import Swiper and modules styles
import '@styles/hero-swiper.css';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CARTBUTTON from 'app/[countryCode]/(store)/button';

const SwiperConfig: SwiperProps = {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 900,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 3500, disableOnInteraction: true },
    pagination: { enabled: true, dynamicBullets: true, type: 'bullets', clickable: true, el: '.hero-pagination' },
    navigation: { enabled: true, nextEl: '.hero-button-next', prevEl: '.hero-button-prev' },
    modules: [Autoplay, Pagination, Navigation, EffectFade],
}

export default function Hero({ countryCode }: { countryCode: string }) {
    return (
        <Swiper {...SwiperConfig} className='relative w-full h-[70vh] !overflow-clip -mt-[4.5rem]'>
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="justify-center">
                    <Image fill={true} alt="model image" className="swiper-slide-image" src={slide.imageUrl} />
                    <div className="swiper-slide-content text-grey-81 space-y-3 max-w-7xl px-6 md:px-16 xm:px-18 lg:px-20">
                        <div className="swiper-slide-title-1 text-5xl">{slide.title}</div>
                        <div className="swiper-slide-title-2 text-4xl">{slide.title}</div>
                        <div className="swiper-slide-text-3 md:w-1/3">{slide.para}</div>
                        <CARTBUTTON className='w-42 text-center rounded-md border border-grey-11 bg-button-s px-6 py-3 text-base font-medium text-grey-81 shadow-sm hover:bg-button-h' countryCode={countryCode} />
                    </div>
                </SwiperSlide>
            ))}
            <button className="swiper-button-prev hero-button-prev"></button>
            <button className="swiper-button-next hero-button-next"></button>
            <div className="hero-pagination swiper-pagination"></div>
        </Swiper >
    )
}

const slides = [
    {
        id: 1,
        title: "Slide 1",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo saepe vero aliquid assu Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "#",
        imageUrl: "https://studio.swiperjs.com/demo-images/models/01.jpg"
    },
    {
        id: 2,
        title: "Slide 2",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo saepe vero aliquid assu Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "#",
        imageUrl: "https://studio.swiperjs.com/demo-images/models/02.jpg"
    },
    {
        id: 3,
        title: "Slide 3",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo saepe vero aliquid assu Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "#",
        imageUrl: "https://studio.swiperjs.com/demo-images/models/03.jpg"
    },
    {
        id: 4,
        title: "Slide 4",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo saepe vero aliquid assu Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "#",
        imageUrl: "https://studio.swiperjs.com/demo-images/models/04.jpg"
    },
];