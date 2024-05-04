"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperProps, SwiperClass } from "swiper/react"
import { Thumbs, FreeMode, Zoom } from 'swiper/modules';
import { useState } from 'react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'styles/product.css'

export default function ProductSlider({ images }: { images: MedusaImage[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    return (
        <>
            <div className="flex-1">
                <Swiper thumbs={{ swiper: thumbsSwiper }} {...SwiperConfigMain} className="mainSwiper image-gallery rounded-sm shadow-sm shadow-grey-84 bg-grey-19">
                    {images.map((image, index) => (
                        <SwiperSlide key={image.id} className="aspect-w-3 aspect-h-4">
                            <div className="swiper-zoom-container p-2">
                                <Image
                                    src={image.url}
                                    alt={`Product image ${index}`}
                                    width={1200}
                                    height={1600}
                                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                                    className="object-contain object-center text-transparent w-full h-full"
                                    priority={index == 0 ? true : false}
                                    id={image.id}
                                    fetchPriority={index == 0 ? "high" : "auto"}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="">
                <Swiper onSwiper={setThumbsSwiper} {...SwiperConfigThumb} className="thumbSwiper h-24 md:h-full">
                    {images.map((image, index) => (
                        <SwiperSlide key={image.id} className="border-solid border border-grey-18 rounded-md bg-grey-19">
                            <Image
                                src={image.url}
                                alt={`Product thumbnail ${index + 1}`}
                                width={120}
                                height={160}
                                className="object-contain object-center text-transparent w-full h-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

const SwiperConfigThumb: SwiperProps = {
    slidesPerView: 'auto',
    spaceBetween: 3,
    freeMode: true,
    breakpoints: {
        '640': { direction: "horizontal" },
        '768': { direction: "vertical" },
        '1024': { direction: "vertical" }
    },
    modules: [Thumbs, FreeMode],
}

const SwiperConfigMain: SwiperProps = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    zoom: true,
    modules: [Thumbs, Zoom],
    preventInteractionOnTransition: true,
}