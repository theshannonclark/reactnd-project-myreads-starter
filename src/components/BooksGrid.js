import React from 'react';

import Book from './Book';


const BooksGrid = (props) => {
  const { shelf, books } = props;
  const bookIds = Object.keys(books);

  return (
    <ol className="books-grid">
      {bookIds
        .filter(bookId => (
          (shelf !== 'all') ? books[bookId].shelf === shelf : true
        ))
        .map(bookId => (
          <Book
            key={bookId}
            bookId={bookId}
            book={books[bookId]}
            onMoveBook={props.onMoveBook}
          />
        ))
      }
    </ol>
  );
};

export default BooksGrid;