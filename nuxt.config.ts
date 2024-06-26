// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-lucide-icons",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt3-leaflet",
  ],
});
