// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// require('dotenv').config({ path: `.env.local`, override: true });
require('dotenv').config({});

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const logo = '/img/avatar.webp';
const organizationName = "YourName"; // Your github username or your organization name
const projectName = "YourName.github.io"; // your repo name, ex: docusaurus-2, this is used to generate edit project link
const baseUrl = projectName.includes(".github.io") ? '/' : `/${projectName}`;
const footerLinks = [
    {
        title: 'YourName',
        items: [
            {
                label: 'Home',
                to: '/',
            },
        ],
    },
    {
        title: 'Community',
        items: [
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tien-nhm',
            },
            {
                label: 'Facebook',
                href: 'https://www.facebook.com/01.tien',
            },
            {
                label: 'Youtube',
                href: 'https://www.youtube.com/TienNguyen09',
            },
        ],
    },
    {
        title: 'More',
        items: [
            {
                label: 'Blog',
                to: '/blog',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/YourName',
            },
            {
                label: 'Google for Developers',
                href: 'https://g.dev/YourName',
            },
            {
                label: 'Email',
                href: 'mailto:YourName.it@gmail.com',
            },
        ],
    },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'YourName',
    tagline: 'Tag line of YourName',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: `https://${organizationName}.github.io`,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: `${baseUrl}`,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: `${organizationName}`, // Usually your GitHub org/user name.
    projectName: `${projectName}`, // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'google-site-verification',
                content: process.env.GOOGLE_SITE_VERIFICATION,
            }
        }
    ],

    // process the env variables
    customFields: {
        // Put your custom environment here
        CANNY_BOARD_TOKEN: process.env.CANNY_BOARD_TOKEN,
        GITHUB_REPO_ID: process.env.GITHUB_REPO_ID,
        GITHUB_REPO: process.env.GITHUB_REPO,
        GITHUB_CATEGORY_ID: process.env.GITHUB_CATEGORY_ID,
    },

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/master`,
                    editLocalizedFiles: true,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/master`,
                    postsPerPage: 5,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    blogTitle: 'Blog',
                    blogDescription: 'Your blog description',
                    blogListComponent: '@theme/BlogListPage',
                    blogPostComponent: '@theme/BlogPostPage',
                    blogTagsListComponent: '@theme/BlogTagsListPage',
                    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                    editLocalizedFiles: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    plugins: [
        [
            'ideal-image',
            /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
            ({
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                // Use false to debug, but it incurs huge perf costs
                disableInDev: true,
            }),
        ],
        '@docusaurus/theme-mermaid',
    ],

    themes: ['@docusaurus/theme-live-codeblock'],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'YourName',
                logo: {
                    alt: 'YourName',
                    src: 'img/avatar.webp',
                    height: 40,
                    style: {
                        borderRadius: '50%',
                    }
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    { to: '/showcase', label: 'Showcase', position: 'left' },
                    // { to: '/cv', label: 'CV', position: 'left' },
                    { to: '/community', label: 'Community', position: 'left' },
                    { to: '/contact', label: 'Contact', position: 'left' },
                    {
                        href: 'https://github.com/YourName',
                        // label: 'GitHub',
                        position: 'right',
                        className: "header-github-link",
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: footerLinks,
                copyright: `Copyright © ${new Date().getFullYear()} YourName.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            metadata: [
                { name: 'keywords', content: 'YourName, blog, coding, tools, others keywords...' },
                { name: 'description', content: 'YourName description...' },
                { name: 'author', content: 'YourName' },
                { name: 'title', content: 'YourName - Blog' },
                { property: 'og:title', content: 'YourName - Blog' },
                { property: 'og:description', content: 'YourName description...' },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: logo },
                { property: 'og:url', content: 'https://yourname.com' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:image', content: logo },
                { name: 'twitter:title', content: 'YourName - Blog' },
                { name: 'twitter:description', content: 'YourName description...' },
            ],
            algolia: {
                // The application ID provided by Algolia
                appId: process.env.ALGOLIA_APP_ID,
                // Public API key: it is safe to commit it
                apiKey: process.env.ALGOLIA_API_KEY,
                indexName: process.env.ALGOLIA_INDEX_NAME,
                contextualSearch: true,
            },
        }),
};

module.exports = config;
