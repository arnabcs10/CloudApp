const express = require('express');
const router = express.Router();

// import controllers
const {
    getHttpbin,
    getResponseFormatData,
    getStatusCodes,
    putStatusCodes,
    getResponseHeaders
} = require('../../controller/httpbinext/httpbinextController');


//routes /api/httpbin/
// HTTP methods
router.route('/get').get( getHttpbin);
// Response formats
router.route('/:resformat').get( getResponseFormatData);

// Status Codes
router.route('/status/:statuscodes').get( getStatusCodes);
router.route('/status/:statuscodes').put( putStatusCodes);

// Response Inspection
router.route('/response-headers').get( getResponseHeaders);


router.route('/:param1').get( getHttpbin);

module.exports = router;