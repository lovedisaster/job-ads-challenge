const path = require('path');
const appRoot = path.resolve(__dirname);

const env_config = {
    paths: {
        serverPages: path.join(appRoot, 'server/serverPages')
    },
    isProd: (process.env.NODE_ENV === 'production')
};

// Return the env settings
module.exports = env_config;