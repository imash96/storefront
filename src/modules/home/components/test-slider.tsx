"use client"

import Image from "next/image"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"
import RatingSystem from "@modules/common/rating-system"

const SwiperConfig: SwiperProps = {
    speed: 900,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: true },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2 },
        768: { slidesPerView: 3, spaceBetween: 20, slidesPerGroup: 3 },
        1024: { slidesPerView: 4, spaceBetween: 20, slidesPerGroup: 4 },
        1280: { slidesPerView: 5, spaceBetween: 30, slidesPerGroup: 5 },
    },
    modules: [Autoplay]
}

export default function TestimonalSlider() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Swiper {...SwiperConfig} className="review-swiper w-full h-full text-grey-83">
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="!flex flex-col items-center h-auto text-center">
                        <div className="slider_text relative mb-7 text-sm p-5 bg-grey-19 border-2 border-grey-16 rounded-md flex-grow basis-32">
                            {slide.para}
                        </div>
                        <Image src={slide.imageUrl} alt={slide.title} width={96} height={96} className="mb-5 border border-grey-85 object-cover w-24 h-24 rounded-full" />
                        <h3 className="mb-1 font-bold text-xl text-grey-81">{slide.title}</h3>
                        <div className="mb-1 text-xs">{slide.href}</div>
                        <RatingSystem rating={slide.rating} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

const slides = [
    {
        id: 1,
        title: "Katheryn Stark",
        para: "Dezign4fun is the most valuable business resource we have EVER purchased",
        href: "Data Scientist",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-ezekixl-akinnewu-1006227.jpg",
        rating: 5,
    },
    {
        id: 2,
        title: "Ruby Snow",
        para: "LI just can't get enough of DEZIGN4FUN. I want to get a T-Shirt with DEZIGN4FUN on it so I can show it off to everyone.",
        href: "Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-tuan-kiet-jr-1382731-scaled.jpg",
        rating: 4,
    },
    {
        id: 3,
        title: "Fay Walsh",
        para: "It's exactly what I've been looking for!",
        href: "Junior Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-steven-john-pascua-4096871-scaled.jpg",
        rating: 5,
    },
    {
        id: 4,
        title: "Mae Hawkins",
        para: "DEZIGN4FUN was the best investment I ever made",
        href: "Manager Group Executive",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-godisable-jacob-871495.jpg",
        rating: 2,
    },
    {
        id: 5,
        title: "Katheryn Stark",
        para: "Dezign4fun is the most valuable business resource we have EVER purchased",
        href: "Data Scientist",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-ezekixl-akinnewu-1006227.jpg",
        rating: 3,
    },
    {
        id: 6,
        title: "Fay Walsh",
        para: "It's exactly what I've been looking for!",
        href: "Junior Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-steven-john-pascua-4096871-scaled.jpg",
        rating: 5,
    },
    {
        id: 7,
        title: "Ruby Snow",
        para: "LI just can't get enough of DEZIGN4FUN. I want to get a T-Shirt with DEZIGN4FUN on it so I can show it off to everyone.",
        href: "Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-tuan-kiet-jr-1382731-scaled.jpg",
        rating: 5,
    },
    {
        id: 8,
        title: "Mae Hawkins",
        para: "DEZIGN4FUN was the best investment I ever made",
        href: "Manager Group Executive",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-godisable-jacob-871495.jpg",
        rating: 4,
    },
    {
        id: 9,
        title: "Ruby Snow",
        para: "LI just can't get enough of DEZIGN4FUN. I want to get a T-Shirt with DEZIGN4FUN on it so I can show it off to everyone.",
        href: "Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-tuan-kiet-jr-1382731-scaled.jpg",
        rating: 4,
    },
    {
        id: 10,
        title: "Fay Walsh",
        para: "It's exactly what I've been looking for!",
        href: "Junior Developer",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-steven-john-pascua-4096871-scaled.jpg",
        rating: 5,
    },
    {
        id: 11,
        title: "Mae Hawkins",
        para: "DEZIGN4FUN was the best investment I ever made",
        href: "Manager Group Executive",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-godisable-jacob-871495.jpg",
        rating: 2,
    },
    {
        id: 12,
        title: "Katheryn Stark",
        para: "Dezign4fun is the most valuable business resource we have EVER purchased",
        href: "Data Scientist",
        imageUrl: "https://dezign4fun.com/wp-content/uploads/2022/03/pexels-ezekixl-akinnewu-1006227.jpg",
        rating: 3,
    },
];