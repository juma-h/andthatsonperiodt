import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ParentPage, Over18, Under18} from "./pages";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<ParentPage />}>
            <Route path="/" element={<Under18 />} />
            <Route path="over18" element={<Over18 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
