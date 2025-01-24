const express = require('express');
const router = express.Router();

// import controllers
const {
    getHello, 
    getHelloEntity,
    getJwks
} = require('../../controller/hello/helloController');


//routes /api/hello/
router.route('/').get( getHello);
router.route('/hello/:entity').get( getHelloEntity);
router.route('/jwks').get( getJwks);


module.exports = router;