import { defineConfig } from "astro/config";

function plugin() {
  return function transformer(tree, vfile) {
    console.log('[frontmatter]', vfile.data.astro)
  };
}

export default defineConfig({
  markdown: {
    remarkPlugins: [plugin],
  },
});
