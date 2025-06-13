// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Maestria en Ciberseguridad UAX",
  tagline:
    "Repositorio para la preparacion de examenes del primer parcial de la Maestria en Ciberseguridad de la UAX",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://LeCipher.github.io",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/RepoMaestria",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LeCipher", // Usually your GitHub org/user name.
  projectName: "RepoMaestria", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages", // Rama para el despliegue

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/LeCipher/RepoMaestria",
            label: "GitHub",
            position: "right",
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'InteligenciaDeAmenazasSidebar',
          //   position: 'left',
          //   label: 'Inteligencia de Amenzas',
          // },
          // {
          //   type: "dropdown",
          //   label: "Materias del Master",
          //   position: "left", // o 'right'
          //   items: [
          //     {
          //       type: "docSidebar",
          //       sidebarId: "InteligenciaDeAmenazasSidebar",
          //       label: "Inteligencia de Amenazas",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "analisisDeRiesgosSidebar",
          //       label: "Análisis de Riesgos",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "ControlDelRiesgoCiberseguridad",
          //       label: "Control del Riesgo de Ciberseguridad	",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "MarcoNormativo",
          //       label: "Marco Normativo",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "Privacidad",
          //       label: "Privacidad",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "SeguridadEnProcesos",
          //       label: "Seguridad en Procesos de Tecnología",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "ArquitecturaCiberseguridad",
          //       label: "Arquitecturas de ciberseguridad",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "CriptografiaGICA",
          //       label: "Criptografía y gestión de identidades",
          //     },
          //     {
          //       type: "docSidebar",
          //       sidebarId: "CadenaDeSuministro",
          //       label: "Seguridad en la cadena de suministro",
          //     },
          //   ],
          // },

          {
            type: "dropdown",
            label: "Materias del Master",
            position: "left", // o 'right'
            items: [
              {
                type: "docSidebar",
                sidebarId: "SeguridadNube",
                label: "Seguridad en la Nube",
              },
              {
                type: "docSidebar",
                sidebarId: "HackingEtico",
                label: "Hacking Ético",
              },
              {
                type: "docSidebar",
                sidebarId: "MonitorizacionRespuesta",
                label: "Monitorización y Respuesta",
              },
            ],
          },





          {
            type: "docSidebar",
            sidebarId: "Horarios",
            label: "Horario - Examenes",
          },
          {
            type: "docSidebar",
            sidebarId: "LibroCompTIA",
            label: "CompTIA Security+",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Materias",
            items: [
              {
                label: "Análisis de Riesgo",
                to: "/docs/materia/analisis-de-riesgo/intro",
              },
            ],
          },
          {
            title: "Contribuir",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/LeCipher/RepoMaestria",
              },
            ],
          },
          {
            title: "Conoce Más",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
