const ukCities = [
    {city:"Manchester", region:"North-West"},
    {city:"London", region:"South"},
    {city:"Birmingham", region:"West-midland"},
    {city:"Leeds", region:"North-West"},
    {city:"Glasgow", region:"North"},
    {city:"Edingbroug", region:"North"},
    {city:"Oxford", region:"South"}
];
const express  = require("express");
const app = express();
const port = 49645;
app.listen(port, () => {
    console.log("My application is now listening at port 3000 ready to accept requests")
})

app.get("/ukCities", (req, res) => {
    console.log(req.query.city)
    console.log("hello you have reached my Server")
    res.send({ukCities})
})