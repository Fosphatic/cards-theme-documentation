module.exports = {
  base: "/cards-theme-documentation/",
  title: 'October CMS Theme ',
  description: 'Documentation',
  dest: 'gh-pages',
  themeConfig: {
    sidebar: {
    '/guide/': [
      '',
      'getting-started'
    ],
    '/': [
      ''
    ]
  },
   nav: [
     { text: 'Home', link: '/' },
     { text: 'Guide', link: '/guide/' },
     { text: 'External', link: 'https://google.com' },
   ],
   logo: '/assets/img/logo.svg',
   displayAllHeaders: true,
   sidebar: 'auto'
 }
}
