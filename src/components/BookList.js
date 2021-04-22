import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext; // this can only be used in class based components.
  // if we want to convert it into function based component then we have to use useContext hook.
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.text, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>The Immortals of Meluha</li>
          <li style={{ background: theme.ui }}>The Secret of Nagas</li>
          <li style={{ background: theme.ui }}>The Oath of Vayuputras</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
