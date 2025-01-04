const dotenv = require('dotenv');
dotenv.config();

const _config = {
    PORT : process.env.PORT,
    MONGODB_URL : process.env.MONGODB_URL
}
const config = Object.freeze(_config);

module.exports = config;