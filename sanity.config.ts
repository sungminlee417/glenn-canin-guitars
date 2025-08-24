import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { StudioNavbar } from "./components/StudioNavbar";

export default defineConfig({
  name: "default",
  title: "Glenn Canin Guitars CMS",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // All Pages at top level
            S.listItem()
              .title('🏠 Home Page')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('👤 About Page')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('📞 Contact Page')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.listItem()
              .title('📝 Ordering Page')
              .child(S.document().schemaType('orderingPage').documentId('orderingPage')),
            S.listItem()
              .title('🎸 Doubletops Page')
              .child(S.document().schemaType('doubletopsPage').documentId('doubletopsPage')),
            S.listItem()
              .title('💰 For Sale Page')
              .child(S.document().schemaType('forSalePage').documentId('forSalePage')),
            S.listItem()
              .title('🎬 Videos Page')
              .child(S.document().schemaType('videosPage').documentId('videosPage')),
            S.listItem()
              .title('🖼️ Gallery Page')
              .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
            S.listItem()
              .title('🎭 Players Page')
              .child(S.document().schemaType('playersPage').documentId('playersPage')),
            
            // Divider for settings
            S.divider(),
            
            // Site Settings
            S.listItem()
              .title('🦶 Footer Settings')
              .child(S.document().schemaType('footerSettings').documentId('footerSettings')),
            S.listItem()
              .title('🧭 Navigation Settings')
              .child(S.document().schemaType('navigationSettings').documentId('navigationSettings')),
          ])
    })
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
