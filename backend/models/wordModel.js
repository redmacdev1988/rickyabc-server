const mongoose = require('mongoose')

const ExampleSchema = mongoose.Schema({
    sentence: {
      type: String,
    },
    audioPronounceURL: {
        type: String
    },
});

const wordSchema = mongoose.Schema(
  {
    date: {
        type: String,
        unique: true, 
        dropDups: true,
    },
    word: {
      type: String,
    },
    wordClass: {
      type: String,
      enum: ['noun', 'verb', 'adjective', 'adverb']
    },
    definition: {
      type: String,
    },
    image: {
      type: String
    },
    audioPronounceURL: {
        type: String
    },
    audioExampleUrlArr: [ExampleSchema]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Word', wordSchema)
