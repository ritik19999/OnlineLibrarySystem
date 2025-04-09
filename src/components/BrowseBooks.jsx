import Books from "../utils/booksData";
import Book from "./Book";
import "./BrowseBooks.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const addBook = useSelector((store) => store.addBook.items);

  return (
    <>
      <div className="books">
        {addBook.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            style={{ textDecoration: "none" }}
          >
            <Book key={book.id} book={book}></Book>
          </Link>
        ))}
      </div>
      <Link to={"/home"}>
        <button type="button" className="btn btn-dark mb-5 p-4 mt-5 fs-4">
          ⇦ Home
        </button>
      </Link>
    </>
  );
}
export default BrowseBooks;
