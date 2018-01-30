import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBooks extends React.Component {
  render() {
    const shelves = ['currentlyReading', 'wantToRead', 'read'];
    const shelfTitles = {
      'currentlyReading': 'Currently Reading',
      'wantToRead': "Want to Read",
      'read': 'Read'
    };

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf
                key={shelf}
                title={shelfTitles[shelf]}
                shelf={shelf}
                books={this.props.books}
                onMoveBook={this.props.onMoveBook}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;