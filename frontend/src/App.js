import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
