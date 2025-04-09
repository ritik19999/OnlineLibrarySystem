import style from "./Welcome.module.css";
function Welcome(params) {
  return (
    <>
      <div className={`${style.container}`}>
        "The more that you read, the more things you will know.
        <br />
        The more that you learn, the more places you will go."
        <br />
        -Dr. Seuss
      </div>
    </>
  );
}
export default Welcome;
