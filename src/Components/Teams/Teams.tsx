import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamsCard from './TeamsCard';
import colors from '../Core/colors';
 export default function Teams( ) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return(
        <div style={{height: '100%', margin: '20px 6vw'}}>
      <Carousel
       arrows={false} renderButtonGroupOutside={true}
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
        itemClass="carousel-item-padding-40-px"
      >
          <TeamsCard color={colors.orange} name="7405K">Hello!</TeamsCard>
          <TeamsCard color={colors.orange} name="7405R">Hello!</TeamsCard>
          <TeamsCard color={colors.orange} name="7405M">Hello!</TeamsCard>
          <TeamsCard color={colors.orange} name="7405N">Hello!</TeamsCard>
          <TeamsCard color={colors.orange} name="7405X">Hello!</TeamsCard>
      </Carousel>
      </div>
      )      
 }
 
