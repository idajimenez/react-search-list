// Component used to display each list
// Serves as the container for thumbnail and details

import React from 'react';

// Custom components
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

ListRow.propTypes = {
  book: React.PropTypes.object.isRequired
}

export default ListRow;