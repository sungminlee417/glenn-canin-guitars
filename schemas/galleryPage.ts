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