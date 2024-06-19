<script setup>
import Footer from '@/Components/Footer.vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import Navbar from '@/Components/Navbar.vue';
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <MainLayout>

        <Head title="Home" />

        <Navbar />

        <section class="relative overflow-hidden">
            <div
                class="absolute inset-x-0 top-0 h-96 rotate-180 text-onyx-400/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
                <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%"
                            patternTransform="translate(0 -1)">
                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
                </svg>
            </div>
            <div class="px-8 pt-32 pb-24 mx-auto md:px-12 lg:px-36 lg:pt-64 max-w-7xl relative">
                <div class="text-center mx-auto" data-aos="fade-down" data-aos-duration="3000">
                    <h1 class="text-4xl lg:text-5xl text-white font-display">
                        Web development subscriptions
                        <span class="md:block text-onyx-400">to scale your life and business.</span>
                    </h1>
                    <p class="text-onyx-300 mt-4">A design agency without a twist</p>
                    <div class="flex flex-wrap gap-3 mt-12 justify-center">
                        <a href="/" title="link to your page" aria-label="your label"
                            class="inline-flex items-center h-12 justify-center w-full sm:w-auto px-6 py-3 text-sm text-center duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-gradient-to-tr shadow-massive from-indigo-500 via-indigo-400 to-indigo-300 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-onyx-900 focus:ring-offset-2 focus:ring-indigo-300 hover:shadow-none">
                            See all pages
                        </a>
                        <a href="#benefits" title="link to your page" aria-label="your label"
                            class="inline-flex items-center h-12 justify-center w-full sm:w-auto px-6 py-3 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive focus:outline-none focus:ring-2 hover:text-blue-300 focus:ring-offset-2 focus:ring-onyx-300 hover:shadow-none focus:ring-offset-onyx-900">
                            Buy {{ $page.props.app.name }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="px-8 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div
                    class="grid grid-cols-1 py-12 items-center lg:grid-cols-4 border-y md:grid-cols-2 border-onyx-800 lg:gap-24">
                    <div class="col-span-full lg:col-span-1 lg:max-w-none lg:mr-auto mx-auto">
                        <p class="text-onyx-300 text-xs">
                            Some of the mazing companies we have worked with
                        </p>
                    </div>
                    <div class="mt-12 lg:mt-0 md:col-span-3">
                        <div class="flex flex-wrap justify-between">
                            <img alt="Discord Logo" class="h-8 " src="https://aubergine.lexingtonthemes.com/logos/discord.svg">
                            <img alt="Zoom Logo" class="h-8 " src="https://aubergine.lexingtonthemes.com/logos/zoom.svg">
                            <img alt="ClassPass Logo" class="h-8 " src="https://aubergine.lexingtonthemes.com/logos/classpass.svg">
                            <img alt="Splunge Logo" class="h-8 hidden sm:block" src="https://aubergine.lexingtonthemes.com/logos/splunge.svg">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="overflow-hidden relative">
            <div class="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div data-aos="fade-up" data-aos-duration="2000" class="aos-init aos-animate">
                    <h3 class="text-4xl text-white font-display">
                        We did reinvented the <span class="md:block text-onyx-500">wheel and also just design</span>
                    </h3>
                </div>
                <div class="relative flex flex-wrap mt-24">
                    <div class="absolute top-8 left-0 right-0 hidden lg:block h-[1px] -z-1">
                        <div class="h-[1px] w-full bg-blue-300 aos-init aos-animate" data-aos="fade-left"
                            data-aos-duration="3000">
                            &zwnj;
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-6 lg:grid-cols-4 relative">
                        <div class="w-full pb-4 border-b border-onyx-800">
                            <span data-aos="fade-down" data-aos-duration="500"
                                class="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-blue-300 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 border-onyx-800 shadow-massive aos-init aos-animate">
                                1
                            </span>
                            <div>
                                <p class="mt-12 text-xl font-medium leading-6 text-white"> Submit </p>
                                <p class="mt-4 text-base text-onyx-300">Subscribe to a plan &amp; request as many
                                    designs as you'd like.</p>
                            </div>
                        </div>
                        <div class="w-full pb-4 border-b border-onyx-800">
                            <span data-aos="fade-down" data-aos-duration="1000"
                                class="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-blue-300 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 border-onyx-800 shadow-massive aos-init aos-animate">
                                2
                            </span>
                            <div>
                                <p class="mt-12 text-xl font-medium leading-6 text-white"> Refine </p>
                                <p class="mt-4 text-base text-onyx-300">Receive your design within a few business days
                                    on average.</p>
                            </div>
                        </div>
                        <div class="w-full pb-4 border-b border-onyx-800">
                            <span data-aos="fade-down" data-aos-duration="1500"
                                class="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-blue-300 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 border-onyx-800 shadow-massive aos-init aos-animate">
                                3
                            </span>
                            <div>
                                <p class="mt-12 text-xl font-medium leading-6 text-white"> Build </p>
                                <p class="mt-4 text-base text-onyx-300">We'll revise the designs until you're 100%
                                    satisfied.</p>
                            </div>
                        </div>
                        <div class="w-full pb-4 border-b border-onyx-800">
                            <span data-aos="fade-down" data-aos-duration="2500"
                                class="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-blue-300 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 border-onyx-800 shadow-massive shadow-[0px_0px_0px_3px_#5576F9,0px_0px_0px_6px_rgba(124,150,250,0.5)] aos-init aos-animate">
                                4
                            </span>
                            <div>
                                <p class="mt-12 text-xl font-medium leading-6 text-white"> Enjoy </p>
                                <p class="mt-4 text-base text-onyx-300">Enjoy your marvellous new website!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000"
                    class="text-center ring-1 ring-onyx-800 border bg-gradient-to-tr from-onyx-950 to-onyx-700 border-onyx-800 shadow-big h-full lg:col-span-full lg:p-20 mt-24 p-8 rounded-4xl relative aos-init aos-animate">
                    <h4 class="lg:text-3xl text-white font-display">
                        "Aubergine Studio are a rare breed of designers
                        <span class="md:block">and developers they understands business needs."</span>
                    </h4>
                    <p class="text-onyx-300 text-xl mt-6 italic uppercase">
                        Gerard Depardieu
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-24 lg:text-center">
                    <div class="pb-4 border-b border-onyx-800">
                        <p class="text-xl font-medium leading-6 text-white"> Totally async </p>
                        <p class="mt-4 text-base text-onyx-300">Don't like meetings? We don't either; so much so that we've outlawed them.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <p class="text-xl font-medium leading-6 text-white"> Manage with Trello </p>
                        <p class="mt-4 text-base text-onyx-300">Manage your design board using Trello. View active, queued, and completed tasks.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <p class="text-xl font-medium leading-6 text-white"> Invite unlimited team members </p>
                        <p class="mt-4 text-base text-onyx-300">Invite your entire team, so anyone can submit requests and track their progress.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
                <div data-aos="fade-up" data-aos-duration="2000" class="aos-init">
                    <h3 class="text-4xl text-white font-display">
                        We can do many things for you,<span class="md:block text-onyx-400">
                            but this is what we do best</span> </h3>
                    <div class="flex flex-wrap mt-12"> <a href="/services/home" title="link to your page"
                            aria-label="your label"
                            class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl focus:outline-none focus:ring-2 hover:text-blue-300 focus:ring-offset-2 focus:ring-onyx-300 focus:ring-offset-onyx-900">Get
                            a grasp of all our services
                        </a> </div>
                </div>
                <ul class="grid grid-cols-2 sm:grid-cols-2 order-y py-6 mt-12 border-onyx-800 md:grid-cols-4 gap-4">
                    <li>
                        <p class="text-base text-onyx-300">Websites</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Mobile Apps</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Logos &amp; branding</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Design systems</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">SAAS</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Wireframes</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Stationary</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Pitch decks</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Slide decks</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Direct mail</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Infographics</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Brochures</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Signage</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Brand guides</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Social media graphics</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Billboards</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Trade show banners</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Email graphics</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Resumes</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Business cards</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Packaging</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Blog graphics</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Digital ads</p>
                    </li>
                    <li>
                        <p class="text-base text-onyx-300">Icons</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="overflow-hidden relative">
            <div class="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
                <div data-aos="fade-up" data-aos-duration="2000" class="aos-init">
                    <h3 class="text-4xl text-white font-display">
                        Non award winning designs,
                        <span class="md:block text-onyx-400">
                            and simply just that and that.</span>
                    </h3>
                    <div class="flex flex-wrap mt-12"> <a href="/work/home" title="link to your page"
                            aria-label="your label"
                            class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl focus:outline-none focus:ring-2 hover:text-blue-300 focus:ring-offset-2 focus:ring-onyx-300 focus:ring-offset-onyx-900">See
                            all our work
                        </a> </div>
                </div>
                <ul role="list" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-24">
                    <li>
                        <figure
                            class="relative tilt-card h-full p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive"
                            style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                            <a href="/work/1" title="JetBrains ToolBox" aria-label="JetBrains ToolBox"
                                class="h-full group flex flex-col justify-between">
                                <img src="https://aubergine.lexingtonthemes.com/logos/jetbrains.svg"
                                    alt="JetBrains ToolBox" class="object-cover shrink-0 h-16 w-16">
                                <blockquote class="relative space-y-3 mt-24">
                                    <span class="text-xs text-onyx-400">2024</span>
                                    <p class="text-sm font-medium leading-6 text-white">
                                        JetBrains ToolBox / <span class="text-onyx-300"> Software Development</span>
                                    </p>
                                    <p class="text-base text-onyx-300 line-clamp-3">
                                        IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.
                                    </p>
                                </blockquote>
                            </a>
                        </figure>
                    </li>
                    <li>
                        <figure
                            class="relative tilt-card h-full p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive"
                            style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                            <a href="/work/2" title="Figma" aria-label="Figma"
                                class="h-full group flex flex-col justify-between">
                                <img src="https://aubergine.lexingtonthemes.com/logos/figma.svg" alt="Figma"
                                    class="object-cover shrink-0 h-16 w-16">
                                <blockquote class="relative space-y-3 mt-24">
                                    <span class="text-xs text-onyx-400">2022</span>
                                    <p class="text-sm font-medium leading-6 text-white">
                                        Figma / <span class="text-onyx-300"> Design &amp; Development Collaboration
                                            Platform</span>
                                    </p>
                                    <p class="text-base text-onyx-300 line-clamp-3">
                                        Figma is an online whiteboard where everyone who builds products can
                                        collaborate.
                                    </p>
                                </blockquote>
                            </a>
                        </figure>
                    </li>
                    <li>
                        <figure
                            class="relative tilt-card h-full p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive"
                            style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                            <a href="/work/3" title="Kayako" aria-label="Kayako"
                                class="h-full group flex flex-col justify-between">
                                <img src="https://aubergine.lexingtonthemes.com/logos/kayako.svg" alt="Kayako"
                                    class="object-cover shrink-0 h-16 w-16">
                                <blockquote class="relative space-y-3 mt-24">
                                    <span class="text-xs text-onyx-400">2022</span>
                                    <p class="text-sm font-medium leading-6 text-white">
                                        Kayako / <span class="text-onyx-300"> Help Desk Software Development &amp;
                                            Design</span>
                                    </p>
                                    <p class="text-base text-onyx-300 line-clamp-3">
                                        Kayako provides a complete help desk experience with a fully customizable
                                        knowledge base.
                                    </p>
                                </blockquote>
                            </a>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>

        <section class="overflow-hidden relative">
            <div class="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
                <div class="lg:text-center max-w-3xl lg:mx-auto aos-init" data-aos="fade-up" data-aos-duration="2000">
                    <h3 class="text-4xl text-white font-display">Membership benefits</h3>
                    <p class="text-onyx-300 mt-4">
                        Perks so good you'll never need to go
                        <span class="md:block"> anywhere else for your design. Seriously.</span>
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-x-6 mt-24 lg:gap-y-24 lg:text-center">
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-right" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M26,4V28H6V4H26m0-2H6A2,2,0,0,0,4,4V28a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Z">
                                    </path>
                                    <path
                                        d="M9 23H11V25H9zM21 23H23V25H21zM9 18H11V20H9zM21 18H23V20H21zM9 13H11V15H9zM15 23H17V25H15zM15 18H17V20H15zM15 13H17V15H15zM21 13H23V15H21zM9 7H23V10H9z">
                                    </path>
                                    <title>Calculator</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Calculable Monthly Costs </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">Replaces a web department, agency, or freelancer with a
                            simple monthly fee, without any hidden fees or contracts.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-down" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z">
                                    </path>
                                    <path d="M20.59 22L15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22z"></path>
                                    <title>Time</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Get 24/7 Control </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">Submit as many requests as you like. We will adapt
                            respectively and work on them one by one as you submit them.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-left" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M4 16H16V18H4zM2 11H12V13H2z"></path>
                                    <path
                                        d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z">
                                    </path>
                                    <title>Delivery</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Fast &amp; Professional </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">With more than 5 years of experience in the web industry
                            and more than 100k customers, we deliver high quality.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-right" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M30,10.68l-2-6A1,1,0,0,0,27,4H5a1,1,0,0,0-1,.68l-2,6A1.19,1.19,0,0,0,2,11v6a1,1,0,0,0,1,1H4V28H6V18h6V28H28V18h1a1,1,0,0,0,1-1V11A1.19,1.19,0,0,0,30,10.68ZM26,26H14V18H26Zm2-10H24V12H22v4H17V12H15v4H10V12H8v4H4V11.16L5.72,6H26.28L28,11.16Z">
                                    </path>
                                    <title>Store</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Spend Time on Your Business </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">Simple communication in email or Slack.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-up" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M12 8V24H8V8h4m0-2H8A2 2 0 006 8V24a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2zM24 8V24H20V8h4m0-2H20a2 2 0 00-2 2V24a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2z">
                                    </path>
                                    <title>Pause</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Flexibility is Important </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">Pause or cancel your plan anytime. No long-term
                            contracts or unexpected fees.</p>
                    </div>
                    <div class="pb-4 border-b border-onyx-800">
                        <div>
                            <div data-aos="fade-left" data-aos-duration="2000"
                                class="flex items-center justify-center w-16 h-16 text-blue-300 rounded-xl bg-gradient-to-tr from-onyx-950 to-onyx-700 lg:mx-auto border border-onyx-800 shadow-massive aos-init">
                                <svg xmlns="http://www.w3.org/2000/svg" focusable="false"
                                    preserveAspectRatio="xMidYMid meet" fill="currentColor" width="32" height="32"
                                    viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z">
                                    </path>
                                    <path
                                        d="M11.5 11A2.5 2.5 0 1014 13.5 2.48 2.48 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.48 2.48 0 0020.5 11zM16 24a8 8 0 006.85-3.89l-1.71-1a6 6 0 01-10.28 0l-1.71 1A8 8 0 0016 24z">
                                    </path>
                                    <title>Face satisfied</title>
                                </svg>
                            </div>
                            <p class="mt-12 text-xl font-medium leading-6 text-white"> Satisfaction Guarantee </p>
                        </div>
                        <p class="mt-4 text-base text-onyx-300">Not happy with the result? Get your money back in your
                            first month.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="overflow-hidden">
            <div class="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
                <div class="text-center max-w-3xl lg:mx-auto">
                    <h3 class="text-4xl text-white font-display">
                        We have worked with the creme of the
                        <span class="md:block text-onyx-400">crop and this is what they have to say</span>
                    </h3>
                </div>
                <ul role="list" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    <li class="hidden lg:block space-y-4">
                        <figure
                            class="h-full p-4 lg:p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive">
                            <div class="h-full group flex flex-col justify-between">
                                <div class="flex gap-4 pb-6 ">
                                    <div> <span class="font-medium leading-6 text-white text-sm"> Amrit Nagi </span>
                                        <p> <a class="text-onyx-300 group-hover:text-blue-300 text-sm" href="#_">
                                                Founder of Tailwind Toolbox </a> </p>
                                    </div>
                                </div>
                                <blockquote class="mt-2">
                                    <p class="text-onyx-300 text-sm"> The Lorem Ipsum Company has been an integral part
                                        of our content marketing success. We have seen a notable increase in organic
                                        leads since we began using their services in 2012. </p>
                                </blockquote>
                            </div>
                        </figure>
                    </li>
                    <li class="lg:col-span-2 space-y-4">
                        <figure
                            class="h-full p-4 lg:p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive">
                            <div class="h-full group flex flex-col justify-between">
                                <div class="flex gap-4 pb-6 flex-col md:flex-row lg:items-center">
                                    <div class="overflow-hidden lg:p-2"> <img alt="Gabriel Perales"
                                            src="https://d33wubrfki0l68.cloudfront.net/cabc8d70a84f6d78e56c5cd2db3f54ab6462325d/95045/images/testimonials/gabi.jpeg"
                                            class="object-cover rounded-full h-20 w-20 grayscale shrink-0"> </div>
                                    <div> <span class="font-medium leading-6 text-white text-sm lg:text-lg"> Gabriel
                                            Perales </span>
                                        <p> <a class="text-onyx-300 group-hover:text-blue-300 text-sm lg:text-lg"
                                                href="#_"> Software Engineer at Cabify </a> </p>
                                    </div>
                                </div>
                                <blockquote class="mt-2">
                                    <p class="text-onyx-300 text-sm lg:text-lg">{{ $page.props.app.name }} has helped me
                                        with many
                                        designs, and I couldn't follow his working speed when we worked together. His
                                        designs are slick, and he delivers a lot of value; he is constantly iterating
                                        his designs improving. </p>
                                </blockquote>
                            </div>
                        </figure>
                    </li>
                    <li class="lg:col-span-2 space-y-4">
                        <figure
                            class="h-full p-4 lg:p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive">
                            <div class="h-full group flex flex-col justify-between">
                                <div class="flex gap-4 pb-6 flex-col md:flex-row lg:items-center">
                                    <div class="overflow-hidden lg:p-2"> <img alt="Volkan Kaya"
                                            src="https://pbs.twimg.com/profile_images/1039477099768295424/DkFxqf2V_400x400.jpg"
                                            class="object-cover rounded-full h-20 w-20 grayscale shrink-0"> </div>
                                    <div> <span class="font-medium leading-6 text-white text-sm lg:text-lg"> Volkan Kaya
                                        </span>
                                        <p> <a class="text-onyx-300 group-hover:text-blue-300 text-sm lg:text-lg"
                                                href="#_"> Founder of Versoly.com </a> </p>
                                    </div>
                                </div>
                                <blockquote class="mt-2">
                                    <p class="text-onyx-300 text-sm lg:text-lg">{{ $page.props.app.name }} is a rare
                                        breed of designer
                                        &amp; developer that understands business needs. He leveraged his previous
                                        experience to build out a few landing pages very quickly for Versoly. </p>
                                </blockquote>
                            </div>
                        </figure>
                    </li>
                    <li class="hidden lg:block space-y-4">
                        <figure
                            class="h-full p-4 lg:p-8 rounded-3xl bg-gradient-to-tr from-onyx-950 to-onyx-700 border border-onyx-800 shadow-massive">
                            <div class="h-full group flex flex-col justify-between">
                                <div class="flex gap-4 pb-6 ">
                                    <div> <span class="font-medium leading-6 text-white text-sm"> Tony Lea </span>
                                        <p> <a class="text-onyx-300 group-hover:text-blue-300 text-sm" href="#_">
                                                Founder DevDojo </a> </p>
                                    </div>
                                </div>
                                <blockquote class="mt-2">
                                    <p class="text-onyx-300 text-sm">{{ $page.props.app.name }} has a great eye for
                                        design and he is an
                                        absolute pleasure to work with. I definitely plan on working with him on future
                                        projects of mine. I wholeheartedly recommend him to anyone seeking standout,
                                        quality work. </p>
                                </blockquote>
                            </div>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <div class="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div class="lg:text-center max-w-xl lg:mx-auto aos-init" data-aos="fade-up" data-aos-duration="2000">
                    <h3 class="text-4xl text-white font-display">Memberships levels</h3>
                    <p class="text-onyx-300 mt-4">Choose a plan that's right for you.</p>
                </div>
                <div class="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div
                        class="shadow-big flex flex-col p-8 rounded-3xl bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300">
                        <div>
                            <p class="flex items-baseline text-onyx-950"> <span class="text-2xl">Monthly</span> </p>
                            <div class="py-5 border-b border-white/20">
                                <div class="flex flex-col items-baseline">
                                    <h3 class="mt-6 text-2xl text-onyx-950"> $7,999/m </h3>
                                    <p class="mt-3 text-onyx-950 text-sm lg:texl-xl"> Pause or cancel anytime. </p>
                                </div>
                            </div>
                            <div class="mt-8"> <a
                                    class=" h-12 inline-flex items-center justify-center w-full px-6 py-3 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive focus:outline-none hover:bg-onyx-900 focus:ring-2 hover:text-onyx-300 focus:ring-offset-4 focus:ring-onyx-900"
                                    href="#_" title="Subscribe to Monthly" aria-label="Subscribe to Monthly"> Subscribe
                                    to Monthly </a> </div>
                            <ul class="order-last mt-10 flex flex-col gap-y-3 text-sm">
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Unique one-page website design </li>
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma desktop &amp; mobile designs </li>
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma file &amp; styleguide </li>
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Video guide &amp; overview </li>
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Hand-over support </li>
                                <li class="flex items-center gap-2 text-onyx-950"> <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Slack access </li>
                                <li class="flex items-center gap-2 opacity-50 text-white"> <svg
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg> Live one-page website </li>
                                <li class="flex items-center gap-2 opacity-50 text-white"> <svg
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg> Fully responsive </li>
                                <li class="flex items-center gap-2 opacity-50 text-white"> <svg
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg> Subtle interactions </li>
                                <li class="flex items-center gap-2 opacity-50 text-white"> <svg
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg> 14 day post-launch support </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col p-8 rounded-3xl bg-onyx-900 ring-1 ring-onyx-800 shadow-big">
                        <div>
                            <p class="flex items-baseline text-white"> <span class="text-2xl">Quarterly</span> </p>
                            <div class="py-5 border-b border-white/20">
                                <div class="flex flex-col items-baseline">
                                    <h3 class="mt-6 text-2xl text-white"> $15,499/m </h3>
                                    <p class="mt-3 text-white text-sm lg:texl-xl"> Save half per month. </p>
                                </div>
                            </div>
                            <div class="mt-8"> <a
                                    class=" h-12 inline-flex items-center justify-center w-full px-6 py-3 text-sm text-center duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-gradient-to-tr shadow-massive from-indigo-500 via-indigo-400 to-indigo-300 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                                    href="#_" title="Subscribe to Quarterly" aria-label="Subscribe to Quarterly">
                                    Subscribe to Quarterly </a> </div>
                            <ul class="order-last mt-10 flex flex-col gap-y-3 text-sm">
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Unique one-page website design </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma desktop &amp; mobile designs </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma file &amp; styleguide </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Video guide &amp; overview </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Hand-over support </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Slack access </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Live one-page website </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Fully responsive </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Subtle interactions </li>
                                <li class="flex items-center gap-2 opacity-50 text-white"> <svg
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                                    </svg> 14 day post-launch support </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col p-8 rounded-3xl bg-onyx-900 ring-1 ring-onyx-800 shadow-big">
                        <div>
                            <p class="flex items-baseline text-white"> <span class="text-2xl">Yearly</span> </p>
                            <div class="py-5 border-b border-white/20">
                                <div class="flex flex-col items-baseline">
                                    <h3 class="mt-6 text-2xl text-white"> $30,999/m </h3>
                                    <p class="mt-3 text-white text-sm lg:texl-xl"> Save a lot per month. </p>
                                </div>
                            </div>
                            <div class="mt-8"> <a
                                    class=" h-12 inline-flex items-center justify-center w-full px-6 py-3 text-sm text-center duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-gradient-to-tr shadow-massive from-indigo-500 via-indigo-400 to-indigo-300 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                                    href="#_" title="Subscribe to Yearly" aria-label="Subscribe to Yearly"> Subscribe to
                                    Yearly </a> </div>
                            <ul class="order-last mt-10 flex flex-col gap-y-3 text-sm">
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Unique one-page website design </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma desktop &amp; mobile designs </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Figma file &amp; styleguide </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Video guide &amp; overview </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Hand-over support </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Slack access </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Live one-page website </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Fully responsive </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> Subtle interactions </li>
                                <li class="flex items-center gap-2 text-white"> <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="20" height="20"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg> 14 day post-launch support </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div class="text-center lg:mx-auto">
                    <h2 class="text-4xl lg:text-6xl text-white font-display">
                        Apply now and we will let you know <span class="md:block text-onyx-500">if we are the right fit
                            for you in 48h.</span> </h2>
                    <p class="mt-5 text-onyx-300 lg:text-xl text-center">
                        Clean design and well craftwed websites are waiting for you.
                    </p>
                </div>
                <div class="flex flex-wrap gap-3 mt-12 justify-center">
                    <a href="/system/overview" title="link to your page" aria-label="your label"
                        class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm text-center duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-gradient-to-tr h-12 shadow-massive from-indigo-500 via-indigo-400 to-indigo-300 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300">See
                        all pages</a>
                    <a href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/7064a23c-2b0a-45a4-8e4a-8a9227ee8b0c"
                        title="link to your page" aria-label="your label"
                        class="inline-flex items-center h-12 justify-center w-full sm:w-auto px-6 py-3 text-sm text-center text-onyx-300 duration-500 ease-in-out transform border border-onyx-800 bg-onyx-900 rounded-xl shadow-massive focus:outline-none hover:border-onyx-400 focus:ring-2 hover:text-onyx-300 focus:ring-offset-2 focus:ring-onyx-300">Buy
                        {{ $page.props.app.name }}</a>
                </div>
            </div>
        </section>

        <section>
            <div class="px-8 mx-auto md:px-12 lg:px-36 max-w-7xl">
                <div
                    class="grid grid-cols-1 py-12 items-center lg:grid-cols-4 border-y md:grid-cols-2 border-onyx-800 lg:gap-24">
                    <div class="col-span-full lg:col-span-1 lg:max-w-none lg:mr-auto mx-auto">
                        <p class="text-onyx-300 text-xs">
                            Some of the mazing companies we have worked with
                        </p>
                    </div>
                    <div class="mt-12 lg:mt-0 md:col-span-3">
                        <div class="flex flex-wrap justify-between">
                            <img alt="Discord Logo" class="h-8"
                                src="https://aubergine.lexingtonthemes.com/logos/discord.svg">
                            <img alt="Zoom Logo" class="h-8" src="https://aubergine.lexingtonthemes.com/logos/zoom.svg">
                            <img alt="ClassPass Logo" class="h-8"
                                src="https://aubergine.lexingtonthemes.com/logos/classpass.svg">
                            <img alt="Splunge Logo" class="h-8 hidden sm:block"
                                src="https://aubergine.lexingtonthemes.com/logos/splunge.svg">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </MainLayout>
</template>
