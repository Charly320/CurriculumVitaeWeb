
export default {
  basePath: '/CurriculumVitaeWeb',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
