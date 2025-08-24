import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'orderingPage',
  title: 'Ordering Page',
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
      initialValue: 'Custom Guitar Ordering',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Commission a custom classical guitar tailored to your musical vision and playing style.',
    }),
    defineField({
      name: 'optionsTitle',
      title: 'Options Section Title',
      type: 'string',
      initialValue: 'Guitar Options & Upgrades',
    }),
    defineField({
      name: 'basePrice',
      title: 'Base Price',
      type: 'string',
      initialValue: '$14,000',
    }),
    defineField({
      name: 'baseDescription',
      title: 'Base Price Description',
      type: 'text',
      rows: 3,
      initialValue: 'Includes balsa core doubletop with cedar/cedar or spruce/cedar skins, Indian rosewood back/sides, elevated fingerboard, 20th fret, optional soundport, Barnett tuners, arched TKL case.',
    }),
    defineField({
      name: 'options',
      title: 'Available Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category', type: 'string', description: 'e.g., Scale Length, Wood Upgrades, Hardware' },
            { name: 'title', title: 'Option Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'price', title: 'Additional Price', type: 'string', description: 'e.g., +$500, Included, Price varies' },
            { name: 'required', title: 'Required Option', type: 'boolean', initialValue: false },
          ],
        },
      ],
      initialValue: [
        { category: 'Scale Length', title: '650mm (Standard)', description: 'Traditional classical guitar scale length', price: 'Included', required: false },
        { category: 'Scale Length', title: '640mm (Short Scale)', description: 'Shorter scale length for easier playing', price: 'Included', required: false },
        { category: 'Scale Length', title: '665mm (Long Scale)', description: 'Extended scale for increased tension and projection', price: 'Included', required: false },
        { category: 'Wood Upgrades', title: '40-year-old Madagascar Rosewood', description: 'Premium aged Madagascar rosewood for back and sides', price: '+$3,000', required: false },
        { category: 'Wood Upgrades', title: 'Brazilian Rosewood', description: 'Rare Brazilian rosewood for back and sides', price: '+$5,000', required: false },
        { category: 'Hardware', title: 'Alessi Tuners', description: 'Premium tuning machines for superior stability', price: '+$500', required: false },
        { category: 'Case', title: 'Bam or Visesnut Case', description: 'Upgrade to premium hardshell case', price: '+$500', required: false },
      ],
    }),
    defineField({
      name: 'pricingItems',
      title: 'Pricing Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        },
      ],
      initialValue: [
        { label: 'Waitlist', value: 'Contact for current wait time' },
        { label: 'Deposit', value: '$500' },
        { label: 'Balance', value: 'Due upon completion' },
      ],
    }),
    defineField({
      name: 'pricingNote',
      title: 'Pricing Note',
      type: 'text',
      rows: 3,
      initialValue: 'Customers must call or email to get on the waitlist. Pricing varies based on wood selection and optional upgrades.',
    }),
    defineField({
      name: 'includedFeaturesTitle',
      title: 'What\'s Included Section Title',
      type: 'string',
      initialValue: 'What\'s Included',
    }),
    defineField({
      name: 'includedFeatures',
      title: 'What\'s Included List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Balsa core doubletop construction',
        'Cedar or spruce soundboard options',
        'Indian rosewood back and sides (standard)',
        'Elevated fingerboard with 20th fret access',
        'Optional soundport',
        'Barnett tuning machines (standard)',
        'Arched TKL case included',
      ],
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'text',
      rows: 6,
      description: 'Additional content for the ordering page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Ordering Page',
      }
    },
  },
})