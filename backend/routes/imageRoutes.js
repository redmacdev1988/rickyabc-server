const express = require('express')
const router = express.Router()
const path = require('path');
const { getImage } = require('../controllers/imageController')
const { protect } = require('../middleware/authMiddleware')

router.get('/:filename', protect, getImage);
module.exports = router
