import './bootstrap';
import '../css/app.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Vanilla Tilt
import VanillaTilt from 'vanilla-tilt';

// Aurbegine
import '../css/blog-three.DPuWUkrN.css';
// import '../css/_slug_.PPDGIfA7.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

AOS.init();

VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 35, // max tilt rotation (degrees)
    speed: 2500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
});
