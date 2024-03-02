//Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

// Import Routes


//Middlewares
// const { notFound,errorHandler} = require('./middlewares/errorMiddleware');

//App config
const app = express();
dotenv.config();
app.use(express.json()) //body-parser



//Routes
//Home

// /api/route/




if(process.env.ENV === 'PRD'){
    // send index.html file at production
    
}else{
    app.get('/',(req,res)=>{
        res.send("API is running...");
    });
}


//error handler
// app.use(notFound);
// app.use(errorHandler);

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server running in ${process.env.ENV} mode on port ${PORT}`.yellow.bold);
});