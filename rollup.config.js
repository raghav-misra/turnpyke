import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
export default {
    input: 'src/turnpyke.ts', // our source file
    output: [
        {
            file: pkg.module,
            format: 'es' // the preferred format
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: 'Turnpyke' // the global which can be used in a browser
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        terser() // minifies generated bundles
    ]
};