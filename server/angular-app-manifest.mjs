
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CurriculumVitaeWeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/CurriculumVitaeWeb/about",
    "route": "/CurriculumVitaeWeb"
  },
  {
    "renderMode": 2,
    "route": "/CurriculumVitaeWeb/about"
  },
  {
    "renderMode": 2,
    "route": "/CurriculumVitaeWeb/experience"
  },
  {
    "renderMode": 2,
    "route": "/CurriculumVitaeWeb/skills"
  },
  {
    "renderMode": 2,
    "route": "/CurriculumVitaeWeb/education"
  },
  {
    "renderMode": 2,
    "route": "/CurriculumVitaeWeb/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/CurriculumVitaeWeb/about",
    "route": "/CurriculumVitaeWeb/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33405, hash: '01b7a48d00c3096664c55451945e35dc690a16376fc172ea3c62d46e56bc6fab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 33287, hash: 'fa507f1b80c151b16104ab22a3d52d9d5ee8a762bd3c7fe7bda8bb5750142c4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86004, hash: '7bfdde44b061ef959f07e03e80072d1ff36d7ed32faf24dae2ea946253cbdf8e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 78788, hash: 'b101033b0cc46b49e564d8ae1f3aebeb3b3fe134e903ef288b5eaaa4486846a4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 86341, hash: '2a3e9c5befac56d0077b8541d5a7b73f321600b75883886e46ad893c1b3f3fca', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 88440, hash: '2c063f149d09dfb9738b462b491b7243e375e0145ce9fda58d89559268664766', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 83654, hash: '062242421127c972eabab78908801eaf17ae3fbe0c268a7ca7e883775ba6d456', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'styles-B24C25XY.css': {size: 1840, hash: '+/lPnE5FBi8', text: () => import('./assets-chunks/styles-B24C25XY_css.mjs').then(m => m.default)}
  },
};
