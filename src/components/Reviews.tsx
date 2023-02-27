import React from "react";
import Slider from "react-slick";
import { ReviewsListSertificates } from "../utils/constants";
import Fancybox from "../components/Fancybox";

const Reviews = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div id="reviews">
      <Fancybox>
        <Slider {...settings}>
          {ReviewsListSertificates.map(
            (review) =>
              review.image && (
                <div className="item" key={review.id}>
                  <a
                    className="fancybox_img"
                    data-fancybox="gallery"
                    href={`images/${review.image}`}
                  >
                    <span className="review_img">
                      <span className="review_overlay"></span>
                      <img src={`images/${review.image}`} alt="Отзывы" />
                    </span>
                  </a>
                </div>
              )
          )}
        </Slider>
      </Fancybox>
    </div>
  );
};

export default Reviews;
