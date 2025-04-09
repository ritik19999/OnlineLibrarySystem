import { Link, useParams } from "react-router-dom";
import Books from "../utils/booksData";
import style from "./BookDetails.module.css";
import { useSelector } from "react-redux";

function BookDetails() {
  const param = useParams();
  const addedBook = useSelector((store) => store.addBook.items);
  function handleBack() {
    <Link to={"/browseBooks"}></Link>;
  }
  const book = addedBook.filter((book) => book.id == param.id);

  return (
    <>
      {book.map((book) => {
        return (
          <>
            <div className={`${style.bookDetails}`}>
              <div className={`${style.details}`}>
                <h1 className={`${style.title}`}>
                  <span style={{ color: "yellow", marginRight: "10px" }}>
                    Title:
                  </span>
                  {book.title}
                </h1>
                <h1 className={`${style.author}`}>
                  <span style={{ color: "yellow", marginRight: "10px" }}>
                    Author:
                  </span>
                  {book.author}
                </h1>
                <h1 className={`${style.ratings}`}>
                  <span style={{ color: "yellow", marginRight: "10px" }}>
                    Ratings:
                  </span>
                  {book.ratings}
                  <span className={`${style.star}`}>☆</span>
                </h1>
                <h1 className={`${style.description}`}>
                  <span style={{ color: "yellow", marginRight: "10px" }}>
                    Description:
                  </span>
                  <br />
                  {book.description}
                </h1>
              </div>
              <div className={`${style.image}`}>
                <img src={book.cover_image} alt="" width={400} height={400} />
              </div>
            </div>
            <Link to={"/browseBooks"} key={book.id}>
              <button
                type="button"
                className="btn btn-dark mb-5 p-4 mt-5 fs-4"
                onClick={handleBack}
              >
                ⇦ Browse Books
              </button>
            </Link>
            ;
          </>
        );
      })}
    </>
  );
}

export default BookDetails;
