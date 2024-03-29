<template>
    <TheHeader :author-id="doc.author" />
    <main class="mt-28">
        <div v-if="doc">
            <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
                <div class="text-left mx-auto">
                    <div class="flex flex-wrap lg:flex-row-reverse py-12">
                        <div v-if="isTocEnabled" class="w-full lg:w-1/4 px-5">
                            <PageSidebar :toc="doc.body.toc.links" />
                        </div>

                        <div
                            class="w-full px-5 max-w-none centered-image"
                            :class="isTocEnabled ? 'lg:w-3/4 ' : ''"
                        >
                            <ContentRenderer
                                id="nuxtContent"
                                :value="doc"
                                class="prose text-sm md:text-xl min-w-full md:p-10 mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <hr class="mb-8" />
            </div>
        </div>
    </main>
    <TheFooter />
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, async () => {
    return await queryContent("").where({ _path: route.path }).findOne();
});

const isTocEnabled =
    doc.value?.body?.toc?.links.length &&
    doc.value?.body.toc?.links.length > 0 &&
    (config.public.table_of_contents || doc.value?.table_of_contents);

onMounted(() => {
    useYoutubeTwitterEnhancer("nuxtContent");
});

onMounted(() => {
    const images = document.querySelectorAll(".prose img");

    images.forEach((img) => {
        const captionText = img.alt;
        const captionElement = document.createElement("div");
        captionElement.textContent = captionText;
        captionElement.classList.add(
            "text-sm",
            "text-center",
            "text-gray-600",
            "mt-1",
        );
        img.parentNode?.insertBefore(captionElement, img.nextSibling);
    });
});

if (doc.value) {
    useContentHead(doc.value);
}

useHead({
    meta: [
        { key: "og:type", name: "og:type", content: "article" },
        {
            key: "og:url",
            name: "og:url",
            content: config.public.url + doc.value?._path,
        },
        {
            key: "og:image",
            name: "og:image",
            content: config.public.url + "/images/" + doc.value?.cover,
        },
        { name: "og:image:alt", content: doc.value?.title },
        { name: "twitter:text:title", content: doc.value?.title },
        {
            name: "twitter:image",
            content: config.public.url + "/images/" + doc.value?.cover,
        },
        { name: "twitter:card", content: "summary" },
        {
            name: "article:published_time",
            content: new Date(doc.value?.date).toISOString(),
        },
        {
            name: "article:article:modified_time",
            content: new Date(doc.value?.date).toISOString(),
        },
        {
            name: "article:article:tag",
            content: doc.value?.tags ? doc.value.tags?.toString() : "",
        },
    ],
    link: [
        {
            rel: "canonical",
            href: config.public.url + doc.value?._path,
        },
    ],
});
</script>
