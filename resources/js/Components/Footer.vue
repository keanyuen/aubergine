<script setup></script>
<template>
    <footer aria-labelledby="footer-heading">
        <div class="px-8 py-6 mx-auto md:px-12 lg:px-36 max-w-7xl">
            <div>
                <div
                    class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
                    <div class="md:mx-auto lg:text-center">
                        <div class="flex items-center text-white">
                            <div class="md:mx-auto md:text-center">
                                <div class="text-white items-center flex">
                                    <div class="lg:mx-auto lg:text-center">
                                        <p class="font-semibold lg:mx-auto italic lg:text-4xl text-2xl font-display">
                                            {{ $page.props.app.name }}
                                        </p>
                                        <p class="mt-1 text-sm text-onyx-400">
                                            Designed and built in the Somewhere<br>by uicopycat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class="mt-11 flex flex-col md:flex-row gap-8"> <a
                                class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-onyx-300 transition-colors delay-150 hover:text-white hover:delay-[0ms] hover:bg-onyx-900"
                                href="/system/overview"><span class="relative z-10">Overview</span> </a> <a
                                class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-onyx-300 transition-colors delay-150 hover:text-white hover:delay-[0ms] hover:bg-onyx-900"
                                href="/system/styleguide"><span class="relative z-10">Style Guide</span> </a> <a
                                class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-onyx-300 transition-colors delay-150 hover:text-white hover:delay-[0ms] hover:bg-onyx-900"
                                href="/#faqs"><span class="relative z-10">FAQs</span> </a> <a
                                class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-onyx-300 transition-colors delay-150 hover:text-white hover:delay-[0ms] hover:bg-onyx-900"
                                href="https://twitter.com/Mike_Andreuzza"><span class="relative z-10">Social</span>
                            </a> </nav>
                    </div>
                </div>
                <div class="flex flex-col pb-12 lg:mx-auto lg:text-center">
                    <p class="text-sm text-onyx-300 md:mt-0 border-t border-onyx-800 pt-8 max-w-2xl md:mx-auto">
                        © Copyright <span>2024</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
