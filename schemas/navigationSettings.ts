import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigationSettings',
  title: 'Navigation Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Navigation Settings',
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title (Logo Text)',
      type: 'string',
      initialValue: 'Glenn Canin Guitars',
    }),
    defineField({
      name: 'homeLabel',
      title: 'Home Link Label',
      type: 'string',
      initialValue: 'Home',
    }),
    defineField({
      name: 'aboutLabel',
      title: 'About Link Label',
      type: 'string',
      initialValue: 'About',
    }),
    defineField({
      name: 'doubletopsLabel',
      title: 'Doubletops Link Label',
      type: 'string',
      initialValue: 'Doubletops',
    }),
    defineField({
      name: 'videosLabel',
      title: 'Videos Link Label',
      type: 'string',
      initialValue: 'Videos',
    }),
    defineField({
      name: 'galleryLabel',
      title: 'Gallery Link Label',
      type: 'string',
      initialValue: 'Gallery',
    }),
    defineField({
      name: 'playersLabel',
      title: 'Players Link Label',
      type: 'string',
      initialValue: 'Players',
    }),
    defineField({
      name: 'orderingLabel',
      title: 'Ordering Link Label',
      type: 'string',
      initialValue: 'Ordering',
    }),
    defineField({
      name: 'contactLabel',
      title: 'Contact Link Label',
      type: 'string',
      initialValue: 'Contact',
    }),
    defineField({
      name: 'forSaleLabel',
      title: 'For Sale Link Label',
      type: 'string',
      initialValue: 'For Sale',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Navigation Settings',
      }
    },
  },
})