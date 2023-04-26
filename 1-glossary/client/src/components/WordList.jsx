import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({ words, searchText, handleEditClick, handleDeleteClick }) => {
  const displayList = words
    .filter(word => {
      return word.term.toLowerCase().startsWith(searchText.toLowerCase());
    })
    .map(word => <WordListEntry key={word._id} word={word} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />);


  return (
    <div className="word-list">
      { displayList.length ? displayList : 'Nothing here!' }
    </div>
  );
};

export default WordList;