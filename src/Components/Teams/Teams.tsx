import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamsCard from "./TeamsCard";
import colors from "../Core/colors";
import Fade from "react-reveal/Fade";
import { Typography } from "@material-ui/core";

export default function Teams() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },

    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1224, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div style={{ height: "100%", margin: "20px 6vw" }} id="teams">
      <Fade up>
        <Typography align="center" variant="h1">
          Our Teams
        </Typography>
        <br />

        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          autoPlay
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-0-px"
        >
          {["7405K", "7405R", "7405M", "7405N", "7405X"].map((elem) => (
            <TeamsCard color={colors.orange} name={elem}>
              Hello!
            </TeamsCard>
          ))}
        </Carousel>
      </Fade>
    </div>
  );
}
