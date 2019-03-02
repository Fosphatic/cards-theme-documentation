module.exports = {
  base: "/cards-theme-documentation/",
  title: 'October CMS Theme',
  serviceWorker: true,
  description: 'Documentation',
  displayAllHeaders: true,
  sidebar: 'auto',

  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
    '/',
    {
      title: 'Getting Started',
      collapsable: true,
      children: [
      '/guide/',
      '/guide/quickstarted'
      ]
    },
    ],
    logo: '/assets/img/logo.svg',
  }
 }
