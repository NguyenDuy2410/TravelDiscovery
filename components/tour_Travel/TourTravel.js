import React from "react";
import { useTranslation } from "react-i18next";
import { locales } from "i18n";
import { dataTour } from "../../JsonData/FakeData";
import { dataTourEN } from "../../JsonData/FakeData";
import Slider from "react-slick";
import classNames from "classnames/bind";
import style from "./TourTravel.module.scss";
import TourItem from "./tour_item/TourItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cls = classNames.bind(style);

function TourTravel() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const settings = {
        dots: true,
        // autoplay: true,
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
    const currentLanguage = locales[i18n.language];
    const dataTourTravelFinal =
        currentLanguage === "Tiếng Việt" ? dataTour : dataTourEN;

    return (
        <div className={cls("TourTravel")}>
            <div className={cls("Tour")}>
                <h1>{t("TOP_PLACE")}</h1>

                <Slider {...settings}>
                    {dataTourTravelFinal.map((v) => {
                        return (
                            <TourItem
                                key={v.tourTravel_id}
                                image={v.tourInfo.image}
                                location={v.tourInfo.location}
                                quantity={v.tourInfo.quantity}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default TourTravel;
