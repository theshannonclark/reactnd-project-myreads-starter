import React from 'react';


class Book extends React.Component {

  handleBookShelfChange = (event) => {
    const id = this.props.bookId;
    const newShelf = event.target.value;

    this.props.onMoveBook(id, newShelf);
  };

  render() {
    const book = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={book.cover} alt={book.title} />
            <div className="book-shelf-changer">
              <select name="shelf" value={book.shelf} onChange={(event) => this.handleBookShelfChange(event)}>
                <option value="_blank" disabled>Move to...</option>
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
  };
}

export default Book;