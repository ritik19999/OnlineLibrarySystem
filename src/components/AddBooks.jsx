import { useState } from "react";
import "./AddBooks.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/addBookSlice";
import Books from "../utils/booksData";
import { Link } from "react-router-dom";

function AddBooks() {
  const [id, setId] = useState(23);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [coverUrl, setCoverUrl] = useState();
  const [year, setYear] = useState();
  const [ratings, setRatings] = useState();
  const dispatch = useDispatch();

  function validation() {
    if (
      title == 0 &&
      author == 0 &&
      category == 0 &&
      description == 0 &&
      coverUrl == 0 &&
      year == 0 &&
      ratings == 0
    ) {
      alert("Fill all details");
    }
  }
  function handleForm() {
    validation();
    console.log("hi");
    const book = {
      id: id,
      title: title,
      author: author,
      ratings: ratings,
      publication_year: year,
      categories: category,
      description: description,
      cover_image: coverUrl,
    };
    setId(id + 1);
    dispatch(addItem(book));
  }
  return (
    <>
      <h1>Hi Add book</h1>
      <div className="container">
        <div className="form">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author:
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="coverUrl" className="form-label">
              Cover Image Url:
            </label>
            <input
              type="text"
              className="form-control"
              id="coverUrl"
              onChange={(e) => setCoverUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year:
            </label>
            <input
              type="number"
              className="form-control"
              id="year"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ratings" className="form-label">
              Ratings:
            </label>
            <input
              type="number"
              className="form-control"
              id="ratings"
              onChange={(e) => setRatings(e.target.value)}
            />
          </div>
          <Link to="/BrowseBooks">
            <button onClick={handleForm} className="btn btn-primary">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddBooks;
