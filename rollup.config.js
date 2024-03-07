import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    nodeResolve({
      extensions: ['.ts', 'tsx']
    }),
    esbuild({
      minify: true
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      'process.env.NODE_ENV': '"development"'
    })
  ]
}