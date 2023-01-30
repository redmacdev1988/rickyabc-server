const asyncHandler = require('express-async-handler')
const Word = require('../models/wordModel')
const fs = require('fs');
const path = require('path');

const savePath = path.resolve() + '/files';
console.log(savePath);

const uploadAnImageFile = asyncHandler(async (req, res) => {
    console.log('entered uploadAnImageFile function √');
    if (req.files) {
      console.log(req.files.file);
      const { name, data } = req.files.file;
      console.log(`name: ${name}`);
      let filename = `${savePath}/${name}`;
      console.log('filename: ', filename);

      await fs.writeFile(filename, data, "binary", (err) => {
        if (!err) {
          console.log(`file saved to ${filename}`);
        }
      });
      res.json({"msg":"ok"});
    } 
})

module.exports = {
  uploadAnImageFile
}
