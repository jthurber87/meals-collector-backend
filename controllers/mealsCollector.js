const express = require('express')
const router = express.Router()
const Meal = require('../models/meal.js')

//INDEX
router.get('/', async (req, res) => {
  try {
    const foundMeals = await Meal.find();
    res.status(200).json(foundMeals)
  } catch(err){
    res.status(400).json({ error: err.message })
  }
})

//CREATE
router.post('/', async (req, res) => {
  try {
    const newMeal = await Meal.create(req.body);
    res.status(200).json(newMeal)
  } catch(err) {
    res.status(400).json({
      error: err.message
    })
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedMeal = await Meal.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMeal)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedMeal)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
