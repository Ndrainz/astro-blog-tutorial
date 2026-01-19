// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://jocular-biscochitos-88c0f5.netlify.app",
  integrations: [preact()]
});