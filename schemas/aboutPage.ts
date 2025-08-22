import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutHeroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'journeyTitle',
      title: 'Journey Section Title',
      type: 'string',
      initialValue: 'My Journey',
    }),
    defineField({
      name: 'journeyContent',
      title: 'Journey Content',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Section Title',
      type: 'string',
      initialValue: 'Philosophy',
    }),
    defineField({
      name: 'philosophyContent',
      title: 'Philosophy Content',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'achievementsTitle',
      title: 'Achievements Section Title',
      type: 'string',
      initialValue: 'Awards & Recognition',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'About Page',
      }
    },
  },
})