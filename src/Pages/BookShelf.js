import React from "react";
import { useState } from "react";
import Card from "../components/Card";

const BookShelf = () => {
  const [selectedBooks, setSelectedBooks] = useState(
    localStorage.getItem("selectedBooks")
      ? JSON.parse(localStorage.getItem("selectedBooks"))
      : []
  );
  return (
    <React.Fragment>
      <h1 className="text-xl text-center sm:text-3xl font-mono font-extrabold p-4">
        My BookShelf
      </h1>
      <div className="grid m-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedBooks.map((book, index) => (
          <Card val="shelf" book={book} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default BookShelf;
