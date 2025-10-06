
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://charly320.github.io/CurriculumVitaeWeb/',
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
    'index.csr.html': {size: 33432, hash: '224088af053320e4318ac9dcdc1cc9bdc39c2844140801378426540b82e39063', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 33314, hash: 'd6ce3d7cebde251120976482b6e580985f66e16aeef6b39008057a88b1b8c3cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 86665, hash: '3d826643e45d84ceb5d950b717b776095efc8dcd1476881265943b1aaac1baa9', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 83978, hash: '913a6e32a83c611c489d26fd3d8453d2be4a43cceca174ba6fd82338809c6fe3', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86328, hash: '2b648107efc9a85a8e98a5b005681ba1cfae02bb3e97116b69534af94a1770ee', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 88764, hash: '56f5c88a951277523cbe4cc698637485e27d76029e64f90b3e55f44583f34f25', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 79112, hash: '4e12fb4c87dbc74f97702f719717f0f8320c8cbd95bb0dee2d4c773a262666a6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-B24C25XY.css': {size: 1840, hash: '+/lPnE5FBi8', text: () => import('./assets-chunks/styles-B24C25XY_css.mjs').then(m => m.default)}
  },
};
