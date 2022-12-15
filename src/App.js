import "./app.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import StylePage from "./components/StylePage/StylePage";
import { UsernameContext } from "./context/UsernameContext";

function App() {
  const [username, setUsername] = useState("");


  return (
    <UsernameContext.Provider value={{ username, setUsername  }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/style" element={<StylePage />} />
          </Routes>
        </Router>
      </div>
    </UsernameContext.Provider>
  );
}

export default App;
