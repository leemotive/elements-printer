import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: ['./src/index.ts', './src/directive2.ts', './src/directive3.ts'],
    output: [
      {
        dir: './es',
        format: 'es',
        entryFileNames: '[name].mjs',
      },
      {
        dir: './lib',
        format: 'cjs',
      },
    ],
    plugins: [typescript({ exclude: ['test'] })],
  },
];
