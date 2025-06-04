import type { CardAnimation, CardData } from "~/types";
export const defaultCardAnimation: CardAnimation = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: .8,
            delay: .4
        },
    },
    backdropOffscreen: {
        opacity: 0,
    },
    backdropOnScreen: {
        opacity: 1,
        transition: {
            duration: .6,
            delay: .6,
            ease: "easeOut"
        },
    },
    textOffscreen: {
        opacity: 0,
        y: 50,
    },
    textOnScreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            delay: .6,
            ease: "easeOut"
        },
    },

};

export const defaultCarousalAnimation: CardAnimation = {
    offscreen: { opacity: 1, },
    onscreen: { opacity: 1 },
    textOffscreen: { opacity: 1 },
    textOnScreen: { opacity: 1 },
    backdropOffscreen: { opacity: 1 },
    backdropOnScreen: { opacity: 1 }
};