const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const replace = require("@rollup/plugin-replace");
const url = require('postcss-url');
module.exports = {
  rollup(config) {
    config.output = {
      ...config.output,
      dir: "dist/",
      format: "cjs",
    };

    delete config.output.file;
    config.plugins.push(
      postcss({
        extensions: [".scss", ".css"],
        modules: {
          generateScopedName: `[name]__[local]__[hash:base64:5]`,
        },
        autoModules: true,
        use: ["sass"],
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
          url({
            url: "inline", 
            maxSize: 5000, 
            fallback: "copy", 
          }),
        ],
        inject: true,
        extract: false,
        minimize: true,
      }),
      replace({
        preventAssignment: false,
      })
    );

    return config;
  },
};
