/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Godwoken Documentation',
  tagline: 'Godwoken Documentation',
  url: 'https://github.com',
  baseUrl: '/godwokensite-sample/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ashleewang888', // Usually your GitHub org/user name.
  projectName: 'godwokensite-sample', // Usually your repo name.
  deploymentBranch: "gh-pages",
  
  plugins: [
    'docusaurus-plugin-matomo',
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: 'W0P1A076NN',
      apiKey: "4a00c5457da3a6e940925cf7cb834418",
      indexName: "godwoken",
    },	
    navbar: {
	hideOnScroll: true,
      title: 'Godwoken Documentation',
      logo: {
        alt: 'Nervos',
        src: 'img/favicon.png',
		href: 'https://www.nervos.org/',
      },
      
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },

        {
          href: 'https://github.com/nervosnetwork/godwoken',
          label: 'GitHub',
          position: 'right',
        },
		{
          label: 'Discord',
          href: 'https://discord.gg/TfC9rExfHh',
		  position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Foundation. All Rights Reserved.`,
    },
    matomo: {
      matomoUrl: 'https://cryptapeblog.matomo.cloud/',
      siteId: '2',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-215912231-1',
          anonymizeIP: true,
        },
        docs: {
			path: 'docs',
			sidebarPath: require.resolve('./sidebars.js'),
			routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
