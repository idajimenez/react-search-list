// Component used to display search box

import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.searchText = '';
    
  }

  // Set searchText
  // Change list based from searchText
  handleChange = (event) => {
    this.searchText = event.target.value.toLowerCase();
    this.props.setSearchResults(this.getSearch(), this.searchText);
  }

  render() {
    return (
      <div className='searchBox'>
        <input 
          type='text' 
          placeholder='Search title' 
          value={this.searchText} 
          onChange={this.handleChange} 
        />
      </div>
    )
  }

  // Returns the list that matches searchText;
  getSearch = () => {    
    return this.props.books.filter(book => {
      let title = book.title.toLowerCase();
      return title.indexOf(this.searchText) !== -1;
    })
  }
}

Search.propTypes = {
  books: React.PropTypes.array.isRequired,
  setSearchResults: React.PropTypes.func.isRequired
}