import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              category="currentlyReading"
              books={this.props.books}
              onMoveBook={this.props.onMoveBook}
            />

            <Bookshelf
              title="Want to Read"
              category="wantToRead"
              books={this.props.books}
              onMoveBook={this.props.onMoveBook}
            />

            <Bookshelf
              title="Read"
              category="read"
              books={this.props.books}
              onMoveBook={this.props.onMoveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;