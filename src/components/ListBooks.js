import React from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';


const ListBooks = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>{props.title}</h1>
    </div>
    <div className="list-books-content">
      <div>
        {props.shelves.map(shelf => (
          <Bookshelf
            key={shelf}
            title={props.shelfTitles[shelf]}
            shelf={shelf}
            books={props.books}
            onMoveBook={props.onMoveBook}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default ListBooks;