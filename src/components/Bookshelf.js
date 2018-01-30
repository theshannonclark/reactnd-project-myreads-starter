import React from 'react';
import BooksGrid from './BooksGrid';

class Bookshelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            shelf={this.props.shelf}
            books={this.props.books}
            onMoveBook={this.props.onMoveBook}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;