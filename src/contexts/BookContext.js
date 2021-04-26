import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "The Immortals of Meluha", id: 1 },
    { title: "The Secret of Nagas", id: 2 },
    { title: "The Oath of Vayuputras", id: 3 },
    { title: "2 states", id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

// creating context with functional components
