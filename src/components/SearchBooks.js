import React from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';

class SearchBooks extends React.Component {
	render() {
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            shelf='all'
            books={this.props.books}
            onMoveBook={this.props.onAddBook}
          />
        </div>
      </div>
		);
	}
}

export default SearchBooks;