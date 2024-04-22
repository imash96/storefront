import { Swiper, type SwiperProps } from 'swiper/react';
import 'swiper/css'

type propType = {
    SwiperConfig: SwiperProps,
} & React.PropsWithChildren

export default function SwiperJs({ SwiperConfig, children }: propType) {
    return (
        <Swiper {...SwiperConfig}>
            {children}
        </Swiper>
    )
}