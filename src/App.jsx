import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./UI/Login/login.jsx";
import LandingPage from "../src/UI/LandingPage/LandingPage.jsx";
import Signup from "./UI/Signup/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
