const isTest = process.env.NODE_ENV === "test";
const isPreact = process.env.LIBRARY === "preact";
const isRollup = process.env.ROLLUP_BUILD;

module.exports = {
  presets: [["env", isRollup ? { modules: false } : {}], "react"],
  plugins: [
    isRollup ? "external-helpers" : null,
    isPreact ? ["transform-react-jsx", { pragma: "h" }] : null,
    isPreact
      ? ["transform-react-remove-prop-types", { removeImport: true }]
      : null,
    isTest ? null : "transform-inline-environment-variables",
    "transform-class-properties",
    "transform-object-rest-spread",
  ].filter(Boolean),
};
