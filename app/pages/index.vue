<script setup lang="ts">
import type { MotionValue } from 'motion-v';

useSeoMeta({
    title: 'Welcome',
    description: 'Making disciples of all nations',
    robots: 'index, follow'
});


const parallaxFlows = useParallaxFlows();
const parallaxVariants = useParallaxVariants();
const pageCardsData = useCards();
const timedCarousals = useTimedCarousels();
// the additions is to account for the extra empty section that aids in the sticky
// scrolling
const parallaxTotal = parallaxFlows.length + parallaxVariants.length;
const parallaxSectionHeight = `${parallaxTotal + 1}00vh`;
// const parallaxSectionHeight = `h-[${parallaxFlows.length + 1}00vh]`;
// const parallaxSectionHeight = `h-[${parallaxFlows.length + 1}00vh]`;
const parallaxScrollSections = divideIntoParts(1, parallaxTotal + 1 + 1);
const parallaxSectionParent = useTemplateRef('parallaxSectionParent');
var parallaxScroll: {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
};
var parallaxFlowsProgress: MotionValue<number>[];
var parallaxVariantProgress: MotionValue<number>[];


//to detect scroll progress for an individual parallax flow component
function getParallaxScrollProgress(index: number) {
    return useTransform(
        parallaxScroll.scrollYProgress,
        [parallaxScrollSections[index]!, parallaxScrollSections[index + 1]!],
        [0, 1]
    )
}

// //-----------------Parallax---------------------

// const mainContainerRef = useTemplateRef('mainContainerRef');
// // const cardsRefs = useTemplateRef('pageCards');

// // const rowCount = "grid-rows-" + Math.ceil(pageCardsData.length / 2);


onMounted(() => {
    // console.log("parallaxScrollSections: ", JSON.stringify(parallaxScrollSections));
    parallaxScroll = useScroll({
        target: parallaxSectionParent,
        offset: ['start start', 'end start'],
    });
    parallaxFlowsProgress = parallaxFlows.map((parallaxFlowData, index) =>
        getParallaxScrollProgress(index)
    );
    parallaxVariantProgress = parallaxVariants.map((parallaxVariantData, index) =>
        getParallaxScrollProgress(parallaxFlows.length + index)
    );

    // console.log("pageCardsData:", JSON.stringify(pageCardsData.value));
})
</script>

<template>
    <section>
        <UContainer ref="mainContainerRef" class="px-0 grid grid-flow-row-dense grid-cols-10
                        lg:grid-cols-9 gap-0 sm:gap-6">
            <PageCard v-for="(cardData, index) in pageCardsData" :pageCardData="cardData"
                :offset="index">
            </PageCard>
        </UContainer>
        <ClientOnly>
            <div ref="parallaxSectionParent" class="cursor-crosshair" :style="{ height: parallaxSectionHeight }">
                <div v-for="(parallaxFlowData, index) in parallaxFlows" class="sticky top-0">
                    <ParallaxFlow :parallaxFlow="parallaxFlowData" :scrollYProgress="parallaxFlowsProgress[index]!" />
                </div>
                <div v-for="(parallaxVariantData, index) in parallaxVariants" class="sticky top-0">
                    <ParallaxVariant :parallaxVariant="parallaxVariantData"
                        :scrollYProgress="parallaxVariantProgress[index]!" />
                </div>
            </div>
            <TimedCarousel v-for="timedCarousal in timedCarousals" :carouselCardData="timedCarousal" :offset="0" />
        </ClientOnly>
    </section>
</template>
