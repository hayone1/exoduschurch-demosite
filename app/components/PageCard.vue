<script setup lang="ts">
import { motion } from 'motion-v';
import type { CardData, CardAnimation } from '~/types';

//the const defines defaults, the defineProps is used for typing
const {
    pageCardData = {} as CardData,
    offset = 0,
    bodyButtonHandler = (event: MouseEvent) => { }
} = defineProps<{
    pageCardData: CardData,
    offset: number
    bodyButtonHandler?: (event: MouseEvent) => void
}>();

const pageCardAnimation = (delayIndex: number): CardAnimation => {
    return pageCardData.cardAnimation ?? {
        offscreen: {
            opacity: 0,
            y: 300,

        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: .8,
                delay: (delayIndex) / 10
            },
        },
        backdropOffscreen: {
            opacity: 0,
            // backdropFilter: "blur(15px)"
        },
        backdropOnScreen: {
            // backdropFilter: "blur(0px)",
            opacity: 1,
            transition: {
                duration: .6,
                //will happen after the text animation is complete
                delay: ((delayIndex) / 10) + .1,
                ease: "easeOut"
            },
        },
        textOffscreen: {
            opacity: 0,
            y: 50,
            // backdropFilter: "blur(15px)"
        },
        textOnScreen: {
            y: 0,
            // backdropFilter: "blur(0px)",
            opacity: 1,
            transition: {
                duration: .6,
                //will finish after the backdrop animation is complete
                delay: ((delayIndex) / 10) + .3,
                ease: "easeOut"
            },
        },

    };
}


</script>

<template>
    <motion.div class="sm:rounded-lg" :class="pageCardData.class ?? pageCardData.altclass"
        :initial="pageCardAnimation(offset).offscreen" :whileInView="pageCardAnimation(offset).onscreen"
        :inViewOptions="{ once: true, margin: '50% 0px' }">
        <div class="absolute size-full pointer-events-none top-0 rounded-lg"
            :class="pageCardData.backdropParentClass">
            <UCarousel v-if="pageCardData.backgroundImages" v-slot="{ item }" fade :autoplay="{ delay: 5000 }"
                :items="pageCardData.backgroundImages" class="size-full">
                <div :class="item.class">
                    <NuxtImg :src="item.url" :alt="item.alt" :placeholder="item.placeholder"
                        loading="lazy" fit="cover" />
                </div>
            </UCarousel>

        </div>
        <div v-if="pageCardData.backdropClasses"
            class="absolute size-full pointer-events-none top-0 overflow-clip rounded-lg"
            :class="pageCardData.backdropParentClass">
            <motion.div v-for="backdropClass in pageCardData.backdropClasses"
                class="absolute size-full rounded-none sm:rounded-lg" :class="backdropClass"
                :initial="pageCardAnimation(offset).backdropOffscreen"
                :whileInView="pageCardAnimation(offset).backdropOnScreen" :inViewOptions="{ once: true }" />

        </div>
        <UCard :variant="pageCardData.variant" class="text-white z-3 rounded-none sm:rounded-lg"
            :class="pageCardData.cardClass">

            <template v-if="pageCardData.showHeader" #header>
                <div class="flex w-full" :class="pageCardData.contentJustification">
                    <div v-if="pageCardData.headerButtons" class="flex flex-row flex-wrap gap-2"
                        :class="pageCardData.headerButtonsParentClass">
                        <UButton v-for="buttonData in pageCardData.headerButtons" :label="buttonData.label"
                            :variant="buttonData.variant" :color="buttonData.color" :class="buttonData.class"
                            :icon="buttonData.icon" :to="buttonData.link" target="_blank" />

                    </div>
                    <h2 v-if="pageCardData.title" class="text-2xl font-semibold" :class="pageCardData.titleClass">
                        {{ pageCardData.title }}
                    </h2>
                </div>
            </template>

            <motion.div :data-name="`main-card-body-${offset}`" :initial="pageCardAnimation(offset).textOffscreen"
                class="flex flex-col" :class="pageCardData.contentJustification"
                :whileInView="pageCardAnimation(offset).textOnScreen" :inViewOptions="{ once: true }">

                <p v-if="pageCardData.body" class="flex justify-center" :class="pageCardData.bodyClass">
                    {{ pageCardData.body }}
                </p>
                <TextWithImage v-if="pageCardData.textWithImage" class="flex justify-center"
                    :textWithImage="pageCardData.textWithImage" />

                <ClientOnly>
                    <ImgCompareCarousal v-if="pageCardData.comparisonCarousals"
                        :carousalsContent="pageCardData.comparisonCarousals" />
                </ClientOnly>
                <RibbonBackground v-if="pageCardData.bodyRibbon" />
                <p v-if="pageCardData.body" :class="pageCardData.bodyClass">{{ pageCardData.body }}</p>

                <BasicCardTable v-if="pageCardData.bodies" :content="pageCardData.bodies" />

                <div v-if="pageCardData.bodyButtons" class="flex flex-row flex-wrap gap-2"
                    :class="pageCardData.bodyButtonsParentClass">
                    <UButton v-for="buttonData in pageCardData.bodyButtons" :label="buttonData.label"
                        :variant="buttonData.variant" :color="buttonData.color" :class="buttonData.class"
                        :icon="buttonData.icon" @click="bodyButtonHandler" :to="buttonData.link" />

                </div>

            </motion.div>

            <template v-if="pageCardData.showFooter">
                <h2 v-if="pageCardData.footer" class="w-full flex" :class="pageCardData.contentJustification">
                    {{ pageCardData.footer }}
                </h2>
                <div v-if="pageCardData.footerButtons" class="flex flex-row flex-wrap gap-2"
                    :class="pageCardData.footerButtonsParentClass">
                    <UButton v-for="buttonData in pageCardData.footerButtons" :label="buttonData.label"
                        :variant="buttonData.variant" :color="buttonData.color" :class="buttonData.class"
                        :icon="buttonData.icon" :to="buttonData.link" target="_blank" />
                </div>
            </template>
        </UCard>
    </motion.div>
</template>


<style scoped>
.logo-title {
    font-family: 'Roboto', sans-serif;
}
</style>