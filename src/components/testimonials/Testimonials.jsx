import React from "react";
import "./testimonials.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      avatar: "",
      name: "M. Ekelschot",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, voluptatem!",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map((review, i) => {
          return (
            <SwiperSlide className="testimonial" key={i}>
              <div className="client__avatar">
                <img src={review.avatar} alt="klant" />
              </div>
              <h5 className="client__name">{review.name}</h5>
              <small className="client__review">{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
