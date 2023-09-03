import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//import des pages:
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Favoris from "./pages/Favoris";
import Accueil from "./pages/Accueil";

//import des composants:
import Header from "./components/Header";

import "./App.css";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<Details />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/favorites" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
