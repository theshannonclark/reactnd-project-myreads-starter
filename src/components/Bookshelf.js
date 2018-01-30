import React from 'react';

import BooksGrid from './BooksGrid';


const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <BooksGrid
        shelf={props.shelf}
        books={props.books}
        onMoveBook={props.onMoveBook}
      />
    </div>
  </div>
);

export default Bookshelf;