import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, content } from './src/data/content.js';

// Fills the %SEO_*% placeholders in index.html from src/data/content.js,
// so og:url / og:image are absolute URLs built from SITE_URL.
function seoTags() {
  const { seo } = content.en;
  const base = SITE_URL.replace(/\/$/, '');
  const values = {
    SEO_TITLE: seo.title,
    SEO_DESCRIPTION: seo.description,
    SEO_URL: `${base}/`,
    SEO_IMAGE: `${base}${seo.ogImage}`,
  };
  const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return {
    name: 'seo-tags',
    transformIndexHtml: (html) =>
      html.replace(/%(SEO_[A-Z]+)%/g, (match, key) => (key in values ? escape(values[key]) : match)),
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoTags()],
});
