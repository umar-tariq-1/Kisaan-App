import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import adhd from "./adhd.png";
import dyslexia from "./dyslexia.png";
import visual from "./visual.png";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

import {
  GrInstagram
} from "react-icons/gr";

export default function HomeFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div
      id="tutorial"
      style={{ paddingTop: "30px", backgroundColor: "aliceblue",letterSpacing:"1px" }}
    >
      <div className="mt-4 py-4 py-xl-5">
        <div className="row-6 mb-5">
          <div className="col-10 col-md-8 col-xl-3 text-center mx-auto">
            <h1 className="mb-2">Learning Plans</h1>
            <p data-aos="zoom-in-up">
              Carefully catered plans for students with learning difficulties.
            </p>
          </div>
        </div>
        </div>
        
      <div style={{marginTop:"-25px",paddingBottom:"40px"}} className="container">
        
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img src={adhd} alt="" data-aos="zoom-in-up" />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in-up">ADHD</h4>
                <p data-aos="zoom-in-up">
                  ADHD (Attention-Deficit/Hyperactivity Disorder) is a
                  neurodevelopmental disorder characterized by persistent
                  patterns of inattention, hyperactivity, and impulsivity that
                  can impact daily functioning. It often leads to difficulties
                  in focusing, organizing tasks, and maintaining self-control.
                  With proper management and support, individuals with ADHD can
                  learn effective strategies and lead fulfilling lives.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img
                  style={{ width: "96px", height: "96px" }}
                  src={dyslexia}
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in">Dyslexia</h4>
                <p data-aos="zoom-in">
                  Dyslexia is a learning disorder that affects reading, writing,
                  and spelling skills due to difficulties in processing language
                  and decoding words. It can cause frustration, self-doubt, and
                  challenges in academic settings. However, with appropriate
                  support and accommodations, individuals with dyslexia can
                  overcome obstacles and thrive in various aspects of life.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img src={visual} alt="" data-aos="zoom-in-up" />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in-up">Visual Agnosia</h4>
                <p data-aos="zoom-in-up">
                  Visual Agnosia is a neurological condition where individuals
                  have difficulty recognizing and interpreting visual
                  information despite intact vision. It can result in an
                  inability to recognize familiar objects, faces, or shapes.
                  However, other sensory modalities remain intact, highlighting
                  the specific impairment in visual perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#5cac81" }}
        >
          <section
            className="d-flex justify-content-around align-content-around flex-wrap p-2 text-white"
            style={{ backgroundColor: "#1b854a", fontSize: "23px" }}
          >
            <div className="me-2">
              <div >Connect with us:&nbsp;&nbsp;</div>
            </div>

            <div>
              <a href= "https://www.instagram.com/umar_.tariq/" className="text-white me-4">
                <GrInstagram />
              </a>
              <a href="https://twitter.com/umar__tariq/" className="text-white me-4">
                <FaTwitter />
              </a>
              <a href="https://github.com/umart823/" className="text-white me-4">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/umar-tariq-" className="text-white me-4">
                <FaLinkedinIn />
              </a>
              <a href="mailto: official.umartariq@gmail.com" class="text-white me-4">
                <FaEnvelope />
              </a>
            </div>
          </section>
          <section className="">
            <div className={"container text-center mt-2"}>
              <div className="row mt-3">
                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-0 mb-md-4">
                  <hr />
                  <h5 className="text-uppercase fw-bold">Kisaan App</h5>
                  <hr
                    className="mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p style={{textAlign:"justify"}}>
                    We provide a platform for farmers and vendors, through which they are being connected to avoid shortness of crops caused because of middlemen and to ensure the fair prices of crops due to which farmers, vendors and buyers would be happy. 
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-0 mb-md-4">
                <hr />
                  <h5 className="text-uppercase align-items-center text-center fw-bold">Useful Links</h5>
                  <hr
                    className="mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <Link to="/signup" style={{textDecoration:"none"}}>
                      <h6 className="h5  text-dark text-center fw-normal">Sign Up</h6>
                    </Link>
                  </p>
                  <p>
                    <Link to="/login" style={{textDecoration:"none"}}>
                      <h6 className="h5 text-dark text-center fw-normal">Login</h6>
                    </Link>
                  </p>
                  <p>
                    <Link to="/contact" style={{textDecoration:"none"}}>
                      <h6 className="h5  text-dark text-center  fw-normal">Contact</h6>
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 ">
                  <hr />
                  <h5 className={"text-uppercase text-center fw-bold"}>About</h5>
                  <hr
                    className="mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p style={{textAlign:"justify"}}>
                    We are a team of passionate individuals who believe in the hardwork of farmers and are committed to bridge the gap between farmers and merket, empowering them to reach wider audience and ensure fair prices.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center text-light p-3"
            style={{ backgroundColor: "black" }}
          >
            © 2023 Copyright:&nbsp;
            <a className="text-light" href="/">
              KisaanApp.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
