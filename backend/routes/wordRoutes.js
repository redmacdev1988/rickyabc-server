const express = require('express')
const router = express.Router()
const {
  getWord,
  setWord,
  updateWord,
  deleteWord,
  insertExample
} = require('../controllers/wordController')

const { adminOnly } = require('../middleware/authMiddleware')

router.route('/example').post(adminOnly, insertExample)
router.route('/:date').get(getWord)
router.route('/').post(adminOnly, setWord)
router.route('/:date').delete(adminOnly, deleteWord)
router.route('/').put(adminOnly, updateWord)

module.exports = router
