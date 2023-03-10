import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../JsonData/FakeData";
import { dataEN } from "../../JsonData/FakeData";
import classNames from "classnames/bind";
import style from "./TravelPackage.module.scss";
import PakageItem from "./package_Item/PakageItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { locales } from "i18n";

const cls = classNames.bind(style);
function TravelPackage() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const settings = {
        dots: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
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
    const dataPakageFinal = currentLanguage === "Tiếng Việt" ? data : dataEN;
    return (
        <div className={cls("TravelPackage")}>
            <img className={cls("image")} src="./image/vinhHaLong.jpg" alt="" />
            <div className={cls("title_Tour")}>
                <h1 style={{ marginTop: "2.2em" }}>
                    {t("TRAVEL_PACKAGE.SIGHTSEEING_TOUR_PACKAGE")}
                </h1>
                <h3 style={{ marginTop: "0.5em" }}>
                    {t("TRAVEL_PACKAGE.SIMPLIFY_TRAVEL_SCHEDULE")}
                </h3>
            </div>
            <div className={cls("PakegeItem")}>
                <Slider {...settings}>
                    {dataPakageFinal.map((v) => {
                        return (
                            <PakageItem
                                key={v.pakageItem_id}
                                image={v.image}
                                destination={v.itemContent.destination}
                                title={v.itemContent.title}
                                price={v.itemContent.price}
                                content={v.itemContent.content}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default TravelPackage;
