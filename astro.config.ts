import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import node from '@astrojs/node';

// import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://n1ghtx0w1.github.io/headsec/',
  base: '/headsec',
  integrations: [
    expressiveCode({
      themes: ['github-dark-default'],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'HeadSec',
      openGraph: {
        home: {
          title: 'HeadSec',
          description: 'A cyber security web app.'
        },
        blog: {
          title: 'Blog',
          description: 'Words that are on my mind.'
        },
        news: {
          title: 'Cyber News'
        }
      },
//      giscus: {
//        repository: 'louisescher/spectre',
//        repositoryId: 'R_kgDONjm3ig',
//        category: 'General',
//        categoryId: 'DIC_kwDONjm3is4ClmBF',
//        mapping: 'pathname',
//        strict: true,
//        reactionsEnabled: true,
//        emitMetadata: false,
//        lang: 'en',
//      }
    })
  ] ,
  adapter: node({   // Remove When Dploying
    mode: 'standalone' // Remove When Deploying
  })
});