<template>
    <div>
        <h1 class="text-4xl text-gray-700 font-extrabold text-center mb-3">
            {{ article.title }}
        </h1>

        <div class="grid grid-cols-3 text-center sm:w-full md:w-1/2 mx-auto">
            <div>
                <p class="text-center font-bold my-4 text-slate-500 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    {{ formatDate(article.date) }}
                </p>
            </div>
            <div>
                <p class="text-center font-bold my-4 text-slate-500 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    {{ article.readingTime.text }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { formatDate } from "~/common/format";
const config = useRuntimeConfig();

defineProps<{
    article: any;
}>();
</script>
