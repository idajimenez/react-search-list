// Component used to display book title and retail price

import React from 'react';

function Details({book}) {
  return (
    <div className='bookDetails'>
      <h1>{book.title}</h1> 
      <p>{book.retailPrice}</p> 
    </div>
  )
}

Details.propTypes = {
  book: React.PropTypes.object.isRequired
}

export default Details;