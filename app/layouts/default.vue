<template>
  <div class="flex flex-col min-h-screen justify-between">
    <ClientOnly fallbackTag="span">
      <layoutBackground />
      <template #fallback>
        <LayoutLoading />
      </template>
    </ClientOnly>
  
    <ClientOnly fallbackTag="span">
      <layoutHeader class="sticky top-0 z-5"/>
    </ClientOnly>
    
    <section id="main-body">
      <slot ></slot>
    </section>
  
    <ClientOnly fallbackTag="span">
      <layoutFooter/>
    </ClientOnly>

  </div>
</template>