import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header></Header>

        <Outlet></Outlet>
      </Provider>
    </>
  );
}

export default App;
