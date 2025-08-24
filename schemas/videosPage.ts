import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videosPage',
  title: 'Videos Page',
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
      initialValue: 'Video Gallery',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 3,
      initialValue: 'Watch performances by world-class guitarists playing Glenn Canin instruments, and get an inside look at the guitar-making process.',
    }),
    defineField({
      name: 'featuredVideosTitle',
      title: 'Featured Videos Section Title',
      type: 'string',
      initialValue: 'Featured Videos',
    }),
    defineField({
      name: 'moreVideosTitle',
      title: 'More Videos Section Title',
      type: 'string',
      initialValue: 'More Videos',
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { 
              name: 'youtubeUrl', 
              title: 'YouTube URL', 
              type: 'url',
              validation: (Rule) => 
                Rule.required().custom((url: string) => {
                  if (!url) return true
                  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be') || url.includes('www.youtube.com')
                  return isYoutube || 'Please provide a valid YouTube URL'
                }),
            },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            { 
              name: 'player', 
              title: 'Player/Performer', 
              type: 'string',
              description: 'Name of the guitarist or performer',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Videos Page',
      }
    },
  },
})