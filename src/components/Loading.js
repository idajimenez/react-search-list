// Component from displaying fetching data

import React from 'react';

function Loading({isError, isLoading}) {
  let text = isLoading ? 'Fetching Data...' : isError ? 'No results found' : '';
  return (
    <div className='loadingText'>
      <h3>{text}</h3> 
    </div>
  )
}

export default Loading;