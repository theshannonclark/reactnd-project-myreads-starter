import React from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
// import * as BooksAPI from '../utils/BooksAPI'
import sampleBooks from '../bookdata';
import '../css/App.css';

class BooksApp extends React.Component {
  state = {
    books: sampleBooks
  };

  validShelf(shelf) {
    return [
      'currentlyReading',
      'wantToRead',
      'read',
      'none'
    ].includes(shelf);
  } 

  moveBook(bookId, newShelf) {
    const book = this.state.books[bookId];
    newShelf = this.validShelf(newShelf) ? newShelf : book.shelf;

    /* books is an object in which each book is also an object,
     * which makes it a little bit difficult to update.
     * Maybe there's a better way to do this...
     */
    const updatedBook = {...book, 'shelf': newShelf};
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
