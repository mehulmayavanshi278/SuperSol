import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Supersol Docs',
  tagline: 'Documentation for SuperSol',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'your-github-org', 
  projectName: 'router-docs',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/your-github-org/router-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/your-github-org/router-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        // Options for the search plugin
      }
    ],
  ],

  themeConfig: {
    // Add SuperSol colors here
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'SuperSol',
      logo: {
        alt: 'SuperSol Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introSidebar',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Developers',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'developersSidebar',
        //   position: 'left',
        //   label: 'developers',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'rpcSidebar',
        //   position: 'left',
        //   label: 'RPC API',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'resourcesSidebar',
        //   position: 'left',
        //   label: 'Resource',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'svmBNBSidebar',
        //   position: 'left',
        //   label: 'svmBNB',
        // },
        

        // {
        //   href: 'https://github.com/your-github-org/router-docs',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/introduction/',
            },
            {
              label: 'Developers',
              to: 'docs/developers/Getting-Started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/8p9Yn9nAWY',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/_supersol',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SuperSol. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;