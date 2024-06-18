<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps({
    atTop: {
        type: Boolean,
        default: true,
    },
});

const atTop = ref(true);
const open = ref(false);

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    atTop.value = (scrollTop > 240) ? false : true;
});
</script>

<template>
    <div class="fixed inset-x-0 top-2 lg:top-8 z-50">
        <div class="mx-auto px-8 transition-all duration-1000 ease-in-out transform"
            :class="{ 'max-w-2xl ': !atTop, 'lg:max-w-lg': atTop }">
            <div
                class="flex flex-col backdrop-blur-xl backdrop-filter bg-onyx-900/60 border border-onyx-800 md:flex-row md:items-center md:justify-between mx-auto p-2 relative lg:rounded-2xl rounded-xl shadow-massive w-full">
                <div class="items-center flex flex-row justify-between md:justify-start">
                    <Link class="text-white inline-flex text-xs items-center font-display pl-2 hover:text-white/50"
                        href="/">
                    <span>{{ $page.props.app.name }}</span>
                    </Link>
                    <button @click="open = !open"
                        class="text-white inline-flex focus:outline-none focus:text-white hover:text-blue-300 items-center justify-center md:hidden p-2">
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path v-if="!open" d="M4 6h16M4 12h16M4 18h16" class="inline-flex" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2">
                            </path>
                            <path v-else="open" d="M6 18L18 6M6 6l12 12" class="inline-flex" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2">
                            </path>
                        </svg>
                    </button>
                </div>
                <nav class="flex-col md:flex-row flex-grow justify-center md:flex md:items-end md:py-0 py-12"
                    :class="{ 'flex': open, 'hidden': !open }">
                    <ul
                        class="items-center gap-y-6 md:gap-3 justify-center list-none md:inline-flex md:ml-auto  md:text-left  text-center">
                        <li>
                            <a href="/system/overview" title="link to your page" aria-label="your label"
                                class=" text-xs text-white hover:text-blue-300">Overview</a>
                        </li>
                        <li>
                            <a href="/system/styleguide" title="link to your page" aria-label="your label"
                                class=" text-xs text-white hover:text-blue-300">Style Guide</a>
                        </li>
                        <li>
                            <a href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/7064a23c-2b0a-45a4-8e4a-8a9227ee8b0c"
                                title="link to your page" aria-label="your label"
                                class="inline-flex items-center px-4 py-2 text-xs text-onyx-950 text-center transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-tr from-blue-500 h-10 via-blue-400 to-blue-300 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                                Buy {{ $page.props.app.name }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
