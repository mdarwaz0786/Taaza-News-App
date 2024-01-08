import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleLineNews from "./Components/SingleLineNews/SingleLineNews.jsx";
import MultiLineNews from "./Components/MultiLineNews/MultiLineNews.jsx";
import HeadLineNews from "./Components/HeadLineNews/HeadLineNews.jsx";
import SingleLineCategoryNews from "./Components/SingleLineNews/SingleLineCategoryNews.jsx";
import MultiLineCategoryNews from "./Components/MultiLineNews/MultiLineCategoryNews.jsx";
import HeadLineCategory from "./Components/HeadLineNews/HeadLineCategory.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingleLineNews />} />
          <Route path="/SingleLineCategoryNews" element={<SingleLineCategoryNews />} />
          <Route path="/MultiLineNews" element={<MultiLineNews />} />
          <Route path="/MultiLineCategoryNews" element={<MultiLineCategoryNews />} />
          <Route path="/HeadLineCategory" element={<HeadLineCategory />} />
          <Route path="/HeadLineNews" element={<HeadLineNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
