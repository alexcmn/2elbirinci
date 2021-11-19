import { useEffect, useState } from 'react'

export default function useWindowScroll() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset; 
            if (currentPosition > scrollTop) {
                setScrolling(false);
            } else {
                setScrolling(true);
            }
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return{
        scrolling,
        scrollTop
    }
}