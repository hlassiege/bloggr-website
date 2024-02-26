// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                        {
                            src: "https://api.pirsch.io/pirsch.js",
                            id: "pirschjs",
                            defer: true,
                            "data-code": process.env.PIRSCH_CODE,
                            type: "text/javascript",
                        },
                    ]
                    : []),
            ],
        },
    },

    runtimeConfig: {
        public: {
            url: "https://bloggr.eventuallycoding.com/",
            logo: "/images/logo.png",

            // If you only have one author, you can set the author here
            // It will be used as the default author for all posts AND as the general logo/description/socials for the website
            name: "Bloggr",
            avatar: "/images/avatar.jpg",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

            socials: {
                twitter: "https://twitter.com/hugolassiege",
                mastodon: "https://piaille.fr/@hugolassiege",
                github: "https://github.com/hlassiege",
            },

            comments: {
                enabled: true,
                hyvor_talk: {
                    website_id: process.env.HYVOR_ID
                        ? process.env.HYVOR_ID
                        : "YOUR_HYVOR_TALK_WEBSITE_ID",
                },
            },

            table_of_contents: false,

            // if you have multiple authors, you can set them here
            authors: [],

            menu: [
                { name: "Home", path: "/" },
                { name: "Documentation", path: "/documentation" },
            ],
        },
    },

    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxt/content", "@nuxt/image"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
        format: ["webp"],
    },
    content: {
        markdown: {
            remarkPlugins: ["remark-reading-time"],
        },
        highlight: {
            theme: {
                default: "catppuccin-frappe",
                // Theme used if `html.dark`
                dark: "github-dark",
            },
        },
    },
    nitro: {
        prerender: {
            routes: ["/sitemap.xml", "/rss.xml"],
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ["hyvor-talk-comments"].includes(tag),
        },
    },
});
