const axios = require('axios');
require('dotenv').config();

const httpbinsvc = axios.create({
    baseURL: `${process.env.HTTPBIN_URI}`,
});

module.exports = {httpbinsvc};