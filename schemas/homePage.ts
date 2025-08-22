import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutPreview',
      title: 'About Preview Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featuredGuitarsTitle',
      title: 'Featured Guitars Section Title',
      type: 'string',
      initialValue: 'Featured Guitars',
    }),
    defineField({
      name: 'featuredGuitarsDescription',
      title: 'Featured Guitars Description',
      type: 'text',
      rows: 3,
      initialValue: 'Each guitar is meticulously crafted using the finest tonewoods and traditional techniques combined with modern innovations',
    }),
    defineField({
      name: 'featuredGuitarsButtonText',
      title: 'Featured Guitars Button Text',
      type: 'string',
      initialValue: 'View All Available Guitars',
    }),
    defineField({
      name: 'aboutPreviewTitle',
      title: 'About Preview Section Title',
      type: 'string',
      initialValue: 'Master Luthier Since 1985',
    }),
    defineField({
      name: 'aboutPreviewLinkText',
      title: 'About Preview Link Text',
      type: 'string',
      initialValue: 'Learn More About My Craft',
    }),
  ],
})