import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'guitar',
  title: 'Guitar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(2100),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "$12,000" or "SOLD"',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        {
          name: 'topWood',
          title: 'Top Wood',
          type: 'string',
        },
        {
          name: 'backSides',
          title: 'Back & Sides',
          type: 'string',
        },
        {
          name: 'neckWood',
          title: 'Neck Wood',
          type: 'string',
        },
        {
          name: 'fingerboard',
          title: 'Fingerboard',
          type: 'string',
        },
        {
          name: 'scaleLength',
          title: 'Scale Length',
          type: 'string',
        },
        {
          name: 'nutWidth',
          title: 'Nut Width',
          type: 'string',
        },
        {
          name: 'finish',
          title: 'Finish',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      media: 'mainImage',
      available: 'available',
    },
    prepare(selection) {
      const { title, year, available } = selection
      return {
        title: title,
        subtitle: `${year} • ${available ? 'Available' : 'Sold'}`,
        media: selection.media,
      }
    },
  },
})