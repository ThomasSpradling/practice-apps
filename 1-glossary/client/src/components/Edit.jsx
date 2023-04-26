import React from 'react';

const Edit = ({ handleEdit, editTerm, setEditTerm }) => {
  return (
    <div className="edit">
      <form onSubmit={handleEdit}>
        Edit the term:
        <input
          required
          placeholder="term"
          value={editTerm.term}
          onChange={e => {
            setEditTerm({
              _id: editTerm._id,
              term: e.target.value,
              definition: editTerm.definition,
            });
          }}/>
        <input
          required
          placeholder="definition"
          value={editTerm.definition}
          onChange={e => {
            setEditTerm({
              _id: editTerm._id,
              definition: e.target.value,
              term: editTerm.term,
            });
          }}/>
        <button type="submit">Edit!</button>
      </form>
    </div>
  );
};

export default Edit;