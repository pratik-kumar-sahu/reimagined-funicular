import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLight ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.text, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
