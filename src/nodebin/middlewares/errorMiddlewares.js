const notFound = (req,res,next)=> {
    const error = new Error(`Oops!! Endpoint Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE === 'DEV' ? err.stack : null
    });
}

module.exports = { notFound, errorHandler};