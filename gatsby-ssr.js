// Gatsby files can't use es6 unless esm module is used
// https://github.com/gatsbyjs/gatsby/issues/7810
const { Provider } = require('./src/providers/provider');

exports.wrapRootElement = Provider;
