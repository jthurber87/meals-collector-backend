//dep
require('dotenv').config()
require('./db/db')
const express = require('express')
const cors = require('cors')
const app = express()
const mealsController = require('./controllers/mealsCollector.js')
const PORT = process.env.PORT || 9000

// middleware
const whiteList = ["http://localhost:3000"]
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.json());
app.use('/meals', mealsController)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})