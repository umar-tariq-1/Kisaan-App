import React, { useState } from "react";

import "./ProductCard.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// provide image, rating, name, city, description, price, ratingsCount, id

const ProductCard = ({
  image,
  rating,
  name,
  city,
  description,
  price,
  ratingsCount,
  id,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [parent] = useAutoAnimate();

  const halfStar = Math.ceil(rating - Math.floor(rating));

  const handleImageLoaded = () => {
    setImgLoaded(true);
  };

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow border rounded-3">
          <div className="card-body">
            <div className="row">
              <div
                className="col-md-4 col-lg-3 mb-4 mb-lg-0 image-div"
                ref={parent}
              >
                {/* <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    > */}
                <img
                  src={`https://ik.imagekit.io/umartariq/productImages/${image}?tr=pr-true,ar-11-8,h-240`}
                  className="card-img w-100"
                  style={{ display: imgLoaded ? "block" : "none" }}
                  alt="&nbsp;Loading..."
                  onLoad={handleImageLoaded}
                />
                {!imgLoaded && (
                  <div
                    className="w-100 h-100 d-flex align-items-center justify-content-center py-5 py-md-4"
                    style={{ backgroundColor: "rgba(211, 211, 211, 0.2)" }}
                  >
                    <svg id="imageLoader" viewBox="25 25 50 50">
                      <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                  </div>
                )}
                {/* </MDBRipple> */}
              </div>
              <div className="col-md-8 col-lg-6">
                <h3>{name}</h3>
                <div className="d-flex flex-row">
                  <div className="d-flex mb-1 me-2">
                    <div className="text-warning">
                      {Array.from({ length: rating }, (_, index) => (
                        <FaStar size={"17px"} key={index} />
                      ))}
                      {halfStar !== 0 && <FaStarHalf size={"17px"} />}
                    </div>
                    <div>
                      {halfStar !== 0 && (
                        <FaStarHalf
                          style={{
                            transform: "scaleX(-1)",
                            marginLeft: "-17px",
                          }}
                          size={"17px"}
                          color="lightGray"
                        />
                      )}
                      {Array.from({ length: 5 - rating }, (_, index) => (
                        <FaStar size={"17px"} key={index} color="lightGray" />
                      ))}
                    </div>
                  </div>
                  <span style={{ marginTop: "3px", fontSize: "14px" }}>
                    {ratingsCount}
                  </span>
                </div>
                <div className="mt-2 mb-0 text-muted ">
                  <span>
                    <FaLocationDot
                      size={"16px"}
                      style={{ marginTop: "-3px" }}
                    />
                  </span>
                  <span className="ms-2">{city}</span>
                  {/* <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span classNAme="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span> */}
                </div>
                <p className="text-truncate w-100 mt-3 mb-4 mb-md-0">
                  {description}
                </p>
              </div>
              <div className="col-md-6 col-lg-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-2">{price}/-</h4>
                  {/* <span className="text-danger">
                        <s>21.99/-</s>
                      </span> */}
                </div>
                {/* <h6 className="text-success">Free shipping</h6> */}
                <div className="d-flex flex-column mt-4">
                  <div
                    style={{ fontSize: "17px" }}
                    className="d-none d-md-block btn btn-success btn-sm"
                  >
                    Details
                  </div>
                  <div
                    style={{ fontSize: "17px" }}
                    className="d-block d-md-none btn btn-success"
                  >
                    Details
                  </div>
                  <div
                    style={{ fontSize: "14px" }}
                    className="btn btn-outline-success btn-sm mt-2"
                  >
                    Add to favourites&nbsp;{" "}
                    <span>
                      <FaHeart
                        style={{ marginBottom: "4px" }}
                        color="#f91982"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
