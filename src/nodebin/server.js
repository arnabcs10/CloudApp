//Import dependencies
const express = require('express');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv');
const colors = require('colors');

// Import Routes
const helloRoutes = require('./routes/hello/helloRoutes');
const httpbinRoutes = require('./routes/httpbin/httpbinRoutes');
const httpbinextRoutes = require('./routes/httpbinext/httpbinRoutes');

//Middlewares
const { notFound,errorHandler} = require('./middlewares/errorMiddlewares');

//App config
const app = express();
dotenv.config();
app.use(express.json()) //body-parser



//Routes
//Default Routes
// To be moved to its own directory
app.get('/api',(req,res)=>{
    res.send("This is HOME!!");
});

// Hello Routes
app.use('/api/v1',helloRoutes);
app.use('/api/httpbin',httpbinRoutes);
app.use('/api/httpbinext',httpbinextRoutes);




if(process.env.ENV === 'PRD'){
    // send index.html file at production
    
}else{
    app.get('/',(req,res)=>{
        res.send("API is running...");
    });
}


//error handler
app.use(notFound);
app.use(errorHandler);

//PORT
const PORT = process.env.PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;


app.listen(PORT,() =>{
    console.log(process.env.HTTPBINEXT_URI);
    console.log(`Server running in ${process.env.ENV} mode on port ${PORT}`.yellow.bold);
});

// HTTPS Server
// Read the certificate and key file from environment variables
if (process.env.ENV === 'PRD') {
    const httpsOptions = {
        key: fs.readFileSync(process.env.TLS_KEY_FILE),
        cert: fs.readFileSync(process.env.TLS_CERT_FILE),
    };

    https.createServer(httpsOptions, app).listen(HTTPS_PORT, () => {
        console.log(`Server running in ${process.env.ENV} mode on port ${HTTPS_PORT}`.yellow.bold);
    });
}