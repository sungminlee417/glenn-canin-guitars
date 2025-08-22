import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Name',
      type: 'string',
      initialValue: 'Footer Settings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Glenn Canin Guitars',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'Handcrafted concert classical guitars for professional musicians worldwide.',
    }),
    defineField({
      name: 'footerPhone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'footerEmail',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Mill Valley, California',
    }),
    defineField({
      name: 'locationNote',
      title: 'Location Note',
      type: 'string',
      initialValue: 'Visits by appointment only',
    }),
    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'string',
      initialValue: '1985',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Handcrafted with passion',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Made in USA',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram Username', type: 'string' },
        { name: 'facebook', title: 'Facebook URL/Username', type: 'string' },
        { name: 'youtube', title: 'YouTube Channel URL', type: 'string' },
        { name: 'twitter', title: 'Twitter/X Username', type: 'string' },
      ],
    }),
    defineField({
      name: 'trustlineText',
      title: 'Trust Line Text',
      type: 'string',
      initialValue: 'Trusted by professionals',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Footer Settings',
      }
    },
  },
})