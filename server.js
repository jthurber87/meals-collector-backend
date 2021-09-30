const cors = require("cors");
const express = require('express')
const app = express()
const PORT = 9000
const mealsController = require('./controllers/mealsCollector.js')
require('./db/db')
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/meals', mealsController)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
