const express = require("express");
const apiRoutes = express.Router();
const apiKey = process.env.APIKEY;
const SDK = require('apubg-sdk')

apiRoutes.get("/", (req,res) => {
    // Figure out how to get the username from the req object here
    // Should be something like req.params or something similiar
    // process.env.region = req.query.server
    const username = req.query.username
    process.env.region = req.query.server;
    SDK.Player.findByName(username)
        .then(user => user.loadSeason('division.bro.official.2018-05'))
        .then(loadedUser => {
            res.send(loadedUser)
        })
        .catch(e => {
            console.log(e)
            res.status(500).send(e)
        })
})



module.exports = apiRoutes