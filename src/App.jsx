import FullStack from "./Components/FullStack.jsx";
import Java from "./Components/Java.jsx";
import Ds from "./Components/DataStructure.jsx";
import Course from "./Components/Course.jsx";
import All from "./Components/All.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <ul
          className="list-inline d-flex justify-content-evenly mt-4"
          style={{
            listStyleType: "none",
            textDecoration: "none",
            fontSize: 25,
          }}
        >
          <li className="list-inline-item">
            <Link to="/">All </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/fsd">Full Stack </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/java">Java </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/ds">Data </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/course">Course </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fsd" element={<FullStack />} />
          <Route path="/java" element={<Java />} />
          <Route path="/ds" element={<Ds />} />
          <Route path="/course" element={<Course />} />
          <Route
            path="*"
            element={
              <div className="text-center mt-5">
                <h1 className="display-1">Sorry, No Page Found </h1>
                <h1 className="display-1 mt-4">Enter correct URL</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
