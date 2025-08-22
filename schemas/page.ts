import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
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
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
          { title: 'Ordering', value: 'ordering' },
          { title: 'Footer', value: 'footer' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // Home Page Fields
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      hidden: ({ document }) => document?.pageType !== 'home',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      hidden: ({ document }) => document?.pageType !== 'home',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.pageType !== 'home',
    }),
    defineField({
      name: 'aboutPreview',
      title: 'About Preview Text',
      type: 'text',
      rows: 4,
      hidden: ({ document }) => document?.pageType !== 'home',
    }),
    defineField({
      name: 'featuredGuitarsTitle',
      title: 'Featured Guitars Section Title',
      type: 'string',
      initialValue: 'Featured Guitars',
      hidden: ({ document }) => document?.pageType !== 'home',
    }),

    // About Page Fields
    defineField({
      name: 'aboutHeroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'journeyTitle',
      title: 'Journey Section Title',
      type: 'string',
      initialValue: 'My Journey',
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'journeyContent',
      title: 'Journey Content',
      type: 'text',
      rows: 6,
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Section Title',
      type: 'string',
      initialValue: 'Philosophy',
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'philosophyContent',
      title: 'Philosophy Content',
      type: 'text',
      rows: 6,
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'achievementsTitle',
      title: 'Achievements Section Title',
      type: 'string',
      initialValue: 'Awards & Recognition',
      hidden: ({ document }) => document?.pageType !== 'about',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ document }) => document?.pageType !== 'about',
    }),

    // Contact Page Fields
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => document?.pageType !== 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      hidden: ({ document }) => document?.pageType !== 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
      hidden: ({ document }) => document?.pageType !== 'contact',
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => document?.pageType !== 'contact',
    }),

    // Ordering Page Fields
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', title: 'Step Number', type: 'number' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
      hidden: ({ document }) => document?.pageType !== 'ordering',
    }),

    // Footer Fields
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Glenn Canin Guitars',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'Handcrafted concert classical guitars for professional musicians worldwide.',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'footerPhone',
      title: 'Phone',
      type: 'string',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'footerEmail',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Mill Valley, California',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'locationNote',
      title: 'Location Note',
      type: 'string',
      initialValue: 'Visits by appointment only',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'string',
      initialValue: '1985',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Handcrafted with passion',
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Made in USA',
      hidden: ({ document }) => document?.pageType !== 'footer',
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
      hidden: ({ document }) => document?.pageType !== 'footer',
    }),

    // Generic content field for all pages
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 6,
      description: 'Additional content for the page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
    },
    prepare(selection) {
      const { title, pageType } = selection
      return {
        title: title,
        subtitle: `${pageType} page`,
      }
    },
  },
})