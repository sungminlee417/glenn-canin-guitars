import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      title: 'Contact Page Header Title',
      type: 'string',
      initialValue: 'Get In Touch',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Contact Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Whether you\'re interested in commissioning a custom guitar or have questions about my instruments, I\'d love to hear from you.',
    }),
    defineField({
      name: 'workshopSectionTitle',
      title: 'Workshop Section Title',
      type: 'string',
      initialValue: 'Workshop Visits',
    }),
    defineField({
      name: 'workshopSectionDescription',
      title: 'Workshop Section Description',
      type: 'text',
      rows: 3,
      initialValue: 'I welcome visits to my workshop by appointment. This is a great opportunity to see guitars in various stages of construction and try completed instruments.',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Contact Page',
      }
    },
  },
})