<script lang="ts" setup>
import {
  defineOrganization, defineWebPage,
  defineWebSite, useSchemaOrg
} from '@unhead/schema-org/vue';

const url = useRequestURL();
useHead({
  title: 'Exodus Church',
  titleTemplate: '%s | %siteName',
  templateParams: {
    siteName: 'Exodus Church',
    schemaOrg: {
      host: url.href,
      path: url.pathname,
      inLanguage: 'en',
    }
  }
})

useSchemaOrg([
  // much of the data will be inferred such as the title, description and all URLs
  defineWebPage(),
  defineWebSite({
    name: 'Exodus Church',
    description: 'Making disciples of all nations.',
  }),
  // choose an identity, either with definePerson or an defineOrganization
  defineOrganization({
    name: 'Exodus Missions',
  })
])
</script>


<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
