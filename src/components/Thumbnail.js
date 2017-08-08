// Component used to display the thumbnail

import React from 'react';

function Thumbnail({book}) {
  
  return (
    <div className='thumbnail'>
      <img src={book.thumbnail} alt={book.title} />
    </div>
  )
}

export default Thumbnail;