import express from "express";
import morgan from "morgan";

const app   =   express()
const port  =   4000

app.use(morgan('dev'));

app.get("/",    (req,   res)    =>  {
    res.send("Hello world")
});

app.listen(port,    ()  =>  {
    console.log(`Server is listening at port ${port}`);
})