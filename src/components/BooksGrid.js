import React from 'react';
import Book from './Book';

class BooksGrid extends React.Component {
  render() {
    const { category, books } = this.props;
    const bookIds = Object.keys(books);

    return (
      <ol className="books-grid">
        {bookIds
          .filter(bookId => (
            books[bookId].shelf === category
          ))
          .map(bookId => (
            <Book
              key={bookId}
              bookId={bookId}
              book={books[bookId]}
              onMoveBook={this.props.onMoveBook}
            />
          ))
        }
      </ol>
    );
  }
}

export default BooksGrid;