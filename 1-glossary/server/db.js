const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/fetcher');

const wordSchema = mongoose.Schema({
  term: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

const getAll = () => {
  return Word.find({})
    .catch(err => console.error(err));
};

const update = (id, word) => {
  return Word.findByIdAndUpdate(id, word);
};

const del = (id) => {
  return Word.findByIdAndDelete(id);
};

const save = (word) => {
  return Word.create(word)
    .then(word => {
      console.log(word);
      return word;
    })
    .catch(err => console.error(err));
};

module.exports.save = save;
module.exports.getAll = getAll;
module.exports.del = del;
module.exports.update = update;