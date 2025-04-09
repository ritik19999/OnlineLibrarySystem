import style from "./Book.module.css";
import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <>
      <div className={`${style.bookCard}`}>
        <img src={book.cover_image} alt="" height={220} width={245} />
        <div className="bookDetails">
          <div className={`${style.bookTitle}`}>
            <span className={`${style.title}`}>{book.title}</span>
            <div>
              <span className={`${style.star}`}>☆</span>
              <span className={`${style.ratings}`}> {book.ratings} </span>
            </div>
          </div>

          <p className={`${style.author}`}>{book.author}</p>
          <p className={`${style.categories}`}>{book.categories}</p>
          <Link to={`/book/${book.id}`} key={book.id}>
            <button type="button" className="btn btn-dark button ">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Book;
