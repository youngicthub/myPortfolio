import React from "react";
import "./testimonial.css";
import Avata1 from "../../../src/assets/avata1.jpg";
import Avata2 from "../../../src/assets/avata2.jpg";
import Avata3 from "../../../src/assets/avater3.jpg";
import Avata4 from "../../../src/assets/avata4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avata: Avata1,
    name: "Mr. Smile",
    review:
      "You are very good at your work. The design of the website is visually appealing and professional. The layout is clean and user-friendly, making it easy for visitors to navigate and find the information they need. The color scheme and graphics used complement and many others.",
  },

  {
    avata: Avata2,
    name: "Mr Sam",
    review:
      "I so trust your services. One of the standout features of the website is its responsiveness. It looks great and functions seamlessly across different devices and screen sizes. This has significantly improved the user experience and ensured that my website is accessible to a wider audience.",
  },

  {
    avata: Avata3,
    name: "Dr. Chris",
    review:
      "The team also implemented effective SEO strategies, which have helped my website rank higher in search engine results. As a result, I have seen a noticeable increase in organic traffic and online visibility. The integration of social media buttons and the option to share content.",
  },

  {
    avata: Avata4,
    name: "Mr Victor",
    review:
      "In terms of functionality, the website performs flawlessly. The loading speed is fast, and all the links and forms are working correctly. The content management system provided allows me to easily update and manage the website on my own, without requiring extensive technical knowledge.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container containerTestimonials"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avata, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clientAvata">
                <img src={avata} alt="Avata" />
              </div>
              <h5 className="clientName">{name}</h5>
              <small className="clientReview">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
