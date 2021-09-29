const mongoose = require('mongoose')

const mealSchema = mongoose.Schema({
  name: {type: String, required: true},
  meal: {type: String, required: true},
  calories: {type: Number, default: 0},
  date: {type: Date}
  // macros: {
  //   protein: {
  //     type: Number
  //   },
  //   carbs: {
  //     type: Number
  //   },
  //   fat: {
  //     type: Number
  //   }
  // }
})

module.exports = mongoose.model('Meal', mealSchema)
