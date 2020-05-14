import React from 'react';
 const SearchBox = ( {searchChange} )=>{
  return(
    <div className='pa2 searchBar'>
      <input 
        className = 'pa3 ba b--green bg-lightest-blue'
        id='searchbox'
        type='search' 
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  )
 }

export default SearchBox