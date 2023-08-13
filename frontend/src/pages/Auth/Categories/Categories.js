import React from "react";

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import "./category-product.css";
import ResponsiveDrawer from "../../../components/Drawer/Drawer";

const Categories = () => {
  return (
    <ResponsiveDrawer Categories={1}>
      {/* <div className="d-flex justify-content-center align-items-center h1">
        Categories
      </div> */}
      <div className="container-fluid">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 mb-4 mb-lg-0">
                    {/* <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    > */}
                    <img
                      src="https://ik.imagekit.io/umartariq/productImages/895077742"
                      className="card-img w-100"
                      alt="&nbsp;Loading..."
                    />

                    {/* </MDBRipple> */}
                  </div>
                  <div className="col-md-6">
                    <h3>Cotton</h3>
                    <div className="d-flex flex-row">
                      <div className="text-warning mb-1 me-2">
                        <FaStar size={"18px"} />
                        <FaStar size={"18px"} />
                        <FaStar size={"18px"} />
                        <FaStar size={"18px"} />
                        <FaStarHalf size={"18px"} />
                      </div>
                      <span style={{ marginTop: "3px", fontSize: "15px" }}>
                        289
                      </span>
                    </div>
                    <div className="mt-2 mb-0 text-muted ">
                      <span>
                        <FaLocationDot
                          size={"16px"}
                          style={{ marginTop: "-3px" }}
                        />
                      </span>
                      <span className="ms-2">Lahore</span>
                      {/* <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span classNAme="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span> */}
                    </div>
                    <p className="text-truncate w-100 mt-3 mb-4 mb-md-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">14.99/-</h4>
                      {/* <span className="text-danger">
                        <s>$21.99</s>
                      </span> */}
                    </div>
                    {/* <h6 className="text-success">Free shipping</h6> */}
                    <div className="d-flex flex-column mt-4">
                      <div className="d-none d-md-block btn btn-success btn-sm">
                        Details
                      </div>
                      <div className="d-block d-md-none btn btn-success">
                        Details
                      </div>
                      <div className="btn btn-outline-success btn-sm mt-2">
                        Add to favourites&nbsp;{" "}
                        <span>
                          <FaHeart style={{ marginBottom: "2px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveDrawer>
  );
};

export default Categories;
