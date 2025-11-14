const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);
config.projectRoot = projectRoot;

module.exports = withNativeWind(config, { input: './global.css' });
