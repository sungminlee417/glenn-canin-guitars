import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videosPage',
  title: 'Videos Page',
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
      initialValue: 'Video Gallery',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Watch performances by world-class guitarists playing Glenn Canin instruments, and get an inside look at the guitar-making process.',
    }),
    defineField({
      name: 'featuredVideosTitle',
      title: 'Featured Videos Section Title',
      type: 'string',
      initialValue: 'Featured Videos',
    }),
    defineField({
      name: 'moreVideosTitle',
      title: 'More Videos Section Title',
      type: 'string',
      initialValue: 'More Videos',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Videos Page',
      }
    },
  },
})