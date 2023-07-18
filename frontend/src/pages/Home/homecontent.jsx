import main from "../../utils/pictures/main7.jpg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function HomeContent() {

  return (
    <>
      <div
        style={{
          height: "560px",
          backgroundImage: `url(${main})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-8 mb-3 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: "600px" }}>
                <div className={styles.ani1}>
                  <h1
                    className="text-uppercase text-center fw-bold"
                    style={{ color: "aliceblue" ,fontFamily:'Titillium Web, sans-serif',fontSize: "285%" }}
                  >
                    Bringing farm
                  </h1>
                </div>
                <div className={styles.ani2}>
                  <h1 style={{ color: "aliceblue",fontFamily:'Titillium Web, sans-serif' ,fontSize: "200%" }}>
                    To Your Doorstep And
                  </h1>
                </div>
                <div className={styles.ani3}>
                  <h1
                    className="text-capitalize mb-5"
                    style={{ color: "aliceblue",fontFamily:'Titillium Web, sans-serif', fontSize: "190%" }}
                  >
                    Neighbourhood stores
                  </h1>
                </div>
                <div className={styles.ani4}>
                  <p style={{ color: "aliceblue",fontFamily:'Titillium Web, sans-serif' ,fontSize: "130%" }}>
                    We are a team of passionate individuals who {/* want to help
                    people with learning difficulties. We want to help them
                    overcome their difficulties and achieve their dreams. */} are committed to bridge the gap between farmers and merket, empowering both. {/* them to reach wider audience and ensure fair prices */}{/*  Our mission is to bridge the gap between farmers and market. */}
                  </p>
                </div>
                <div className={styles.ani5}>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a className="btn btn-success btn-lg mt-4 me-2" role="button">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
