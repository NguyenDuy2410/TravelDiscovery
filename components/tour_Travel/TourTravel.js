import React from "react";
import JsonData from "../../JsonData/tour_info.json";
import Slider from "react-slick";
import classNames from "classnames/bind";
import style from "./TourTravel.module.scss";
import TourItem from "./tour_item/TourItem";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const cls = classNames.bind(style);

function TourTravel() {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cls("TourTravel")}>
            <div className={cls("Tour")}>
                <h1>Địa điểm hàng đầu</h1>

                <Slider {...settings}>
                    {JsonData.map((v) => {
                        return (
                            <TourItem
                                key={v.tourTravel_id}
                                image={v.dataTour.image}
                                location={v.dataTour.location}
                                quantity={v.dataTour.quantity}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default TourTravel;
