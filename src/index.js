import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app   =   express()
const port  =   process.env.PORT;

app.use(morgan('dev'));

app.get("/",    (req,   res)    =>  {
    res.send("Hello world")
});

app.listen(port,    ()  =>  {
    console.log(`Server is listening at port ${port}`);
})