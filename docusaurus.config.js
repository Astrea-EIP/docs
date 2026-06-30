import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astrea Engineering Handbook',
  tagline: 'Official engineering standards and documentation for Astrea-EIP',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://astrea-eip.github.io',
  baseUrl: '/',
  organizationName: 'Astrea-EIP',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Astrea Engineering Handbook',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/architecture/overview',
            label: 'Architecture',
            position: 'left',
          },
          {
            to: '/contribution/getting-started',
            label: 'Contribution',
            position: 'left',
          },
          {
            to: '/workflows/ci',
            label: 'Workflows',
            position: 'left',
          },
          {
            href: 'https://github.com/Astrea-EIP',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Handbook',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'Contribution',
                to: '/contribution/getting-started',
              },
              {
                label: 'Workflows',
                to: '/workflows/ci',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astrea-EIP.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
