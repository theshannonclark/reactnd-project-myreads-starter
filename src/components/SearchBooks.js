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
          const cachedBook = this.props.books[book.id];
          if (typeof cachedBook !== 'undefined') {
            book.shelf = cachedBook.shelf;
          }
          newBooks[book.id] = this.props.createBook(book);
        });
      }
      this.setState({searchResults: newBooks});
    });
  }

  moveSearchedBook(bookId, newShelf) {
    const searchedBook = {...this.state.searchResults[bookId]};
    searchedBook.shelf = newShelf;

    this.setState({
      searchResults: {
        ...this.state.searchResults,
        [bookId]: searchedBook
      }
    });
    this.props.addBook(bookId, searchedBook);
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
            onMoveBook={this.moveSearchedBook.bind(this)}
          />
        </div>
      </div>
		);
	}
}

export default SearchBooks;
