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

const getResponseFormatData = asyncHandler(
    async (req, res) => {
        try {   
            
            const reqPath = req.path;
            console.log(reqPath);

            const {data} = await httpbinsvc.get(reqPath);

            const { resformat } = req.params;
            if(resformat === 'html'){            
                res.status(200);
                res.send(data);
            } else {
                res.status(200);
                res.json(data);
            }
            

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);
const getStatusCodes = asyncHandler(
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
const putStatusCodes = asyncHandler(
    async (req, res) => {
        try {   
            
            const reqPath = req.path;
            console.log(reqPath);

            const {data} = await httpbinsvc.put(reqPath);
                        
            res.status(200);
            res.json(data);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);

const getResponseHeaders = asyncHandler(
    async (req, res) => {
        try {   
            
            const reqPath = req.path;
            const { freeform } = req.query;
            console.log(reqPath);
            console.log(req.query);

            const {data} = await httpbinsvc.get(reqPath+`?freeform=${freeform}`);
                        
            res.status(200);
            res.json(data);

        } catch (error) {
            console.log(error.message);
            res.status(500);
            throw new Error(error.message);
        }
    }
);


module.exports = {    
    getHttpbin,
    getResponseFormatData,
    getStatusCodes,
    putStatusCodes,
    getResponseHeaders
};