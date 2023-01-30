const express = require('express')
const router = express.Router()
const path = require('path');
const { getAudio } = require('../controllers/audioController')
const { protect } = require('../middleware/authMiddleware')

router.get('/:filename', protect, getAudio);
module.exports = router
