const express = require('express')
const router = express.Router()
const path = require('path');
const {
  uploadAnImageFile,
  uploadAnAudioFile
} = require('../controllers/uploadController')

const { adminOnly, protect } = require('../middleware/authMiddleware')

router.post('/image', adminOnly, uploadAnImageFile)
router.post('/audio', adminOnly, uploadAnAudioFile)
router.get('/*', protect, express.static(path.resolve() + '/files'));
module.exports = router
