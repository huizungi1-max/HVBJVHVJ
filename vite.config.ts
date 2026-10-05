import { defineConfig, type Plugin } from 'vite';
import { renderApp } from './src/content/render';
import { site } from './src/content/content';

/** Renders all content into index.html at build/serve time (single source of truth: src/content). */
function renderContent(): Plugin {
  return {
    name: 'kaushal:render-content',
    transformIndexHtml(html) {
      return html
        .replace('<!--app-->', renderApp())
        .replace(/%TITLE%/g, site.meta.title)
        .replace(/%DESCRIPTION%/g, site.meta.description);
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('/src/content/')) server.ws.send({ type: 'full-reload' });
    },
  };
}

export default defineConfig({
  // relative asset URLs: works at a domain root and under a GitHub Pages project path
  base: './',
  plugins: [renderContent()],
  build: {
    target: 'es2022',
    cssMinify: true,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 900,
  },
});
