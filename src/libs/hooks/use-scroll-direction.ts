import { useEffect, useState } from "react";

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<"down" | "up" | "top" | null>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY < 65 ? "top" : scrollY > lastScrollY ? "down" : "up";
            (direction !== scrollDirection && (scrollY - lastScrollY > 15 || scrollY - lastScrollY < -15)) && setScrollDirection(direction);
            lastScrollY = scrollY > 0 ? scrollY : 0;
        }
        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    });

    return scrollDirection;
};