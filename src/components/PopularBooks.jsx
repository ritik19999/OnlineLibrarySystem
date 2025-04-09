import Books from "../utils/booksData";
import Book from "./Book";
import style from "./PopularBooks.module.css";

function PopularBooks() {
  return (
    <>
      <h2 className={`${style.header}`}>Popular Books</h2>
      <div className={`${style.popular}`}>
        {Books.map(
          (book) => book.id % 3 == 0 && <Book key={book.id} book={book}></Book>
        )}
      </div>
    </>
  );
}

export default PopularBooks;
