import React from 'react';

const AddWords = ({ handleAdd, addTerm, setAddTerm }) => {
  return (
    <div className="add-words">
      AddWords
      <form onSubmit={handleAdd}>
        <input
          placeholder="add word"
          value={addTerm.term}
          onChange={e => {
            setAddTerm({
              term: e.target.value,
              definition: addTerm.definition
            });
          }}
        />
        <input
          placeholder="add definition"
          value={addTerm.definition}
          onChange={e => {
            setAddTerm({
              term: addTerm.term,
              definition: e.target.value
            });
          }}
        />
        <button type="submit">Add Word!</button>
      </form>
    </div>
  );
};

export default AddWords;