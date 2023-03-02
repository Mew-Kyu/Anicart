import "./App.css";
import LayoutMoive from "./components/layout/LayoutMoive";
import SEARCH_URL from "./utils/search";
import TRENDING_URL from "./utils/trending";
import { Routes, Route } from "react-router-dom";

function App() {
  // const find = "doremon";

  // fetch(`${TRENDING_URL}`)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return (
    <>
      <Routes>
        <Route></Route>
      </Routes>
      <LayoutMoive />
    </>
  );
}

export default App;
