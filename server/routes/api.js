const express = require("express");
const apiRoutes = express.Router();
const apiKey = process.env.APIKEY;
const SDK = require('apubg-sdk')

apiRoutes.get("/", (req,res) => {
    console.log("hello");
    // Figure out how to get the username from the req object here
    // Should be something like req.params or something similiar
    process.env.region = req.query.server
    const username = req.query.username
    console.log(SDK.Player);
    SDK.Player.findByName(username)
        .then(user => {
            res.send(user)
        })
        .catch(e => {
            console.log("failure")
            res.status(500).send(e)
        })
})

module.exports = apiRoutes