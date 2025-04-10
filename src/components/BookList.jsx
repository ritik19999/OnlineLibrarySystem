import { useState } from "react";
import Books from "../utils/booksData";
import Book from "./Book";
import "./BookList.css";
import Categories from "./Categories";
import PopularBooks from "./PopularBooks";

import Welcome from "./Welcome";

function BookList() {
  const [filteredBook, setFilteredBook] = useState(Books);
  const [value, setValue] = useState("");

  function handleAll(e) {
    setFilteredBook(Books);
  }
  function handleFriction(e) {
    const newBook = Books.filter((book) => book.categories == "Fiction");
    setFilteredBook(newBook);
  }
  function handleMythology(e) {
    const newBook = Books.filter((book) => book.categories == "Mythology");
    setFilteredBook(newBook);
  }
  function handleAdventure(e) {
    const newBook = Books.filter((book) => book.categories == "Adventure");
    setFilteredBook(newBook);
  }
  function handleFantasy(e) {
    const newBook = Books.filter((book) => book.categories == "Fantasy");
    setFilteredBook(newBook);
  }
  function handleScienceFiction(e) {
    const newBook = Books.filter(
      (book) => book.categories == "Science Fiction"
    );
    setFilteredBook(newBook);
  }
  function handleHorror(e) {
    const newBook = Books.filter((book) => book.categories == "Horror");
    setFilteredBook(newBook);
  }
  function handleInputSearch(e) {
    e.preventDefault();
    const searchBook = Books.filter((book) =>
      book.title.toLowerCase().includes(value)
    );
    setFilteredBook(searchBook);
  }
  return (
    <>
      <Welcome></Welcome>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="ms-5 p-3 searchContainer">
            <input
              className="form-control me-2 p-3  fs-6 "
              id="searchInp"
              type="search"
              placeholder="Enter Book"
              aria-label="Search"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="btn btn-outline-success p-3 btn-lg"
              onClick={handleInputSearch}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <Categories
        onAllClick={handleAll}
        onFictionClick={handleFriction}
        onMythologyClick={handleMythology}
        onAdventureclick={handleAdventure}
        onScienceFictionClicked={handleScienceFiction}
        onFantasyClick={handleFantasy}
        onHorrorClick={handleHorror}
      ></Categories>
      <div className="book-list">
        {filteredBook.length != 0 ? (
          filteredBook.map((book) => <Book key={book.id} book={book}></Book>)
        ) : (
          <h3 className="para">No Book found.. Search for another book.</h3>
        )}
      </div>
      <PopularBooks />
    </>
  );
}

export default BookList;
