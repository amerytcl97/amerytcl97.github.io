import { useCallback, useLayoutEffect, useState } from "react";

function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [direction, setDirection] = useState("up");

    const updatePosition = useCallback(() => {
        setScrollPosition(window.scrollY);
        if (window.scrollY > scrollPosition) {
            setDirection('down');
        }
        if (window.scrollY < scrollPosition) {
            setDirection("up");
        }
    }, [scrollPosition])
    useLayoutEffect(() => {
        window.addEventListener("scroll", updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);
    }, [updatePosition])

    return { scrollPosition, direction }
}

export default useScroll;