<script setup lang="ts">
// import type { setInterval } from '#imports';
import type { CardData, CardAnimation } from '~/types';

//the const defines defaults, the defineProps is used for typing
const {
    carouselCardData = {} as CardData,
    offset = 0,
    bodyButtonHandler = (event: MouseEvent) => { }
} = defineProps<{
    carouselCardData: CardData,
    offset: number
    bodyButtonHandler?: (event: MouseEvent) => void
}>();
const route = useRoute();

var carouselIndex = ref(carouselCardData.carousels?.length - 1);

const carousel = useTemplateRef('carousel');
const autoPlayOptions = {
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
}
const defaultTransition = {
    duration: 1,
    //will happen after the text animation is complete
    // delay: ((delayIndex) / 10) + .4,
    ease: "easeOut"
}

var element_id: string;
const elementRef = useTemplateRef('elementRef');
if (typeof(route.fullPath) !== 'undefined' && route.fullPath.includes("#")) {
    element_id = route.fullPath.split("#").at(-1)!;
}

onMounted(() => {
    carousel.value?.emblaApi?.on('autoplay:select', () => {
        carouselIndex.value++;
        if (carouselIndex.value === carouselCardData.carousels?.length) {
            carouselIndex.value = 0;
        }
        // motionCarouselIndex.set(carouselIndex);
    });
    if (element_id === elementRef.value?.id) {
        nextTick(() => {
            setTimeout(() => {
                elementRef.value?.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                );
            }, 500) //not sure if this is good code lol
        })
    }
})
</script>

<template>
    <!-- <div :style="{ backgroundColor: 'red' }"></div> -->
    <div :class="carouselCardData.class"
        ref="elementRef" :id="transformToId(carouselCardData.title!)">
        <UCard class="bg-transparent text-white z-3 rounded-none"
            :variant="carouselCardData.variant" :class="carouselCardData.cardClass">
            <template v-if="carouselCardData.showHeader" #header>
                <div :class="`flex w-full ${carouselCardData.contentJustification}`">
                    <div v-if="carouselCardData.headerButtons" class="flex flex-row flex-wrap gap-2"
                        :class="carouselCardData.headerButtonsParentClass">
                        <UButton v-for="buttonData in carouselCardData.headerButtons" :label="buttonData.label"
                            :variant="buttonData.variant" :color="buttonData.color" :class="buttonData.class"
                            :icon="buttonData.icon" :to="buttonData.link" target="_blank" />

                    </div>
                    <h2 v-if="carouselCardData.title" class="text-2xl font-semibold"
                        :class="carouselCardData.titleClass">
                        {{ carouselCardData.title }}
                    </h2>
                </div>
            </template>

            <div class="w-full flex justify-center">
                <UCarousel ref="carousel" v-if="carouselCardData.carousels" arrows loop 
                        :autoplay="autoPlayOptions"
                        :items="carouselCardData.carousels" v-slot="{ item, index }"
                        :ui="carouselCardData.carouselsUi"
                        :class="carouselCardData.carouselsClass">
                        <PageCard :pageCardData="(item as CardData)" :offset="index" />
                    </UCarousel>
            </div>

            <template v-if="carouselCardData.showFooter" #footer>
                <h2 v-if="carouselCardData.footer" class="w-full flex" :class="carouselCardData.contentJustification">
                    {{ carouselCardData.footer }}
                </h2>
                <div v-if="carouselCardData.footerButtons"
                    :class="`flex flex-row flex-wrap gap-2 ${carouselCardData.footerButtonsParentClass}`">
                    <UButton v-for="buttonData in carouselCardData.footerButtons" :label="buttonData.label"
                        :variant="buttonData.variant" color="neutral" :class="buttonData.class"
                        :icon="buttonData.icon" :to="buttonData.link" />
                </div>
            </template>
        </UCard>
        
    </div>
</template>