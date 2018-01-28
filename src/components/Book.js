import React from 'react';

class Book extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: book.cover.width,
              height: book.cover.height,
              backgroundImage: `url("${book.cover.backgroundImage}")` 
            }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors[0]}</div>
        </div>
      </li>
    );
  }
}

export default Book;