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
      name: 'availableInstrumentsTitle',
      title: 'Available Instruments Section Title',
      type: 'string',
      initialValue: 'Available Instruments',
    }),
    defineField({
      name: 'guitars',
      title: 'Available Guitars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Guitar Title', type: 'string' },
            { name: 'year', title: 'Year', type: 'number' },
            { name: 'price', title: 'Price', type: 'string' },
            { 
              name: 'mainImage', 
              title: 'Main Image', 
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
            },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            {
              name: 'specifications',
              title: 'Specifications',
              type: 'object',
              fields: [
                { name: 'topWood', title: 'Top Wood', type: 'string' },
                { name: 'backSides', title: 'Back & Sides', type: 'string' },
                { name: 'neckWood', title: 'Neck Wood', type: 'string' },
                { name: 'fingerboard', title: 'Fingerboard', type: 'string' },
                { name: 'scaleLength', title: 'Scale Length', type: 'string' },
                { name: 'nutWidth', title: 'Nut Width', type: 'string' },
                { name: 'finish', title: 'Finish', type: 'string' },
              ],
            },
          ],
        },
      ],
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