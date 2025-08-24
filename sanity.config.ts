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
            // Page Content Section
            S.listItem()
              .title('📄 Page Content')
              .child(
                S.list()
                  .title('Page Content')
                  .items([
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
                  ])
              ),

            // Media & Content Section
            S.listItem()
              .title('🎬 Videos & Gallery')
              .child(
                S.list()
                  .title('Videos & Gallery')
                  .items([
                    S.listItem()
                      .title('🎬 Videos Page Settings')
                      .child(S.document().schemaType('videosPage').documentId('videosPage')),
                    S.listItem()
                      .title('🎥 Videos')
                      .child(S.documentTypeList('video').title('Videos')),
                    S.listItem()
                      .title('🖼️ Gallery Page Settings')
                      .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
                    S.listItem()
                      .title('🖼️ Gallery Items')
                      .child(S.documentTypeList('galleryItem').title('Gallery Items')),
                  ])
              ),

            // Artists & Guitars Section
            S.listItem()
              .title('🎭 Artists & Guitars')
              .child(
                S.list()
                  .title('Artists & Guitars')
                  .items([
                    S.listItem()
                      .title('🎭 Players Page Settings')
                      .child(S.document().schemaType('playersPage').documentId('playersPage')),
                    S.listItem()
                      .title('🎭 Players')
                      .child(S.documentTypeList('player').title('Players')),
                    S.listItem()
                      .title('🎸 Guitars')
                      .child(S.documentTypeList('guitar').title('Guitars')),
                  ])
              ),

            // Site Settings Section
            S.listItem()
              .title('⚙️ Site Settings')
              .child(
                S.list()
                  .title('Site Settings')
                  .items([
                    S.listItem()
                      .title('🦶 Footer Settings')
                      .child(S.document().schemaType('footerSettings').documentId('footerSettings')),
                    S.listItem()
                      .title('🧭 Navigation Settings')
                      .child(S.document().schemaType('navigationSettings').documentId('navigationSettings')),
                  ])
              ),
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
