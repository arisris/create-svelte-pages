import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import cloudflare from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: cloudflare({
      routes: {
        exclude: ["/_app/*", "/p/*", "/favicon.ico", "/robots.txt"],
      },
    }),
    prerender: {
      handleHttpError: "ignore",
    },
  },
};

export default config;
