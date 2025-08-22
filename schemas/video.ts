import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
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
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => 
        Rule.required().custom((url) => {
          if (!url) return true
          const isYoutube = url.includes('youtube.com') || url.includes('youtu.be') || url.includes('www.youtube.com')
          return isYoutube || 'Please provide a valid YouTube URL'
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'player',
      title: 'Player/Performer',
      type: 'string',
      description: 'Name of the guitarist or performer',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      player: 'player',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, player, featured } = selection
      return {
        title: title,
        subtitle: `${player || 'Unknown Artist'}${featured ? ' • Featured' : ''}`,
      }
    },
  },
})