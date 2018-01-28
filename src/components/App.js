import React from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
// import * as BooksAPI from '../utils/BooksAPI'
import '../css/App.css';

class BooksApp extends React.Component {
  state = {
    // TODO: Add state
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route exact path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp;
