import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder=""
      />
    </div>
  );
}

export default Search;
