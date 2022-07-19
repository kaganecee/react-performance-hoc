import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
const packageJson = require("./package.json");

export default [
  {
    input: "withPerformance.js",
    external: ['react', 'react-dom', 'prop-types'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs({// specifically include/exclude files
        include: 'node_modules/**',  // Default: undefined
  
        // search for files other than .js files (must already
        // be transpiled by a previous plugin!)
        extensions: [ '.js' ],  
  
        // explicitly specify unresolvable named exports
        // (see below for more details)
        namedExports: { 'react': ['createElement', 'Component' ] },  }),
      babel(),
      terser(),
    ],
  }
];