/**
 * Default modules loader for font assets.
 */
export const fonts = {
  test: /\.(eot|ttf|woff?2|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[contenthash][ext]',
  },
};
