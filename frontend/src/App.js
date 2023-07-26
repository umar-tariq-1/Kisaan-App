import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import MainPage from "../src/pages/Auth/MainPage/MainPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/dashboard" Component={MainPage} />
        {/* <Route path="/*" Component={Page404} /> */}
      </Routes>
    </Router>
  );
}

export default App;
