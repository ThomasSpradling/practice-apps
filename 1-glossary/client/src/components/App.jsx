import React, { useState, useEffect } from 'react';
import AddWords from './AddWords.jsx';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import axios from 'axios';
import Edit from './Edit.jsx';

const App = () => {
  const [words, setWords] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [addTerm, setAddTerm] = useState({term: '', definition: ''});
  const [editTerm, setEditTerm] = useState({term: '', definition: ''});

  const [showEditMenu, setShowEditMenu] = useState(false);

  const getWords = () => {
    axios.get('/words')
      .then(words => {
        setWords(words.data);
      })
      .catch(error => console.error(error.stack));
  };

  const handleAdd = e => {
    e.preventDefault();
    const word = {
      term: addTerm.term,
      definition: addTerm.definition
    }
    axios.post('/words', word)
      .then(word => {
        setAddTerm({
          term: '',
          definition: ''
        });
        setSearchText('');
        getWords();
      })
      .catch(error => console.error(error.stack));
  };

  const handleEditClick = (word, e) => {
    console.log('edit');
    setShowEditMenu(true);
    setEditTerm(word);
  };


  const handleEdit = (e) => {
    e.preventDefault();
    const id = editTerm._id;
    axios.patch(`/words/${id}`, {
      term: editTerm.term,
      definition: editTerm.definition
    })
      .then(() => {
        console.log('successfully placed handle edit!');
        setShowEditMenu(false);
        getWords();
      })
      .catch(error => console.error(error));
  };

  const handleDeleteClick = (word, e) => {
    const id = word._id;
    axios.delete(`/words/${id}`)
      .then(() => {
        console.log('successfully placed delete request!');
        getWords();
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div className='app'>
      App
      {showEditMenu && <Edit editTerm={editTerm} setEditTerm={setEditTerm} handleEdit={handleEdit}/>}
      <AddWords handleAdd={handleAdd} addTerm={addTerm} setAddTerm={setAddTerm} />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <WordList words={words} searchText={searchText} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default App;