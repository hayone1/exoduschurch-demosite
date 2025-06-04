
::card-grid

::page-card
---
offset: 1
pageCardData:
    title: Welcome To
    contentJustification: justify-start
    textWithImage:
        pretext: Ex
        imageUrl: /images/exodus-missions-logo-icon.png
        postText: dus Church
        imageClass: h-15 sm:h-20 pb-5
    bodyButtons:
        - label: "I'm New"
          color: neutral
          link: https://portal.exoduschurch.global/external/register/
        - label: About us
          color: neutral
          variant: outline
          link: /about
    footerButtons:
        - label: "It's Supernatural School SZN! Learn more →"
          color: warning
          variant: subtle
          class: 'rounded-full'
          link: https://instagram.com/p/DKXwS_7oa0a/
    class: z-0 flex flex-row col-span-full -translate-y-3
    cardClass: mt-20 bg-gradient-to-r h-[70vh]
    variant: solid
    # footer: Making disciples of all nations.
    showFooter: true
    showHeader: true
    backdropClasses:
        - bg-cover mask-repeat-x mask-[url(/images/vector/brush-mask-1-from-top.svg)] bg-[url(/images/main/supernatural-school-december-7.jpg)]
        - bg-cover mask-t-from-60% mask-t-to-70% sm:mask-t-from-10% sm:mask-t-to-60% bg-[url(/images/main/supernatural-school-december-7.jpg)]
        - backdrop-grayscale mask-r-from-30% mask-r-to-50%
---
::

::page-card
---
offset: 1
pageCardData:
    contentJustification: justify-center
    footerButtonsParentClass: justify-center
    class: col-span-full md:col-span-5 lg:col-span-3
    cardClass: bg-transparent
    variant: solid
    bodyButtonsParentClass: justify-center h-80 md:pt-20
    bodyButtons:
        - label: Testimonies
          variant: link
          link: /testimonies-list
          class: text-5xl md:text-4xl font-extrabold text-neutral-600
    backdropClasses:
        - mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-white

---
::

::
