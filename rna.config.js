/**
 * @type {import('@chialab/rna-config-loader').ProjectConfig}
 */
const config = {
    entrypoints: [
        {
            input: 'src/index.ts',
            output: 'dist/esm/ginsenghino.js',
            format: 'esm',
            minify: true,
            platform: 'browser',
        },
        {
            input: 'src/index.ts',
            output: 'dist/node/ginsenghino.js',
            format: 'esm',
            minify: true,
            platform: 'node',
        },
        {
            input: 'src/index.ts',
            output: 'dist/cjs/ginsenghino.cjs',
            format: 'cjs',
            minify: true,
            platform: 'node',
        },
    ],
};

export default config;
