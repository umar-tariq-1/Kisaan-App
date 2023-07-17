import main from "./main1.jpg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function HomeContent() {

  return (
    <>
      <div
        style={{
          height: "550px",
          backgroundImage: `url(${main})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-4 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: "390px" }}>
                <div className={styles.ani1}>
                  <h1
                    className="text-uppercase fw-bold"
                    style={{ color: "aliceblue", fontSize: "300%" }}
                  >
                    Empowering
                  </h1>
                </div>
                <div className={styles.ani2}>
                  <h1 style={{ color: "aliceblue", fontSize: "200%" }}>
                    Those with Learning
                  </h1>
                </div>
                <div className={styles.ani3}>
                  <h1
                    className="text-uppercase fw-bold"
                    style={{ color: "aliceblue", fontSize: "310%" }}
                  >
                    Difficulties
                  </h1>
                </div>
                <div className={styles.ani4}>
                  <p style={{ color: "aliceblue", fontSize: "120%" }}>
                    We are a team of passionate individuals who want to help
                    people with learning difficulties. We want to help them
                    overcome their difficulties and achieve their dreams.
                  </p>
                </div>
                <div className={styles.ani5}>
                  <Link
                    to="/registration"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a className="btn btn-success btn-lg me-2" role="button">
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
