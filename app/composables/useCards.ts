// import { defaultCardAnimation, defaultCarousalAnimation } from "~/defaults";
import { defaultCardAnimation, defaultCarousalAnimation } from "~/defaults";
import type { ButtonContent, CardAnimation, CardData } from "~/types";


export const useCards = () => {

    return [
        {
            title: "Welcome To",
            contentJustification: "justify-start",
            textWithImage: {
                pretext: "Ex",
                imageUrl: "/images/exodus-missions-logo-icon.png",
                postText: "dus Church",
                imageClass: "h-15 sm:h-20 pb-5"
            },
            bodyButtons: [
                {
                    label: "I'm New",
                    color: 'neutral',
                    link: 'https://portal.exoduschurch.global/external/register/'
                },
                {
                    label: "About us",
                    color: 'neutral',
                    variant: 'outline',
                    link: '/about'
                },
            ],
            footerButtonsParentClass: "pt-10",
            footerButtons: [
                {
                    label: "It's Supernatural School SZN! Learn more →",
                    variant: "solid",
                    class: "rounded-full text-green-600 bg-neutral-800",
                    link: "https://instagram.com/p/DKXwS_7oa0a/"
                }
            ],
            class: "z-0 flex flex-row col-span-full -translate-y-3",
            cardClass: "mt-20 bg-gradient-to-r h-[70vh]",
            variant: "solid",
            footer: "Making disciples of all nations.",
            showFooter: true,
            showHeader: true,
            backdropClasses: [
                "bg-cover mask-contain mask-repeat-x mask-[url(/images/vector/brush-mask-1-from-top.svg)] bg-[url(/images/main/supernatural-school-december-7.jpg)]",
                "bg-cover mask-t-from-60% mask-t-to-70% sm:mask-t-from-10% sm:mask-t-to-60% bg-[url(/images/main/supernatural-school-december-7.jpg)]",
                "backdrop-grayscale mask-t-from-60% mask-t-to-80% mask-r-from-30% mask-r-to-50%"
            ]
        },
        {
            // title: "Testimonies",
            contentJustification: "justify-center",
            class: "col-span-full md:col-span-5 lg:col-span-3 -translate-y-3",
            cardClass: "h-80 bg-transparent flex justify-center items-center",
            variant: "solid",
            //should apply to all button?
            bodyButtonsParentClass: "justify-center",
            bodyButtons: [{
                label: "Testimonies",
                variant: 'link',
                link: '/testimonies-list',
                // link: 'https://bit.ly/exodus_testimonies',
                class: "text-5xl md:text-4xl font-extrabold text-neutral-600"
            }],
            backdropClasses: [
                "mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-white"
            ]
        },
        {
            // title: "Socials",
            contentJustification: "justify-center",
            class: "col-span-full md:col-span-5 lg:col-span-3 -translate-y-3",
            cardClass: "h-80 bg-transparent flex justify-center items-center",
            variant: "solid",
            bodyButtonsParentClass: "justify-center h-40",
            bodyButtons: [
                {
                    icon: "i-mdi-instagram",
                    variant: 'solid',
                    class: "text-5xl md:text-4xl font-extrabold bg-linear-65 from-purple-500 to-red-500",
                    link: "https://www.instagram.com/exoduschurch_/#"
                },
                {
                    icon: "i-mdi-telegram",
                    variant: 'solid',
                    class: "text-5xl md:text-4xl font-extrabold bg-blue-500",
                    link: "https://t.me/ExodusChurch"
                },
                {
                    icon: "i-mdi-youtube",
                    variant: 'solid',
                    class: "text-5xl md:text-4xl font-extrabold bg-red-500",
                    link: "https://www.youtube.com/@ExodusMissions"
                },
            ],
            backdropClasses: [
                "mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-neutral-600/30"
            ]
        },
        {
            // title: "Service Units",
            contentJustification: "justify-center",
            class: "col-span-full md:col-span-5 lg:col-span-3 -translate-y-3",
            cardClass: "h-80 bg-transparent flex justify-center items-center",
            variant: "solid",
            bodyButtonsParentClass: "justify-center",
            bodyButtons: [{
                label: "Serve",
                variant: 'link',
                class: "text-5xl font-extrabold text-neutral-600",
                link: "/community#technical-unit"
            }],
            backdropClasses: [
                "mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-white"
            ]
        },
        {
            // title: "Service Times",
            contentJustification: "justify-center",
            class: "col-span-full md:col-span-5 lg:col-span-4 -translate-y-3",
            cardClass: "dark:bg-transparent md:h-100",
            variant: "solid",
            headerButtons: [{
                variant: "link",
                icon: "i-fluent-location-ripple-20-regular",
                class: "text-5xl text-white",
                link: "https://maps.app.goo.gl/iSkjrBP6eAdRfNX88"
            }],
            showHeader: true,
            bodies: [
                {
                    title: "SUNDAY",
                    body: "Kobi's food, Oregun, Ikeja",
                    footer: "10:00 AM"
                },
                {
                    title: "THURSDAY",
                    body: "Online",
                    footer: "6:00 PM"
                },
            ],
            backdropClasses: [
                "bg-cover bg-[url(/images/vector/navigation-illustration.svg)] mask-x-from-20% mask-y-from-20%"
            ],

        },
        {
            // title: "Pastor",
            body: "Meet our Pastor",
            bodyClass: "text-6xl",
            contentJustification: "justify-start",
            class: "col-span-full lg:col-span-5 flex flex-row h-100 border-2 -translate-y-3",
            cardClass: "mt-20 bg-gradient-to-r",
            variant: "solid",
            bodyButtons: [
                {
                    label: "Abhulimen Desmond",
                    color: 'neutral',
                    link: '/about#meet-out-pastor'
                },
            ],
            backdropClasses: [
                "bg-cover bg-[url(/images/people/pastor-desmond-1.jpg)] sm:bg-[url(/images/people/pastor-desmond-3-shape.jpg)] bg-right h-full",
                "backdrop-blur-xs sm:backdrop-blur-lg mask-cover mask-[url(/images/people/pastor-desmond-1-mask.png)] sm:mask-[url(/images/people/pastor-desmond-3-mask.png)] mask-right h-full",
            ]
        },
        {
            title: "Special Meetings",
            titleClass: "light:text-neutral-800",
            showHeader: true,
            contentJustification: "justify-center",
            cardAnimation: defaultCarousalAnimation,
            comparisonCarousals: [
                [
                    {
                        title: "August",
                        bodyButtons: [{
                            label: "Supernatural School",
                            variant: 'link',
                            color: 'secondary',
                            class: "text-3xl md:text-4xl font-extrabold text-white z-0",
                            link: "https://instagram.com/p/DKXwS_7oa0a/"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-2.jpg)]",
                            "-z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-august-2025.jpg)] sm:hidden",
                            "-z-1 backdrop-blur-xs hidden sm:block",
                            "-z-1 backdrop-grayscale sm:hidden"
                        ],
                    },
                    {
                        title: "December",
                        bodyButtons: [{
                            label: "Supernatural School",
                            variant: 'link',
                            color: 'primary',
                            class: "text-3xl md:text-4xl font-extrabold text-white",
                            link: "/events#supernatural-school"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-nkire.jpg)]",
                            "-z-1 backdrop-grayscale",
                        ],
                    },
                ],
                [
                    {
                        class: 'w-50',
                        title: "Ajah",
                        bodyButtons: [{
                            label: "RISE",
                            variant: 'link',
                            color: 'error',
                            class: "text-3xl md:text-4xl font-extrabold text-white"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-4.jpg)]",
                            "-z-1 bg-black/60"
                        ],
                    },
                    {
                        title: "Abuja",
                        bodyButtons: [{
                            label: "RISE",
                            variant: 'link',
                            color: 'warning',
                            class: "text-3xl md:text-4xl font-extrabold text-white"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-8.jpg)]",
                            "-z-1 bg-black/60"
                        ],
                    },
                    {
                        title: "Ibadan",
                        bodyButtons: [{
                            label: "RISE",
                            variant: 'link',
                            color: 'primary',
                            class: "text-3xl md:text-4xl font-extrabold text-white"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-[url(/images/events/supernatural-school-december-10.jpg)]",
                            "-z-1 bg-black/60"
                        ],
                    },
                    {
                        title: "United Kingdom",
                        bodyButtons: [{
                            label: "RISE",
                            variant: 'link',
                            color: 'secondary',
                            class: "text-3xl md:text-4xl font-extrabold text-white"
                        }],
                        backdropClasses: [
                            "-z-1 bg-cover bg-[url(/images/events/supernatural-school-december-11.jpg)]",
                            "-z-1 bg-black/60"
                        ],
                    },
                ],
            ].map(carousal => carousal.map(card => {
                return {
                    ...card,
                    cardAnimation: defaultCardAnimation,
                    contentJustification: "justify-center",
                    showFooter: true,
                    showHeader: true,
                    class: "h-100 -z-1",
                    cardClass: "bg-transparent",
                    variant: "solid",
                    bodyButtonsParentClass: "justify-center h-80",
                    // cardAnimation: defaultCarousalAnimation
                } as CardData
            })),
            class: "col-span-full",
            // cardClass: "h-100",
            variant: "subtle"
        },
    ] as CardData[]
}