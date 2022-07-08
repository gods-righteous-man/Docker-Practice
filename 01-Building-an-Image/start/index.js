const axios = require('axios');
const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    let image = await axios('https://source.unsplash.com/random');
    res.send(`<img src="${image.request.res.responseUrl}" />`)
})


app.listen((4449), () => {
    console.log("listening on port 4449!!!!!")
})