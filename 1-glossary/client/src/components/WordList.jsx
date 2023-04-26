import React from 'react';
import WordListEntry from './WordListEntry.jsx';

const WordList = ({ words, searchText }) => {
  const displayList = words
    .filter(word => {
      console.log(word, searchText);
      return word.term.startsWith(searchText);
    })
    .map(word => <WordListEntry key={word._id} word={word} />);


  return (
    <div className="word-list">
      { displayList.length ? displayList : 'Nothing here!' }
    </div>
  );
};

export default WordList;