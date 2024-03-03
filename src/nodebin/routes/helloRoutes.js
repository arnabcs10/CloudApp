const express = require('express');
const router = express.Router();

// import controllers
const {
    getHello, 
    getHelloEntity
} = require('../controller/helloController');


//routes /api/hello/
router.route('/').get( getHello);
router.route('/:entity').get( getHelloEntity);


module.exports = router;