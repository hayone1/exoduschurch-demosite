<script setup lang="ts">
import { useElementBounding, useElementSize, useMouseInElement, useWindowScroll } from '@vueuse/core'
import type { PointerLocation, IParallaxFlow } from '~/types';
import type { Edge, Node } from '@vue-flow/core';
import { VueFlow, Panel, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background'
import { animate, frame, motion, MotionValue, motionValue, stagger, useMotionValue, useSpring } from "motion-v"
import type { Reactive, WatchHandle } from 'vue';

const {
    parallaxFlow = {} as IParallaxFlow,
    scrollYProgress = motionValue(0),
} = defineProps<{
    parallaxFlow: IParallaxFlow,
    scrollYProgress: MotionValue
}>();


const { y: xScroll } = useWindowScroll({ behavior: 'smooth' });
const { fitView } = useVueFlow();
const elementRef = useTemplateRef('elementRef');
const parallaxFocusThresholdGroups = parallaxFlow.nodeGroups.map(
    nodeGroup => ({
        label: nodeGroup.optionButton.label,
        parallaxFocusThreshold: divideIntoParts(
            1, nodeGroup.visibilityNodesGroup.length + 1
        )
    })
);

const route = useRoute();
const xPoint = useMotionValue(0);
const yPoint = useMotionValue(0);
const springConfig = { damping: 5, stiffness: 20, restDelta: 0.001 };

const mouseFollower = useTemplateRef('mouseFollower');
const mouseFollowerSize = useElementSize(mouseFollower);
const mainContainer = useTemplateRef<HTMLDivElement>('mainContainer');
const mainContainerSize = useElementSize(mainContainer);
const mouseInMainContainer = useMouseInElement(mainContainer);

const mouseFollowerX = useSpring(xPoint, springConfig);
const mouseFollowerY = useSpring(yPoint, springConfig);
var visibleNodeGroups: string[] = [];

const scrollHintAnim = ({
    opacity: [0, 1, 0],
});
const scrollHintTransition = (delay: number) => ({
    repeat: Infinity,
    duration: 1,
    repeatType: 'mirror' as const,
    ease: 'easeOut',
    delay: delay,
    repeatDelay: 3,
})

var element_id: string;
if (typeof (route.fullPath) !== 'undefined' && route.fullPath.includes("#")) {
    element_id = route.fullPath.split("#").at(-1)!;
}

var nodes: globalThis.Ref<
    Node<any, any, string>[],
    Node<any, any, string>[]> = ref([]);
// var nodes: Reactive<Node<any, any, string>[]>;
var edges: Edge[];
var sizeWatcher: WatchHandle;
//---------Nodes Animation-----------
const foregroundTitleVisible = ref(true);
const buttonChoice = ref("");
const buttonChoicesVisible = computed(() =>
    (!foregroundTitleVisible.value)
);
const buttonChoicesTransition = (delay: number) => ({
    delay: delay,
    repeat: Infinity,
    repeatDelay: .3,
    repeatType: "loop" as const,
    duration: 3
});

useMotionValueEvent(scrollYProgress, 'change', (currentProgress) => {
    // console.log("[Flow Item]: parallaxScroll Value: ", currentProgress)
    const makeTitleVisible = currentProgress > 0.15 ? false : true;
    if (foregroundTitleVisible.value === false && makeTitleVisible) {
        buttonChoice.value = "";
    }
    foregroundTitleVisible.value = makeTitleVisible;
    //careful! this must not be null
    const visibleNodeGroup = parallaxFlow.nodeGroups.find(group =>
        group.optionButton.label === buttonChoice.value
    );
    if (typeof(visibleNodeGroup) === 'undefined') { return; }
    const visibleThresholdGroup = parallaxFocusThresholdGroups.find(group =>
        group.label === visibleNodeGroup?.optionButton.label
    );
    visibleThresholdGroup?.parallaxFocusThreshold
        .forEach((threshold, index) => {
            const offsetThreshold = (threshold + .05);
            //conditions ensure animation only runs on first scroll down
            //which doesn't seem to work lol
            if (
                visibleNodeGroups.length <= visibleNodeGroup.visibilityNodesGroup.flat().length &&
                scrollYProgress.getPrevious() < offsetThreshold &&
                currentProgress >= threshold
            ) {
                visibleNodeGroups = visibleNodeGroup.visibilityNodesGroup.slice(
                    0, index + 1
                ).flat();
                // console.log("current Visibility Group: ", JSON.stringify(visibleNodeGroups));
                updateNodes();
                fitView({
                    nodes: visibleNodeGroups,
                    // nodes: parallaxFlow.focusNodes.slice(0, index + 1),
                    duration: 500
                });

            }
        });
});

// const pulsingBackground = {
//     scale: 1.5,
//     opacity: 0,
// }
// const pulsingBackgroundTransition = (delay: number) => ({
//     delay: delay,
//     duration: 3,
//     repeat: Infinity,
//     repeatType: 'loop' as const
// })

const mouseMovementWatcher = watchEffect(
    () => {
        xPoint.set(
            mouseInMainContainer.elementX.value -
            mouseInMainContainer.elementWidth.value / 2
            // mouseFollowerSize.width.value / 2
        );
        yPoint.set(
            mouseInMainContainer.elementY.value -
            mouseFollowerSize.height.value / 2
        );
        // handleMouseMove(
        //     mouseInMainContainer.elementX.value,
        //     mouseInMainContainer.elementY.value,
        // )
    });
watch(mouseInMainContainer.isOutside, (isOutside) => {
    if (!isOutside) {
        mouseMovementWatcher.resume();
    }
    else {
        mouseMovementWatcher.pause();
    }
})

function focusOnChoices() {
    window.scrollTo({
        behavior: 'smooth',
        top: mainContainer.value?.getBoundingClientRect().top!
            + window.scrollY + 300
    })
    // xScroll.value += 300;
}

function setButtonChoice(label: string) {
    if (buttonChoice.value === "") {
        buttonChoice.value = label;
        return;
    }
    buttonChoice.value = "";
    console.log("Scroll To:", (scrollYProgress.get()))
    window.scrollTo({
        behavior: 'smooth',
        top: window.scrollY - (scrollYProgress.get() * 500) + 200

    })
}

function updateNodes() {
    // updateNodes();
    sizeWatcher = watchEffect(() => {
        nodes.value = parallaxFlow.nodes(
            mainContainerSize.width.value,
            mainContainerSize.height.value,
        ).map(node => ({
            ...node,
            hidden: !visibleNodeGroups.includes(node.id)
        }));
    })
}


onMounted(() => {

    // updateNodes();
    // edges = parallaxFlow.edges;

    if (element_id === elementRef.value?.id) {
        nextTick(() => {
            setTimeout(() => {
                // console.log("element_id found:", element_id);
                elementRef.value?.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                );
            }, 500) //not sure if this is good code lol
        })
    }
});

// onUnmounted(() => {
//     sizeWatcher.stop();
// })

</script>
<template>
    <div ref="mainContainer">
        <div class="absolute size-full overflow-hidden flex justify-center border-2 border-green-300">
            <motion.div class="absolute size-10 bg-transparent
                border-green-500 border-1 rounded-full pointer-events-none"
                :style="{ x: mouseFollowerX, y: mouseFollowerY }" ref="mouseFollower" />
            <h2 class="absolute self-center font-bold text-8xl opacity-25">
                {{ parallaxFlow.title }}
            </h2>
            <AnimatePresence>
                <motion.div v-if="foregroundTitleVisible" class="absolute self-center" key="foregroundTitle"
                    :exit="{ opacity: 0 }">
                    <UButton :label="parallaxFlow.title" variant="subtle"
                        class="flex justify-center text-8xl rounded-full size-80" size="xl" @click="focusOnChoices" />
                </motion.div>

            </AnimatePresence>
            <!-- <AnimatePresence :initial="false">
            </AnimatePresence> -->
            <div class="absolute bottom-0 right-1/2 translate-x-1/2 flex flex-col items-center">
                <motion.div :animate="scrollHintAnim" :transition="scrollHintTransition(0.2)" :initial="{ opacity: 1 }">
                    <UIcon name="i-fluent-chevron-down-20-filled" size="30" />
                </motion.div>
                <motion.div :animate="scrollHintAnim" :transition="scrollHintTransition(0.4)" :initial="{ opacity: 1 }"
                    class="-translate-y-6">
                    <UIcon name="i-fluent-chevron-down-20-filled" size="30" />
                </motion.div>
                <p class="text-muted text-center -translate-y-9 ">Scroll</p>
            </div>
            <motion.div key="buttonChoices" v-if="buttonChoicesVisible" class="grid grid-cols-1 content-between z-5"
                :animate="{ height: 200 }" :class='buttonChoice === "" ? "self-center" : "self-start translate-y-20"'
                :exit="{ opacity: 0 }">
                <motion.div v-for="nodeGroup in parallaxFlow.nodeGroups">
                    <motion.div v-for="index in [0, 1, 2]" class="absolute w-35 h-10 rounded-3xl -z-1"
                        :class="nodeGroup.pulseColor" :animate="{ scale: 1.5, opacity: 0 }"
                        :transition="buttonChoicesTransition(index)" />
                    <UButton v-if='buttonChoice === nodeGroup.optionButton.label || buttonChoice === ""'
                        :label="nodeGroup.optionButton.label" class="rounded-full w-full justify-center"
                        :variant="nodeGroup.optionButton.variant" :color="nodeGroup.optionButton.color"
                        :class="nodeGroup.optionButton.class" :icon="nodeGroup.optionButton.icon" size="xl"
                        @click="setButtonChoice(nodeGroup.optionButton.label)">
                    </UButton>
                </motion.div>
            </motion.div>
        </div>
        <div ref="elementRef" :id="transformToId(parallaxFlow.title)" class="h-screen overfow-hidden z-4">
            <VueFlow v-for="nodeGroup in parallaxFlow.nodeGroups.filter(nodeGrp =>
                nodeGrp.optionButton.label === buttonChoice)" :nodes="nodes" :edges="edges" :zoom-on-scroll="false"
                :zoom-on-pinch="false" :zoom-on-double-click="false" :pan-on-scroll="false" :pan-on-drag="false"
                :prevent-scrolling="true">
                <Background class="light:hidden" :patternColor="parallaxFlow.backGroundColor.value.patternBackground"
                    :size="1.4" />
            </VueFlow>
        </div>

    </div>
</template>


<style scoped>
.node-1 {
    opacity: 0.3;
}
</style>