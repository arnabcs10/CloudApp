const {httpbinsvc} = require('./client');
const asyncHandler = require('express-async-handler');


const getHttpbin = asyncHandler(
    async (req, res) => {
        try {   
            
            const reqPath = req.path;
            console.log(reqPath);

            const {data} = await httpbinsvc.get(reqPath);
                        
            res.status(200);
            res.json(data);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);


module.exports = {getHttpbin};