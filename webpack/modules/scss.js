// Import dependencies.
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Import Configuration.
import { config } from '../configuration';

/**
 * Default modules loader for SCSS.
 */
export const scss = {
  test: /\.s[ac]ss$/i,
  use: [
    // fallback to style-loader in development
    config.IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Turns css into commonjs
    'css-loader',
    // Turns sass into css
    'sass-loader',
  ],
  exclude: /node_modules/,
};
