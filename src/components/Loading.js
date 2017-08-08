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

Loading.propTypes = {
  isError: React.PropTypes.bool.isRequired,
  isLoading: React.PropTypes.bool.isRequired
}

export default Loading;