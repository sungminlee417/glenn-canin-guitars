import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'forSalePage',
  title: 'For Sale Page',
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
      initialValue: 'Guitars For Sale',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Explore our collection of available guitars. Each instrument is meticulously crafted and ready to inspire your musical journey.',
    }),
    defineField({
      name: 'availabilityNoticeTitle',
      title: 'Availability Notice Title',
      type: 'string',
      initialValue: 'Availability Notice',
    }),
    defineField({
      name: 'availabilityNoticeText',
      title: 'Availability Notice Text',
      type: 'text',
      rows: 3,
      initialValue: 'All guitars shown are currently available. Instruments are sold on a first-come, first-served basis. Contact us to arrange a trial or to discuss purchase details.',
    }),
    defineField({
      name: 'featuredInstrumentsTitle',
      title: 'Featured Instruments Section Title',
      type: 'string',
      initialValue: 'Featured Instruments',
    }),
    defineField({
      name: 'availableInstrumentsTitle',
      title: 'Available Instruments Section Title',
      type: 'string',
      initialValue: 'Available Instruments',
    }),
    defineField({
      name: 'inquireButtonText',
      title: 'Inquire Button Text',
      type: 'string',
      initialValue: 'Inquire About This Guitar',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'For Sale Page',
      }
    },
  },
})