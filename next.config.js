const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',

  basePath: isProd ? '/application' : '',
  assetPrefix: isProd ? '/application/' : '',

  images: {
    unoptimized: true,
  },
};