const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

const port = 3000;

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (req, res) =>{
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
})

app.get('/restaurants/:id', async (req, res) => {
    const getById = await Restaurant.findByPk(req.params.id);
    res.json(getById);
})


module.exports = app;