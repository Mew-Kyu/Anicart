import "./App.css";
import LayoutMoive from "./components/layout/LayoutMoive";
import BASE_URL from "./utils/api";
import options from "./utils/option";

function App() {
  // fetch(
  //   `${BASE_URL}/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`,
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  return (
    <>
      <LayoutMoive />
    </>
  );
}

export default App;
