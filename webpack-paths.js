const path = require('path');
const root = path.resolve(__dirname, '..');
module.exports = {
  root,
  // reactHot: 'react-hot-loader/patch',
  hot: 'webpack/hot/dev-server',
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  public: path.join(__dirname, 'public'),
  css: path.join(__dirname, 'public/css'),
  components: path.join(__dirname, 'src/components'),
};