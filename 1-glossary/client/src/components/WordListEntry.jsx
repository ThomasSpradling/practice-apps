import React from 'react';

const WordListEntry = ({ word }) => {
  return (
    <div className="item">
      <strong className="term">{word.term}</strong>
      <span className="definition">{word.definition}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default WordListEntry;