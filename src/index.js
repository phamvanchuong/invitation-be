const path = require('path')
const express = require('express')
const cors = require('cors')

const homeRoute = require('./routes/homeRoute')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use('/', homeRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})