import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import BooksGrid from './BooksGrid';

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchResults: {}
  };

  handleSearch(event) {
    this.setState({query: event.target.value}, () => {
      this.performSearch.call(this, this.state.query);
    });
  }

  performSearch(query) {
    BooksAPI.search(query).then((books) => {
      const newBooks = {};

      if (books instanceof Array) {
        books.forEach((book) => {
          newBooks[book.id] = this.props.createBook(book);
        });
      }
      this.setState({searchResults: newBooks});
    });
  }

	render() {
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.query}
              onChange={(event) => this.handleSearch.call(this, event)} 
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            shelf='all'
            books={this.state.searchResults}
            onMoveBook={this.props.addBook}
          />
        </div>
      </div>
		);
	}
}

export default SearchBooks;
