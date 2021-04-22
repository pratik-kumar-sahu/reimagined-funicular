import React, { Component } from "react";

export class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The Immortals of Meluha</li>
          <li>The Secret of Nagas</li>
          <li>The Oath of Vayuputras</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
