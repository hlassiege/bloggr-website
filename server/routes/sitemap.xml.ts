import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const docs = await serverQueryContent(event).find();
    const sitemap = new SitemapStream({
        hostname: config.public.url,
    });
    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
        });
    }
    sitemap.write({
        url: "/", // homepage
    });
    sitemap.end();
    return streamToPromise(sitemap);
});
