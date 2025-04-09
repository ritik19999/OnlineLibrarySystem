import "./Categories.css";
function Categories({
  onFictionClick,
  onMythologyClick,
  onAdventureclick,
  onScienceFictionClicked,
  onFantasyClick,
  onHorrorClick,
  onAllClick,
}) {
  return (
    <>
      <h3 className="category-label">Categories:</h3>
      <div className="  buttonCustom ">
        <button
          type="button"
          className="btn btn-outline-info  m-2 "
          onClick={onAllClick}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-info  m-2 "
          onClick={onFictionClick}
        >
          Fiction
        </button>
        <button
          type="button"
          className="btn btn-outline-info  m-2 "
          onClick={onMythologyClick}
        >
          Mythology
        </button>
        <button
          type="button"
          className="btn btn-outline-info  m-2 "
          onClick={onScienceFictionClicked}
        >
          Sci-Fi
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2 "
          onClick={onAdventureclick}
        >
          Adventure
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2 "
          onClick={onFantasyClick}
        >
          Fantasy
        </button>
        <button
          type="button"
          className="btn btn-outline-info m-2 "
          onClick={onHorrorClick}
        >
          Horror
        </button>
      </div>
    </>
  );
}

export default Categories;
