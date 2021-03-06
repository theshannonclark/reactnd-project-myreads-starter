import React from 'react';
import { Route } from 'react-router-dom';

import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

import * as BooksAPI from '../utils/BooksAPI';
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

  validShelf = (shelf) => {
    return [
      'currentlyReading', 'wantToRead',
      'read', 'none'
    ].includes(shelf);
  };

  createBook = (book) => {
    return {
      title: book.title || '',
      authors: book.authors || '',
      shelf: book.shelf || 'none',
      // Some books don't have an imageLinks property
      cover: (book.imageLinks) ? book.imageLinks.thumbnail : ''
    };
  };

  moveBook = (bookId, newShelf) => {
    const book = this.state.books[bookId];
    newShelf = this.validShelf(newShelf) ? newShelf : book.shelf;

    const updatedBook = {...book, shelf: newShelf};
    this.setState({
      books: {...this.state.books, [bookId]: updatedBook}
    });
    this.updateShelf(bookId, newShelf);
  };

  addBook = (bookId, newBook) => {
    this.setState({
      books: {...this.state.books, [bookId]: newBook}
    });
    this.updateShelf(bookId, newBook.shelf);
  };

  updateShelf = (bookId, newShelf) => {
    BooksAPI.update({id: bookId}, newShelf);
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            title="MyReads"
            books={this.state.books}
            onMoveBook={this.moveBook}
            shelves={['currentlyReading', 'wantToRead', 'read']}
            shelfTitles={{
              'currentlyReading': 'Currently Reading',
              'wantToRead': "Want to Read",
              'read': 'Read'
            }}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            addBook={this.addBook}
            createBook={this.createBook}
          />
        )}/>
      </div>
    );
  };
};

export default BooksApp;
