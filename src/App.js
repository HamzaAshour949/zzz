import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
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
  );
}

export default App;
