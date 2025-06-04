<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import { useFocus } from '@vueuse/core';

// import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute();
const viewport = useViewport();
const colorMode = useColorMode();
const navLabels = [
  "home", "about", "sermons",
  "give", "events",
];
const backgroundColor = ref("bg-neutral-800/60");
const hoverStyle = ref("hover:scale-105 hover:bg-neutral-800");
const navClass = ref("text-white");
const navOpen = ref(false);

watch(colorMode, () => {
  if (colorMode.value === 'light') {
    backgroundColor.value = "bg-white/50";
    hoverStyle.value = "hover:scale-105";
    navClass.value = "text-black"
  }
  else {
    backgroundColor.value = "bg-neutral-800/60";
    hoverStyle.value = "hover:scale-105 hover:bg-neutral-800";
    navClass.value = "text-white"
  }
})

const navItems = computed(() => [
  // {
  //   label: navProps(navLabels[0]!).navLabel,
  //   value: viewport.breakpoint, //workaround to allow computed to run reactively
  //   icon: 'i-fluent-home-20-regular',
  //   avatar: {
  //     icon: 'i-fluent-home-20-regular'
  //   },
  //   to: '/',
  //   class: "hidden",
  //   // class: navProps(navLabels[0]!).navClass,
  //   active: route.path === '/',
  //   children: []
  // },
  {
    label: "About",
    icon: 'i-fluent-people-community-20-regular',
    avatar: {
      icon: 'i-fluent-people-community-20-regular'
    },
    // to: '/' + navLabels[3],
    // class: navProps(navLabels[1]!).navClass,
    active: route.path.includes("about"),
    children: [
      {
        label: 'About Us',
        to: '/about'
      },
      {
        label: 'Community',
        to: '/community'
      },
      {
        label: 'Technical Unit',
        to: '/community#technical-unit'
      },
      {
        label: 'Ushering Unit',
        to: '/community#ushering-unit'
      },
      {
        label: 'Choir Unit',
        to: '/community#choir-unit'
      },
      {
        label: 'Media & Publicity',
        to: '/community#media-unit'
      },
    ].map(child => ({
      ...child, class: navClass.value
    }))

  },
  {
    label: "Sermons",
    icon: 'i-fluent-headphones-sound-wave-20-filled',
    avatar: {
      icon: 'i-fluent-headphones-sound-wave-20-filled'
    },
    to: '/' + navLabels[2] + "-list",
    // class: navProps(navLabels[2]!).navClass,
    active: route.path.includes("sermons"),
    children: []
  },
  {
    label: "Give",
    icon: 'i-fluent-handshake-20-regular',
    avatar: {
      icon: 'i-fluent-handshake-20-regular'
    },
    to: '/#give',
    // class: navProps(navLabels[3]!).navClass,
    active: route.path.includes("give"),
    // target: '_blank'
  },
  {
    label: "Events",
    icon: 'i-fluent-calendar-20-regular',
    avatar: {
      icon: 'i-fluent-calendar-20-regular'
    },
    // to: '/' + navLabels[3],
    // class: navProps(navLabels[4]!).navClass,
    active: route.path.includes("events"),
    children: [
      {
        label: 'Supernatural School',
        to: '/events#supernatural-school'
      },
      {
        label: 'Rise',
        to: '/events#rise'
      },
    ].map(child => ({
      ...child, class: navClass.value
    }))

  },

  // {
  //   label: navProps(navLabels[4]!).navLabel,
  //   to: '/components',
  //   icon: 'i-fluent-mail-multiple-20-regular',
  //   avatar: {
  //     icon: 'i-fluent-mail-multiple-20-regular'
  //   },
  //   class: navProps(navLabels[4]!).navClass,
  // }
].map(navItem => {
  //avatar is needed for light mode (remove icon)
  // and icon alone is needed for dark mode
  if (colorMode.value === 'light') {
    const { icon, ...newNavItem } = navItem;
    return { ...newNavItem, class: navClass.value }
  }
  else {
    const { avatar, ...newNavItem } = navItem;
    return { ...newNavItem, class: navClass.value }
  }
}) as NavigationMenuItem[])

const mainDivFocus = ref(false);
const verticalNavFocus = ref(false);
function collapseNav() {
  // navOpen.value = false;
  console.log("focus");
}
</script>

<template>
  <div ref="mainDiv" class="flex sm:items-center py-2 pointer-events-none backdrop-blur-lg m-h-20"
     v-on:focus="mainDivFocus = true" v-on:focusout="mainDivFocus = false">
    <ULink class="absolute top-0 left-5 bg-transparent pointer-events-auto" to="/" aria-label="Home">
      <NuxtImg src="/images/exodus-missions-logo-icon.png" sizes="20px sm:25px" />
    </ULink>
    <UContainer class="col-span-10 rounded-full border-solid border-secondary border-1
                          transition delay-150 duration-300 ease-in-out hover:-translate-y-1
                           max-w-fit backdrop-blur-lg pointer-events-auto hidden sm:block"
      :class="`${hoverStyle} ${backgroundColor}`">
      <UNavigationMenu :items="navItems" variant="pill" color="secondary" highlight class="flex justify-center-safe " />
    </UContainer>
    <UContainer class="w-full sm:hidden flex justify-end pointer-events-auto"
      v-on:focus="collapseNav">
      <UCollapsible v-model:open="navOpen" class="flex flex-col" v-on:focusout="collapseNav">
        <UButton color="neutral" variant="subtle" icon="i-mdi-hamburger-menu" size="xl" />
        <template #content>
          <UNavigationMenu :items="navItems" variant="pill" color="secondary"
            highlight orientation="vertical"
             />
        </template>
      </UCollapsible>

    </UContainer>

  </div>
</template>
