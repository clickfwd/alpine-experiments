import { terser } from 'rollup-plugin-terser'

export default {
    input: [
        './js/index.js',
        './js/components/toast-buttons.js',
        './js/components/toasts.js'
    ],
    output: {
        dir: './dist',
        format: 'es',
    },
    preserveModules: true,
    plugins: [
        terser()
    ]
}