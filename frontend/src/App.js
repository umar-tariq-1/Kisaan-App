import React, { Suspense, useEffect } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import Home from "../src/pages/Home/Home";
import CustomLoadingAnimation from "./components/LoadingAnimation/loadingAnimation";
// import SignUp from "./pages/SignUp/signUp";
// import Login from "./pages/Login/login";
// import Contact from "./pages/Contact/contact";
// import About from "./pages/About/about";
// import MainPage from "../src/pages/Auth/MainPage/MainPage";
// const HomeComponent = lazy(() => import("./pages/Home/Home"));
const SignUpComponent = lazyWithPreload(() => import("./pages/SignUp/signUp"));
const LoginComponent = lazyWithPreload(() => import("./pages/Login/login"));
const ContactComponent = lazyWithPreload(() =>
  import("./pages/Contact/contact")
);
const AboutComponent = lazyWithPreload(() => import("./pages/About/about"));
const MainPageComponent = lazyWithPreload(() =>
  import("../src/pages/Auth/MainPage/MainPage")
);

function App() {
  useEffect(() => {
    SignUpComponent.preload();
    LoginComponent.preload();
    AboutComponent.preload();
    ContactComponent.preload();
    // MainPageComponent.preload();
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={<CustomLoadingAnimation overlayColor={"rgba(0,0,0,0.1)"} />}
      >
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/signup" Component={SignUpComponent} />
          <Route path="/login" Component={LoginComponent} />
          <Route path="/about" Component={AboutComponent} />
          <Route path="/contact" Component={ContactComponent} />
          <Route path="/dashboard" Component={MainPageComponent} />
          {/* <Route path="/*" Component={Page404} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
