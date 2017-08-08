import React from 'react';
import Details from './Details';
import Thumbnail from './Thumbnail';

function ListRow({book}) {

  return (
    <div className='listRow'>
      <Thumbnail book={book} />
      <Details book={book} />
    </div>
  )
}

export default ListRow;