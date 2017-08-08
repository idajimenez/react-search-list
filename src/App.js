import React, { Component } from 'react';

import Loading from './components/Loading';
import ListRow from './components/ListRow';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      books: [],
      isLoading: true
    }
  }

  componentWillMount() {
    this.fetchFromApi();
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ?
          <Loading bookList={this.state.bookList} />
          : this.renderList()
        }
      </div>
    );
  }

  renderList = () => {
    return (
      <div className='container'>
        <Search bookList={this.state.bookList} setSearchResults={this.setSearchResults}/>
        {this.state.bookList.map((list, i) => 
          <ListRow book={list} key={i} />
        )}
      </div>
    )
  }

  fetchFromApi = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')
    .then(response => {
      if (response.status !== 200) {  
        console.log(`Something went wrong. Status Code: ${response.status}`);
        return;
      }
      response.json().then(data => {  
        this.getItems(data.items);
      });
    }).catch(err => {
      console.log('Fetching error', err);
    });
  }

  getItems = (items) => {
    let results = items.map(item => {
      let retailPrice = (item.saleInfo.saleability === 'NOT_FOR_SALE') ?
                          item.saleInfo.saleability
                          : `${item.saleInfo.retailPrice.currencyCode} ${item.saleInfo.retailPrice.amount}`;

      return {
        title: item.volumeInfo.title,
        thumbnail: item.volumeInfo.imageLinks.thumbnail,
        retailPrice: retailPrice
      }
    });
    this.setState({ 
      bookList: results,
      books: results,
      isLoading: false 
    });
  }

  setSearchResults = (results, searchText) => {
    if (searchText === '') {
      this.setState({ bookList: this.state.books });  
    } else {
      this.setState({ bookList: results });
    }
  }
}

export default App;
