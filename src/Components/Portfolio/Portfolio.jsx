import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // Determine slides per view based on screen width
    const slidesPerView = window.innerWidth >= 768 ? 2 : 1;

    return (
        <div className="portfolio" id="portfolio">
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="Sidebar Project" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="Ecommerce Project" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="Music App Project" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="HOC Project" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
