import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import DetailSeries from "./pages/DetailSeries";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react_movie" element={<Home />} />
        <Route path="/react_movie/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/detailSeries/:id" element={<DetailSeries />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
