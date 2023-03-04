import "./App.css";
import LayoutMoive from "./components/layout/LayoutMoive";
import { Routes, Route } from "react-router-dom";
import MovieHome from "./components/pages/home/MovieHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieHome />} />
      </Routes>
      <LayoutMoive />
    </>
  );
}

export default App;
