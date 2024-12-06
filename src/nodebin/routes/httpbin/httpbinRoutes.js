const express = require('express');
const router = express.Router();

// import controllers
const {
    getHttpbin
} = require('../../controller/httpbin/httpbinController');


//routes /api/httpbin/
router.route('/get').get( getHttpbin);


module.exports = router;