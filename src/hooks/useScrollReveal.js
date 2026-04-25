import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * @param {object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default 0.15.
 * @param {string} options.rootMargin - Root margin for observer. Default "0px 0px -60px 0px".
 * @param {boolean} options.once - If true, only triggers once. Default true.
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export default function useScrollReveal({
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px",
    once = true,
} = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.unobserve(node);
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}
