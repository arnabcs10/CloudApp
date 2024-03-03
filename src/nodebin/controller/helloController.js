const asyncHandler = require('express-async-handler');

const ENTITY = "Bob"


const getHello = asyncHandler(
    async (req, res) => {
        try {            
            const response = {
                greet: `Helloo! ${ENTITY}, How are you?`
            }
            res.status(200);
            res.json(response);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);


const getHelloEntity = asyncHandler(
    async (req, res) => {
        try {   
            const entity = req.params.entity
            const response = {
                greet: `Helloo! ${entity}, How are you?`
            }
            res.status(200);
            res.json(response);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);


module.exports = {getHello, getHelloEntity};