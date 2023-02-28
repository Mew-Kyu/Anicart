import "./App.css";
import LayoutMoive from "./components/layout/LayoutMoive";
import BASE_URL from "./utils/api";

function App() {
  const find = "doremon";

  fetch(`${BASE_URL}&language=vi-VN&query=${find}&page=1&include_adult=false`)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <>
      <LayoutMoive />
    </>
  );
}

export default App;
