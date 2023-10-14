import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schema from './schemas/schema'


export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'vsg0v9tv',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema,
  },
})
