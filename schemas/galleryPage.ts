import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Header Title',
      type: 'string',
      initialValue: 'Guitar Gallery',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Explore the artistry behind Glenn Canin guitars - from finished instruments to workshop moments that capture the craftsmanship process.',
    }),
    defineField({
      name: 'galleryItems',
      title: 'Gallery Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { 
              name: 'category', 
              title: 'Category', 
              type: 'string',
              options: {
                list: [
                  { title: 'Guitar', value: 'guitar' },
                  { title: 'Workshop', value: 'workshop' },
                  { title: 'Process', value: 'process' },
                  { title: 'Detail', value: 'detail' },
                  { title: 'Event', value: 'event' },
                ],
                layout: 'dropdown',
              },
            },
            { 
              name: 'image', 
              title: 'Image', 
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility.',
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { 
              name: 'date', 
              title: 'Date', 
              type: 'datetime',
              initialValue: () => new Date().toISOString(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Gallery Page',
      }
    },
  },
})