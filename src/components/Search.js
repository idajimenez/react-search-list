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
    this.searchText = event.target.value;
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
    return this.props.bookList.filter(book => {
      let title = book.title.toLowerCase();
      return title.indexOf(this.searchText.toLowerCase()) !== -1;
    })
  }
}

Search.propTypes = {
  bookList: React.PropTypes.array.isRequired,
  setSearchResults: React.PropTypes.func.isRequired
}