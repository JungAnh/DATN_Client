import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Banner = () => {
  const theme = useTheme();
  return (
    <section className="section-banner">
      <Box sx={{
        padding: "12px",
        backgroundColor: theme.palette.secondary.main
      }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box>
              <Link
                to="#"
                style={{
                  display: "block",
                  height: "550px",
                }}
              >
                <img
                  src={
                    "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/53641300_255148452030734_6474006674314100736_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=lskE7Z0B0SYAX8Q1ZDf&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfB-7l37inseaAxU_pQEf21sjuXdbjkTFFNI3b2GoN8BWA&oe=6487BF21"
                    
                  }
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                
              </Link>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Link
                to="#"
                style={{
                  display: "block",
                  height: "550px",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dhypn6jgk/image/upload/v1682666111/IT_UTC2/Logo_Banner/343747645_465747852400946_6440733867970833835_n.jpg_siptkl.jpg"
                  }
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </section>
  );
};

export default Banner;
