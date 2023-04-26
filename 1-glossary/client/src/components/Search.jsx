import React from 'react';

const Search = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="search">
      Search
      <form>
        <input placeholder="search" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button type="submit">Search!</button>
      </form>
    </div>
  );
};

export default Search;