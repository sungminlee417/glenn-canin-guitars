import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'playersPage',
  title: 'Players Page',
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
      initialValue: 'Featured Players',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Meet the world-class musicians who choose Glenn Canin guitars for their professional performances and recordings.',
    }),
    defineField({
      name: 'featuredPlayersTitle',
      title: 'Featured Players Section Title',
      type: 'string',
      initialValue: 'Featured Artists',
    }),
    defineField({
      name: 'allPlayersTitle',
      title: 'All Players Section Title',
      type: 'string',
      initialValue: 'All Artists',
    }),
    defineField({
      name: 'ctaSectionTitle',
      title: 'Call to Action Section Title',
      type: 'string',
      initialValue: 'Join Our Artist Family',
    }),
    defineField({
      name: 'ctaSectionDescription',
      title: 'Call to Action Description',
      type: 'text',
      rows: 3,
      initialValue: 'Interested in becoming a Glenn Canin artist? We work with musicians who appreciate exceptional craftsmanship and tonal excellence.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Players Page',
      }
    },
  },
})