require('./db/db')
const express = require('express')
const app = express()
const mealsController = require('./controllers/mealsCollector.js')
const PORT = 9000

// middleware
app.use(express.json());
app.use('/meals', mealsController)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
