<script setup lang="ts">
import type { MotionValue } from 'motion-v';

useSeoMeta({
    // titleTemplate: 'Home %separator %s',
    title: 'Welcome',
    description: 'Making disciples of all nations',
    //ToDo: get this from environment variaable instead
    // ogUrl: url.href,
    // ogTitle: 'Exodus CHurch',
    // ogImage: 'http://localhost:3000/images/main/about.png',
    // ogDescription: 'Welcome to Exodus Church',
    robots: 'index, follow'
});
defineOgImageComponent('Main', {
    headline: 'Welcome To',
    title: '%siteName',
    logo: '/images/exodus-missions-logo-icon.png',
    socials: [
        { label: '@exoduschurch_', icon: 'i-mdi-instagram' },
        { label: '@ExodusMissions', icon: 'i-mdi-youtube' },
    ],
})

// const parallaxFlows = useParallaxFlows();
// const parallaxVariants = useParallaxVariants();
// const pageCardsData = useCards();
// const timedCarousals = useTimedCarousels();
// // the additions is to account for the extra empty section that aids in the sticky
// // scrolling
// const parallaxTotal = parallaxFlows.length + parallaxVariants.length;
// const parallaxSectionHeight = `${parallaxTotal + 1}00vh`;
// // const parallaxSectionHeight = `h-[${parallaxFlows.length + 1}00vh]`;
// // const parallaxSectionHeight = `h-[${parallaxFlows.length + 1}00vh]`;
// const parallaxScrollSections = divideIntoParts(1, parallaxTotal + 1 + 1);
// const parallaxSectionParent = useTemplateRef('parallaxSectionParent');
// var parallaxScroll: {
//     scrollX: MotionValue<number>;
//     scrollY: MotionValue<number>;
//     scrollXProgress: MotionValue<number>;
//     scrollYProgress: MotionValue<number>;
// };
// var parallaxFlowsProgress: MotionValue<number>[];
// var parallaxVariantProgress: MotionValue<number>[];

// onMounted(() => {
//     // console.log("parallaxScrollSections: ", JSON.stringify(parallaxScrollSections));
//     parallaxScroll = useScroll({
//         target: parallaxSectionParent,
//         offset: ['start start', 'end start'],
//     });
//     parallaxFlowsProgress = parallaxFlows.map((parallaxFlowData, index) =>
//         getParallaxScrollProgress(index)
//     );
//     parallaxVariantProgress = parallaxVariants.map((parallaxVariantData, index) =>
//         getParallaxScrollProgress(parallaxFlows.length + index)
//     );
// })

// //to detect scroll progress for an individual parallax flow component
// function getParallaxScrollProgress(index: number) {
//     return useTransform(
//         parallaxScroll.scrollYProgress,
//         [parallaxScrollSections[index]!, parallaxScrollSections[index + 1]!],
//         [0, 1]
//     )
// }

// //-----------------Parallax---------------------

// const mainContainerRef = useTemplateRef('mainContainerRef');
// // const cardsRefs = useTemplateRef('pageCards');

// const rowCount = "grid-rows-" + Math.ceil(pageCardsData.length / 2);

</script>

<template>
    <div>
        <p>Hello From Nuxt</p>
    </div>
</template>
