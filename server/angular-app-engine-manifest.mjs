
export default {
  basePath: 'https://charly320.github.io/CurriculumVitaeWeb',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
