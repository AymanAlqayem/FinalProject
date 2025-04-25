const { series } = require("gulp");
const shell = require("gulp-shell");

const build = shell.task(
  "npx parcel build nd0011-c4-starter/starter/index.html --dist-dir dist",
);
const serve = shell.task(
  "npx parcel nd0011-c4-starter/starter/index.html --dist-dir dist",
);
const test = shell.task("npx mocha nd0011-c4-starter/starter/test/shuffle.js");

exports.build = build;
exports.serve = serve;
exports.test = test;
exports.default = series(build, serve);
