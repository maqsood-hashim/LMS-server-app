const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  category: {
    type: String,
   
    required: true
  },
  answer: {
    type: String,
   
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
