import alias from "rollup-plugin-alias";
import rollupBabel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import uglify from "rollup-plugin-uglify";

process.env.ROLLUP_BUILD = true;
const minify = process.env.MINIFY;
const format = process.env.FORMAT;
const library =
  process.env.LIBRARY === "react" ? "" : `.${process.env.LIBRARY}`;
const isPreact = process.env.LIBRARY === "preact";
const esm = format === "esm";
const umd = format === "umd";
const cjs = format === "cjs";

let targets;

if (esm) {
  targets = [
    { dest: `dist/react-swipeable-drawer${library}.es.js`, format: "es" },
  ];
} else if (umd) {
  if (minify) {
    targets = [
      {
        dest: `dist/react-swipeable-drawer${library}.umd.min.js`,
        format: "umd",
      },
    ];
  } else {
    targets = [
      { dest: `dist/react-swipeable-drawer${library}.umd.js`, format: "umd" },
    ];
  }
} else if (cjs) {
  targets = [
    { dest: `dist/react-swipeable-drawer${library}.cjs.js`, format: "cjs" },
  ];
} else if (format) {
  throw new Error(`invalid format specified: "${format}".`);
} else {
  throw new Error("no format specified. --environment FORMAT:xxx");
}

export default {
  entry: "src/Drawer.js",
  targets,
  exports: esm ? "named" : "default",
  moduleName: "Drawer",
  format,
  external: isPreact ? ["preact", "prop-types"] : ["react", "prop-types"],
  globals: isPreact
    ? {
        preact: "preact",
      }
    : {
        react: "React",
        "prop-types": "PropTypes",
      },
  plugins: [
    alias(isPreact ? { react: "preact" } : {}),
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: "node_modules/**" }),
    json(),
    rollupBabel({ exclude: "node_modules/**" }),
    minify ? uglify() : null,
  ].filter(Boolean),
};
