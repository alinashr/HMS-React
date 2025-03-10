import React, { useEffect } from "react";
import img1 from "../assets/s3.jpg"
import img2 from "../assets/s1.jpg"
import img3 from "../assets/s2.jpg"
import AOS from "aos";

const Carousel = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-100">
          <div className="carousel-item active" data-bs-interval="10000" data-aos="zoom-in">
            <img
              src={img1}
              className="d-block w-100 sm:h-24 h-auto"
              
              alt="..."
            />
          </div>

          <div className="carousel-item" data-bs-interval="2000" data-aos="zoom-in">
            <img
              src={img2}
              className="d-block w-100"

              alt="..."
            />
          </div>

          <div className="carousel-item" data-bs-interval="2000" data-aos="zoom-in">
            <img
              src={img3}
              className="d-block w-100"
              
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
