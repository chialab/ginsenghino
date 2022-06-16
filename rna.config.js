/**
 * @type {import('@chialab/rna-config-loader').ProjectConfig}
 */
const config = {
    entrypoints: [
        {
            input: 'src/index.ts',
            output: 'dist/esm/ginsenghino.js',
            format: 'esm',
            platform: 'browser',
        },
        {
            input: 'src/index.ts',
            output: 'dist/cjs/ginsenghino.cjs',
            format: 'cjs',
            platform: 'node',
        },
    ],
    bundle: true,
    minify: true,
};

export default config;
