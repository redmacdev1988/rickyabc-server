const asyncHandler = require('express-async-handler')
const fs = require('fs');
const path = require('path');
const filePath = path.resolve() + '/files';

const getAudio= asyncHandler(async (req, res) => {
    const fileName = req.params.filename;
    const audioUrl = `${filePath}/${fileName}`;
    console.log('audioUrl', audioUrl);
    const base64File = await fs.readFileSync(audioUrl, 'base64');
    res.send(base64File);
})

module.exports = {
    getAudio
}
