import React from 'react';
import { Route } from 'react-router-dom';

import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

import * as BooksAPI from '../utils/BooksAPI'
import '../css/App.css';

class BooksApp extends React.Component {
  state = {
    books: {}
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
      cover: book.imageLinks.thumbnail
    };
  }

  moveBook(bookId, newShelf) {
    const book = this.state.books[bookId];
    newShelf = this.validShelf(newShelf) ? newShelf : book.shelf;

    const updatedBook = {...book, shelf: newShelf};
    this.setState({
      books: {...this.state.books, [bookId]: updatedBook}
    });
    BooksAPI.update({id: bookId}, newShelf);
  }

  addBook(bookId, book) {
    // TODO: add book to state
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

        <Route exact path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onAddBook={this.addBook.bind(this)}
          />
        )}/>
      </div>
    )
  };
}

export default BooksApp;
