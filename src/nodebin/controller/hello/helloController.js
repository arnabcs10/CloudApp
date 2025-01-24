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

const jwks = {
    "keys": [
        {
            "e": "AQAB",
            "kid": "DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ",
            "kty": "RSA",
            "n": "xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"
        }
    ]
};

const getJwks = asyncHandler(
    async (req, res) => {
        try {   
            const response = jwks;
            
            res.status(200);
            res.json(response);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);


module.exports = {getHello, getHelloEntity, getJwks};