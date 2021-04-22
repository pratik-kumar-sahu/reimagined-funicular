import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
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
};

export default BookList;
