import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const buttonContentSchema = z.object({
    label: z.string(),
    variant: z.string().optional(),
    class: z.string().optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    link: z.string().optional()
})

const imageContentSchema = z.object({
    url: z.string(),
    aspectRatio: z.string().optional(),
    placeholder: z.string().optional(),
    alt: z.string().optional()
})

const cardTableDataSchema = z.object({
    id: z.string(),
    author: z.string(),
    showCardTitle: z.boolean().optional(),
    title: z.string(),
    date: z.string(),
    body: z.string(),
    bodyButtons: z.array(buttonContentSchema),
    image: imageContentSchema.optional(),
    event: z.string()
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      // source: '*.md'
      source: {
        repository: 'https://github.com/hayone1/exoduschurch-demodata',
        include: '*.md',
      },
    }),
    pageCards: defineCollection({
      type: 'page',
      // source: 'pagecards/*.md',
      source: {
        repository: 'https://github.com/hayone1/exoduschurch-demodata',
        include: 'pagecards/*.md',
      },
    }),
    cardTables: defineCollection({
      type: 'data',
      // source: 'cardtables/*.yml',
      source: {
        repository: 'https://github.com/hayone1/exoduschurch-demodata',
        include: 'cardtables/*.yml',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        data: z.array(cardTableDataSchema),
      })
    })
  },

})
