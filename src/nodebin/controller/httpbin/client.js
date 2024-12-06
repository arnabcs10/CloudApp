const axios = require('axios');


const httpbinsvc = axios.create({
    baseURL: 'https://httpbin.org/',
});

module.exports = {httpbinsvc};