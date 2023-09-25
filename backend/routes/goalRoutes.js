const express = require('express')
const router = express.Router()
const { getGoals, setGoals, UpdateGoals, deleteGoals } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, UpdateGoals).delete(protect, deleteGoals)

module.exports = router