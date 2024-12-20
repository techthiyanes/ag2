/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");

customPostCssPlugin = () => {
  return {
    name: "custom-postcss",
    configurePostCss(options) {
      options.plugins.push(require("postcss-preset-env"));
      return options;
    },
  };
};

module.exports = {
  title: "AG2",
  tagline: "The Open Source Agent OS",
  url: "https://ag2ai.github.io",
  baseUrl: "/ag2/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ag2.ico",
  organizationName: "ag2ai", // Usually your GitHub org/user name.
  projectName: "ag2", // Usually your repo name.
  scripts: [
    {
      src: "/js/custom.js",
      async: true,
      defer: true,
    },
  ],
  markdown: {
    format: "detect", // Support for MD files with .md extension
  },
  themeConfig: {
    themeConfig: {
      colorMode: {
        defaultMode: 'dark',
      },
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "AG2",
      logo: {
        alt: "AG2",
        src: "img/ag2.svg",
      },
      items: [
        {
          type: "dropdown",
          position: "left",
          label: "Docs",
          items: [
            {
              type: "doc",
              label: "Getting Started",
              docId: "Getting-Started",
            },
            {
              type: "doc",
              label: "Installation",
              docId: "installation/Installation",
            },
            {
              type: "doc",
              label: "Tutorial",
              docId: "tutorial/introduction",
            },
            {
              type: "doc",
              label: "User Guide",
              docId: "topics",
            },
            {
              type: "doc",
              docId: "reference/agentchat/conversable_agent",
              label: "API Reference",
            },
            {
              type: "doc",
              docId: "FAQ",
              label: "FAQs",
            },
            {
              type: "doc",
              docId: "autogen-studio/getting-started",
              label: "AutoGen Studio",
            },
            {
              type: "doc",
              docId: "ecosystem",
              label: "Ecosystem",
            },
            {
              type: "doc",
              label: "Contributor Guide",
              docId: "contributor-guide/contributing",
            },
            {
              type: "doc",
              label: "Research",
              docId: "Research",
            },
          ],
        },
        {
          type: "dropdown",
          position: "left",
          label: "Examples",
          items: [
            {
              type: "doc",
              label: "Examples by Category",
              docId: "Examples",
            },
            {
              type: "doc",
              label: "Examples by Notebook",
              docId: "notebooks",
            },
            {
              type: "doc",
              label: "Application Gallery",
              docId: "Gallery",
            },
          ],
        },
        {
          label: "Other Languages",
          type: "dropdown",
          position: "left",
          items: [
            {
              label: "Dotnet",
              href: "https://ag2ai.github.io/autogen-for-net/",
            },
          ],
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "talks",
          label: "Community Talks",
          position: "left",
        },
        {
          href: "https://ag2.ai/",
          label: "AG2.ai",
          position: "right",
        },
        {
          href: "https://github.com/ag2ai/ag2",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/pAbnFJrkgZ",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://twitter.com/Chi_Wang_",
          label: "Twitter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          // title: "Community",
          items: [
            //     // {
            //     //   label: 'Stack Overflow',
            //     //   href: 'https://stackoverflow.com/questions/tagged/pymarlin',
            //     // },
            // {
            //   label: "Discord",
            //   href: "https://discord.gg/pAbnFJrkgZ",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/Chi_Wang_",
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AG2 Authors`,
    },
    // announcementBar: {
    //   id: "whats_new",
    //   content:
    //     'What\'s new in AutoGen? Read <a href="/autogen/blog/2024/03/03/AutoGen-Update">this blog</a> for an overview of updates',
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: true,
    // },
    /* Clarity Config */
    // clarity: {
    //   ID: "lnxpe6skj1", // The Tracking ID provided by Clarity
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          // Adjust any other blog settings as needed
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ag2ai/ag2/edit/main/website/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'talks',
        routeBasePath: 'talks',
        path: './talks',
        showReadingTime: true,
        blogSidebarCount: "ALL",
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        blogDir: "./blog/",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
    customPostCssPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/topics/llm_configuration",
            from: ["/docs/llm_endpoint_configuration/"],
          },
          {
            to: "/docs/Getting-Started",
            from: ["/docs/"],
          },
          {
            to: "/docs/topics/llm_configuration",
            from: ["/docs/llm_configuration"],
          },
          {
            to: "/docs/tutorial/chat-termination",
            from: ["/docs/tutorial/termination"],
          },
          {
            to: "/docs/tutorial/what-next",
            from: ["/docs/tutorial/what-is-next"],
          },
          {
            to: "/docs/topics/non-openai-models/local-lm-studio",
            from: ["/docs/topics/non-openai-models/lm-studio"],
          },
          {
            to: "/docs/notebooks/agentchat_nested_chats_chess",
            from: ["/docs/notebooks/agentchat_chess"],
          },
          {
            to: "/docs/notebooks/agentchat_nested_chats_chess_altmodels",
            from: ["/docs/notebooks/agentchat_chess_altmodels"],
          },
          {
            to: "/docs/contributor-guide/contributing",
            from: ["/docs/Contribute"],
          },
        ],
      },
    ],
    // ["docusaurus-plugin-clarity", {}],
  ],
};
