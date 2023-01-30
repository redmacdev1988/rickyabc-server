const asyncHandler = require('express-async-handler')

const Word = require('../models/wordModel')

// @desc    Get word
// @route   GET /api/word
// @access  Private
const getWord = asyncHandler(async (req, res) => {
  console.log('getWorld', req.params.date);
  const word = await Word.find({ date: req.params.date })
  res.status(200).json(word)
})

// @desc    Set word
// @route   POST /api/word
// @access  Private
const setWord = asyncHandler(async (req, res) => {
  if (!req.body.date) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const word = await Word.create({
    date: req.body.date,
    word: req.body.word,
    definition: req.body.definition,
    wordClass: req.body.wordClass,
    image: req.body.image,
    audioPronounceURL: req.body.audioPronounceURL,
    audioExampleUrlArr: req.body.examplesURL
  })
  res.status(200).json(word)
})

// @desc    Update word
// @route   PUT /api/words/:id
// @access  Private
const updateWord = asyncHandler(async (req, res) => {
    const date = req.body.date;

    if (!date) {
        res.status(401)
        throw new Error('Please enter date, so we can retrieve that word')
    }

    const wordInDB = await Word.find({ date })
    if (!wordInDB) {
        res.status(400)
        throw new Error('Word not found')
    }

    const filter = { date };
    const updatedWord = await Word.findOneAndUpdate(filter, req.body, {
      new: true
    });

    res.status(200).json(updatedWord)
})

// @desc    Delete word
// @route   DELETE /api/word/:id
// @access  Private
const deleteWord = asyncHandler(async (req, res) => {
  const date = req.body.date;
  console.log(date);
  const wordInDB = await Word.find({ date })
  if (!wordInDB) {
      res.status(400)
      throw new Error('Word not found')
  }
  console.log('word in db: ', wordInDB)
  await Word.findOneAndRemove({ date }, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('removed user: ', docs);
    }
  });
  res.status(200).json({ wordInDB })
})

const insertExample = asyncHandler(async (req, res) => {
  const date = req.body.date;
  const word = req.body.word;
  const examples = req.body.examples;

  if (!date || !word) {
      res.status(401)
      throw new Error('Please enter date or word')
  }

  if (!examples) {
    res.status(401)
      throw new Error('Please enter examples')
  }

  const foundInDB = await Word.find({ date, word })
    if (!foundInDB) {
        res.status(400)
        throw new Error('Word not found')
    }

    const filter = { date, word };
    const update = {
      audioExampleUrlArr: examples
    };
    await Word.findOneAndUpdate(filter, update);
    res.status(200).json(examples)
});

module.exports = {
    getWord,
    setWord,
    updateWord,
    deleteWord,
    insertExample
}
