import React from 'react';

const WordListEntry = ({ word, handleDelete, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="item">
      <strong className="term">{word.term}</strong>
      <span className="definition">{word.definition}</span>
      <button onClick={(e) => handleEditClick(word)}>Edit</button>
      <button onClick={(e) => handleDeleteClick(word)}>Delete</button>
    </div>
  );
};

export default WordListEntry;