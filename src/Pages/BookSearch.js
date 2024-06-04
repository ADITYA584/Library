import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const BookSearch = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState(
    localStorage.getItem("selectedBooks")
      ? JSON.parse(localStorage.getItem("selectedBooks"))
      : []
  );

  // useEffect(() => {
  //   Load selected books from local storage when component mounts
  //   const storedBooks = localStorage.getItem("selectedBooks");
  //   console.log(storedBooks);
  //   setSelectedBooks(JSON.parse(storedBooks));
  //   console.log(selectedBooks);
  // }, []);

  useEffect(() => {
    // Save selected books to local storage whenever it changes
    localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
  }, [selectedBooks]);

  const addHandler = (book) => {
    const isBookSelected = selectedBooks.some(
      (selectedBook) =>
        selectedBook.title === book.title &&
        selectedBook.edition_count === book.edition_count
    );
    if (isBookSelected) {
      alert("Book already selected");
      return;
    }

    setSelectedBooks((prevBooks) => [
      ...prevBooks,
      {
        title: book.title,
        edition_count: book.edition_count,
      },
    ]);
  };

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`,
          { signal }
        );
        const data = await response.json();
        setBooks([...data.docs]);
        setIsLoading(false);
      } catch (error) {
        if (!error === "signal is aborted without reason") {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <h1 className="text-xl sm:text-3xl font-mono font-extrabold p-4">
        Search Book By Name
      </h1>
      <div className="w-full flex justify-center ">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          className="w-[50%] p-2 border-2 border-black outline-none rounded-lg focus:ring focus:border-none focus:ring-blue-600"
          type="text"
          placeholder="Search Book Here"
        />
      </div>
      <div className="grid m-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <Card
            val="search"
            key={index}
            book={book}
            addHandler={() => addHandler(book)}
          />
        ))}
      </div>
      {isLoading && (
        <Backdrop
          style={{ visibility: "visible", opacity: "1" }}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default BookSearch;
