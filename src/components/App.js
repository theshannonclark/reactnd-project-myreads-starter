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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} />
        )}/>
        <Route exact path="/search" component={SearchBooks} />
      </div>
    )
  };
}

export default BooksApp;
