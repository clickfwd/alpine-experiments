import { terser } from 'rollup-plugin-terser'

export default {
    input: [
        './js/index.js',
        './js/components/dropdown.js',
        './js/components/counter.js',
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