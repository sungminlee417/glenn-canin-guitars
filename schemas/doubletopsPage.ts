import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'doubletopsPage',
  title: 'Doubletops Page',
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
      initialValue: 'Double Top Guitars',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Glenn Canin\'s signature double top construction combines traditional craftsmanship with innovative design, resulting in guitars with exceptional projection and tonal clarity.',
    }),
    defineField({
      name: 'innovationSectionTitle',
      title: 'Innovation Section Title',
      type: 'string',
      initialValue: 'The Double Top Innovation',
    }),
    defineField({
      name: 'innovationSectionContent',
      title: 'Innovation Section Content',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'benefitsSectionTitle',
      title: 'Benefits Section Title',
      type: 'string',
      initialValue: 'Benefits of Double Top Construction',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Enhanced volume and projection without sacrificing tone quality',
        'Improved sustain and note clarity across all registers',
        'Greater dynamic range for expressive playing',
        'Consistent response across the entire fingerboard',
        'Lighter weight compared to traditional construction'
      ],
    }),
    defineField({
      name: 'availableGuitarsTitle',
      title: 'Available Guitars Section Title',
      type: 'string',
      initialValue: 'Available Double Top Guitars',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Doubletops Page',
      }
    },
  },
})