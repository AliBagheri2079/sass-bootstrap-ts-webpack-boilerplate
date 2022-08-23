const glob = require('glob');

// Import dependencies.
const PurgecssPlugin = require('purgecss-webpack-plugin');

// Import Paths.
import { paths } from '../configuration';

/**
 * PurgecssPlugin()
 * A webpack plugin to purge CSS into separate files.
 */
export const purgecssPlugin = new PurgecssPlugin({
  paths: glob.sync(`${paths.src}/**/*`, { nodir: true }),
});
