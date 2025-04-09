import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Error.css";
function Error() {
  const error = useRouteError();
  return (
    <>
      <h1>OOps!!</h1>

      <h3>{` ${error.status} Page ${error.statusText}`}</h3>
      <h3>{error.data}</h3>

      <Link to={"/home"}>
        <button type="button" className="btn btn-dark mb-5 p-4 mt-5 fs-4">
          ⇦ Home
        </button>
      </Link>
    </>
  );
}
export default Error;
