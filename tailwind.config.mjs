import flowbite from 'flowbite/plugin';
import typography from 'flowbite-typography/plugin';

export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
        "./node_modules/flowbite/**/*.js"
    ],
    plugins: [
        flowbite,
        typography
    ],
};
