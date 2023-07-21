import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Test } from './components/test';


function App() {
  return (
    <>
      <Test />
      <ul>
        <li>
          <Link to={`/`}>homepage</Link>
          <Link to={`/page2`}>page2</Link>
          <Link to={`/page3`}>page3</Link>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>this is the homepage at /</div>
              </>
            }
          />
          <Route
            path="/page2"
            element={
              <>
                <div>this is the page2 at /page2</div>
              </>
            }
          />
          <Route
            path="/page3"
            element={
              <>
                <div>this is the page3 at /page3</div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
