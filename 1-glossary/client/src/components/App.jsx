import React, { useState, useEffect } from 'react';
import AddWords from './AddWords.jsx';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import axios from 'axios';

const App = ({ data }) => {
  const [words, setWords] = useState(data);
  const [wordText, setWordText] = useState('');
  const [defText, setDefText] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    const word = {
      term: wordText,
      definition: defText
    }
    axios.post('/words', word)
      .then(word => {
        setWordText('');
        setSearchText('');
      })
      .catch(error => console.error(error.stack));
  };

  useEffect(() => {
    axios.get('/words')
      .then(words => {
        setWords(words.data);
      })
      .catch(error => console.error(error.stack));
  }, []);

  return (
    <div className='app'>
      App
      <AddWords handleAdd={handleAdd} wordText={wordText} setWordText={setWordText} defText={defText} setDefText={setDefText} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <WordList words={words} searchText={searchText} />
    </div>
  );
};

export default App;