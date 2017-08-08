// Component used to display the thumbnail

import React from 'react';

function Thumbnail({book}) {
  
  return (
    <div className='thumbnail'>
      <img src={book.thumbnail} alt={book.title} />
    </div>
  )
}

Thumbnail.propTypes = {
  book: React.PropTypes.object.isRequired
}

export default Thumbnail;