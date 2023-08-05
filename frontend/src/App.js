import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import CustomLoadingAnimation from "./components/LoadingAnimation/loadingAnimation";
import Home from "../src/pages/Home/Home";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";
import MainPage from "../src/pages/Auth/MainPage/MainPage";
// const HomeComponent = lazy(() => import("./pages/Home/Home"));
// const SignUpComponent = lazy(() => import("./pages/SignUp/signUp"));
// const LoginComponent = lazy(() => import("./pages/Login/login"));
// const ContactComponent = lazy(() => import("./pages/Contact/contact"));
// const AboutComponent = lazy(() => import("./pages/About/about"));
// const MainPageComponent = lazy(() =>
//   import("../src/pages/Auth/MainPage/MainPage")
// );

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={
          <CustomLoadingAnimation overlayColor={"rgba(0, 0, 0, 0.1)"} />
        }
      >
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/dashboard" Component={MainPage} />
          {/* <Route path="/*" Component={Page404} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
