const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');
const filePath = path.resolve() + '/files';

const getImage = asyncHandler(async (req, res) => {
    const fileName = req.params.filename;
    const imgUrl = `${filePath}/${fileName}`;
    const base64File = await fs.readFileSync(imgUrl, 'base64');
    res.send(base64File);
})

module.exports = {
  getImage
}
