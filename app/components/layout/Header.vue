<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();
const colorMode = useColorMode();
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
  {
    label: "About",
    // icon: 'i-fluent-people-community-20-regular',
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
    ]
  },
  {
    label: "Sermons",
    // icon: 'i-fluent-headphones-sound-wave-20-filled',
    avatar: {
      icon: 'i-fluent-headphones-sound-wave-20-filled'
    },
    to: '/sermons-list',
    // class: navProps(navLabels[2]!).navClass,
    active: route.path.includes("sermons"),
    children: []
  },
  {
    label: "Give",
    // icon: 'i-fluent-handshake-20-regular',
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
    // icon: 'i-fluent-calendar-20-regular',
    avatar: {
      icon: 'i-fluent-calendar-20-regular',
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
    ]

  },
].map(navItem => {
  //avatar is needed for light mode (remove icon)
  // and icon alone is needed for dark mode
  const children = navItem.children?.map(child => ({
    ...child, class: navClass.value,
    onSelect: collapseNav
  }));
  const avatar = {
    ...navItem.avatar,
    size: 'xs',
    ui: {
        root: 'text-sm'
      }
  }
  return {
    ...navItem,
    class: navClass.value,
    children, avatar
  }
}) as NavigationMenuItem[])

function collapseNav() {
  navOpen.value = false;
}
</script>

<template>
  <div ref="mainDiv" class="flex sm:items-center py-2
    pointer-events-none backdrop-blur-lg m-h-20">
    <ULink class="absolute top-0 left-5 bg-transparent pointer-events-auto" to="/" aria-label="Home">
      <NuxtImg src="/images/exodus-missions-logo-icon.png" sizes="20px sm:25px" />
    </ULink>
    <UContainer class="col-span-10 rounded-full border-solid border-secondary border-1
                          transition delay-150 duration-300 ease-in-out hover:-translate-y-1
                           max-w-fit backdrop-blur-lg pointer-events-auto hidden sm:block"
      :class="`${hoverStyle} ${backgroundColor}`">
      <UNavigationMenu :items="navItems" variant="pill" color="secondary" highlight class="flex justify-center-safe " />
    </UContainer>
    <UContainer class="w-full sm:hidden flex justify-end pointer-events-auto" v-on:click.self="collapseNav">
      <UCollapsible v-model:open="navOpen" class="flex flex-col">
        <UButton color="neutral" variant="subtle" icon="i-mdi-hamburger-menu" size="xl" />
        <template #content>
          <UNavigationMenu :items="navItems" variant="pill" color="secondary" highlight orientation="vertical" />
        </template>
      </UCollapsible>

    </UContainer>

  </div>
</template>
