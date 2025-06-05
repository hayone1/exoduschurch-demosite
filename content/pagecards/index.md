
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
    class: col-span-full md:col-span-5 lg:col-span-3 -translate-y-3
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
    class: col-span-full md:col-span-5 lg:col-span-3 -translate-y-3
    cardClass: h-80 bg-transparent flex justify-center items-center
    variant: solid
    bodyButtonsParentClass: justify-center h-40
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
  class: col-span-full md:col-span-5 lg:col-span-3 -translate-y-3
  cardClass: h-80 bg-transparent flex justify-center items-center
  variant: solid
  bodyButtonsParentClass: justify-center
  bodyButtons:
    - label: Serve
      variant: link
      class: text-5xl font-extrabold text-white-600
      link: /community#technical-unit
  backdropClasses:
    - mask-contain mask-center mask-no-repeat -z-1 mask-[url(/images/vector/brush-mask-0-linear.svg)] bg-neutral-600/30

---
::

::page-card
---
offset: 1
pageCardData:
  contentJustification: justify-center
  bodyButtonsParentClass: justify-center
  headerButtons:
    - variant: link
      icon: i-fluent-location-ripple-20-regular
      class: text-5xl text-white
      link: https://maps.app.goo.gl/iSkjrBP6eAdRfNX88
  showHeader: true
  variant: solid
  bodies:
    - title: SUNDAY
      body: Kobi's food, Oregun, Ikeja
      footer: 10:00 AM
    - title: THURSDAY
      body: Online
      footer: 6:00 PM
  class: col-span-full md:col-span-5 lg:col-span-4 -translate-y-3
  cardClass: bg-transparent
  backdropClasses:
    - bg-cover bg-[url(/images/vector/navigation-illustration.svg)] mask-x-from-20% mask-y-from-20%
---
::

::page-card
---
offset: 2
pageCardData:
  body: Meet our Pastor
  bodyClass: text-6xl
  contentJustification: justify-start
  bodyButtons:
    - label: Abhulimen Desmond
      color: neutral
      link: /about#meet-out-pastor
  class: col-span-full lg:col-span-5 flex flex-row h-100 border-2 -translate-y-3
  cardClass: mt-20 bg-gradient-to-r
  variant: solid
  backdropClasses:
    - bg-cover bg-[url(/images/people/pastor-desmond-1.jpg)] sm:bg-[url(/images/people/pastor-desmond-3-shape.jpg)] bg-right h-full
    - backdrop-blur-xs sm:backdrop-blur-lg mask-cover mask-[url(/images/people/pastor-desmond-1-mask.png)] sm:mask-[url(/images/people/pastor-desmond-3-mask.png)] mask-right h-full
---
::

::page-card
---
offset: 3
pageCardData:
  title: Special Meetings
  showHeader: true
  contentJustification: justify-center
  cardAnimation: defaultCarousalAnimation
  comparisonCarousals:
    - - title: August
        bodyButtons:
          - label: Supernatural School
            variant: link
            color: secondary
            class: text-3xl md:text-4xl font-extrabold text-white z-0
            link: https://instagram.com/p/DKXwS_7oa0a/
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1 translate-y-0
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backgroundImage:
          url: /images/events/supernatural-school-december-2.jpg
          class: -top-1/2
        backdropClasses:
          #- -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-2025.jpg)]
          - -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-2.jpg)]
          - -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-august-2025.jpg)] sm:hidden
          - -z-1 backdrop-blur-xs hidden sm:block
          - -z-1 backdrop-grayscale sm:hidden
      - title: December
        bodyButtons:
          - label: Supernatural School
            variant: link
            color: primary
            class: text-3xl md:text-4xl font-extrabold text-white
            link: /events#supernatural-school
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backdropClasses:
          - -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-nkire.jpg)]
          - -z-1 backdrop-grayscale
    - - title: Ajah
        bodyButtons:
          - label: RISE
            variant: link
            color: error
            class: text-3xl md:text-4xl font-extrabold text-white
            link: /events#rise
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backdropClasses:
          - -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-4.jpg)]
          - -z-1 bg-black/60
      - title: Abuja
        bodyButtons:
          - label: RISE
            variant: link
            color: warning
            class: text-3xl md:text-4xl font-extrabold text-white
            link: /events#rise
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backdropClasses:
          - -z-1 bg-cover bg-center bg-[url(/images/events/supernatural-school-december-8.jpg)]
          - -z-1 bg-black/60
      - title: Ibadan
        bodyButtons:
          - label: RISE
            variant: link
            color: primary
            class: text-3xl md:text-4xl font-extrabold text-white
            link: /events#rise
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backdropClasses:
          - -z-1 bg-cover bg-[url(/images/events/supernatural-school-december-10.jpg)]
          - -z-1 bg-black/60
      - title: United Kingdom
        bodyButtons:
          - label: RISE
            variant: link
            color: secondary
            class: text-3xl md:text-4xl font-extrabold text-white
            link: /events#rise
        contentJustification: justify-center
        showFooter: true
        showHeader: true
        class: h-100 -z-1
        cardClass: bg-transparent
        variant: solid
        bodyButtonsParentClass: justify-center h-80
        backdropClasses:
          - -z-1 bg-cover bg-[url(/images/events/supernatural-school-december-11.jpg)]
          - -z-1 bg-black/60
  class: col-span-full -translate-y-3
  variant: subtle

---
::

::
