import React from 'react';
import { Divider, Input } from 'antd';

function SearchBar({search, handleSearch}) {
  return (
    <div>
      <Divider>Search</Divider>
      <Input value={search} name='search' type="text" placeholder='search a food' onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
