// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
      // Le decimos a la integración dónde puede ejecutar código para extender la App Vue (ej: registrar el router)
      appEntrypoint: '/src/pages/_app.js'
    })],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});