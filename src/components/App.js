import React from 'react';
import { Route } from 'react-router-dom';

import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

import * as BooksAPI from '../utils/BooksAPI'
import defaultBooks from '../bookdata';
import '../css/App.css';

class BooksApp extends React.Component {
  state = {
    books: defaultBooks
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const newBooks = {};

      books.forEach((book) => {
        newBooks[book.id] = this.createBook(book);
      });
      this.setState({books: newBooks});
    });
  }

  validShelf(shelf) {
    return [
      'currentlyReading', 'wantToRead',
      'read', 'none'
    ].includes(shelf);
  }

  createBook(book) {
    return {
      title: book.title,
      authors: book.authors,
      shelf: book.shelf,
      cover: {
        width: 128,
        height: 176,
        backgroundImage: book.imageLinks.thumbnail
      }
    };
  }

  moveBook(bookId, newShelf) {
    const book = this.state.books[bookId];
    newShelf = this.validShelf(newShelf) ? newShelf : book.shelf;

    const updatedBook = {...book, shelf: newShelf};
    this.setState({
      books: {...this.state.books, [bookId]: updatedBook}
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onMoveBook={this.moveBook.bind(this)}
          />
        )}/>
        <Route exact path="/search" component={SearchBooks} />
      </div>
    )
  };
}

export default BooksApp;
