import React from 'react';

const AddWords = ({ handleAdd, wordText, setWordText, defText, setDefText }) => {
  return (
    <div className="add-words">
      AddWords
      <form onSubmit={handleAdd}>
        <input placeholder="add word" value={wordText} onChange={e => setWordText(e.target.value)} />
        <input placeholder="add definition" value={defText} onChange={e => setDefText(e.target.value)} />
        <button type="submit">Add Word!</button>
      </form>
    </div>
  );
};

export default AddWords;