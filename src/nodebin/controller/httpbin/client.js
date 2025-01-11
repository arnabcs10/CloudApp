const axios = require('axios');


const httpbinsvc = axios.create({
    baseURL: `${process.env.HTTPBIN_URI}`,
});

module.exports = {httpbinsvc};