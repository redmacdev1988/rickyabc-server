const express = require('express')
const router = express.Router()
const path = require('path');
const {
  uploadAnImageFile
} = require('../controllers/uploadController')

const { adminOnly, protect } = require('../middleware/authMiddleware')

router.post('/image', adminOnly, uploadAnImageFile)
router.get('/*', protect, express.static(path.resolve() + '/files'));
module.exports = router
