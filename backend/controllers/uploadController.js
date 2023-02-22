const asyncHandler = require('express-async-handler')
const Word = require('../models/wordModel')
const fs = require('fs');
const path = require('path');

const savePath = path.resolve() + '/files';

const uploadAnImageFile = asyncHandler(async (req, res) => {
    if (req.files) {
      const { name, data } = req.files.file;
      let filename = `${savePath}/${name}`;

      await fs.writeFile(filename, data, "binary", (err) => {
        if (!err) {
          console.log(`file saved to ${filename}`);
        }
      });
      res.json({"msg":"ok"});
    } 
})

const uploadAnAudioFile = asyncHandler(async (req, res) => {
  if (req.files) {
    const { name, data } = req.files.file;
    let filename = `${savePath}/${name}`;

    await fs.writeFile(filename, data, "binary", (err) => {
      if (!err) {
        console.log(`file saved to ${filename}`);
      }
    });
    res.json({"msg":"ok"});
  } 
})

module.exports = {
  uploadAnImageFile,
  uploadAnAudioFile
}
