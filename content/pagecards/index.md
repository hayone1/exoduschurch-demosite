
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
    class: z-0 flex flex-row col-span-full
    cardClass: mt-20 bg-gradient-to-r h-[70vh] 
    variant: solid
    # footer: Making disciples of all nations.
    showFooter: true
    showHeader: true
    backdropClasses:
        - bg-cover mask-contain mask-repeat-x mask-[url(/images/vector/brush-mask-1-from-top.svg)] bg-[url(/images/main/supernatural-school-december-7.jpg)]
        - bg-cover mask-t-from-60% mask-t-to-70% sm:mask-t-from-10% sm:mask-t-to-60% bg-[url(/images/main/supernatural-school-december-7.jpg)]
        - backdrop-grayscale mask-t-from-60% mask-t-to-80% mask-r-from-30% mask-r-to-50%
---
::

::page-card
---
offset: 3
pageCardData:
    contentJustification: justify-center
    footerButtonsParentClass: justify-center
    class: col-span-full md:col-span-5 lg:col-span-3
    cardClass: h-80 bg-transparent flex justify-center items-center
    # class: z-0 flex flex-row col-span-full -translate-y-3
    # cardClass: mt-20 bg-gradient-to-r h-[70vh] 
    variant: solid
    bodyButtonsParentClass: justify-center
    bodyButtons:
        - label: Testimonies
          variant: link
          link: /testimonies-list
          class: text-5xl md:text-4xl font-extrabold text-neutral-600
    backdropClasses:
        -  mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-white

---
::

::page-card
---
offset: 2
pageCardData:
    contentJustification: justify-center
    # footerButtonsParentClass: justify-center
    # footerButtons:
    #     - label: Follow Us
    #       variant: soft
    #       class: text-xl bg-transparent
    # showFooter: true
    class: col-span-full md:col-span-5 lg:col-span-3
    cardClass: bg-transparent
    variant: solid
    bodyButtonsParentClass: justify-center h-60 md:pb-5
    bodyButtons:
        - icon: i-mdi-instagram
          variant: solid
          class: text-5xl md:text-4xl font-extrabold bg-linear-65 from-purple-500 to-red-500
          link: https://www.instagram.com/exoduschurch_/#
        - icon: i-mdi-telegram
          variant: solid
          class: text-5xl md:text-4xl font-extrabold bg-blue-500
          link: https://t.me/ExodusChurch
        - icon: i-mdi-youtube
          variant: solid
          class: text-5xl md:text-4xl font-extrabold bg-red-500
          link: https://www.youtube.com/@ExodusMissions
    backdropClasses:
        - mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-white
---
::

::page-card
---
offset: 1
pageCardData:
  contentJustification: justify-center
  footerButtonsParentClass: justify-center
  class: col-span-full md:col-span-5 lg:col-span-3
  cardClass: h-80 bg-transparent flex justify-center items-center
  variant: solid
  bodyButtonsParentClass: justify-center md:pt-20
  bodyButtons:
    - label: Serve
      variant: link
      class: text-5xl font-extrabold text-white-600
      link: /community#technical-unit
  backdropClasses:
    - mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-neutral-600/30

---
::

::
