import React from "react";
import { data } from "../../JsonData/dataTour";
import classNames from "classnames/bind";
import style from "./TravelPackage.module.scss";
import PakageItem from "./package_Item/PakageItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cls = classNames.bind(style);
function TravelPackage() {
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
    return (
        <div className={cls("TravelPackage")}>
            <img className={cls("image")} src="./image/vinhHaLong.jpg" alt="" />
            <div className={cls("title_Tour")}>
                <h1 style={{ marginTop: "2.2em" }}>Tour tham quan trọn gói</h1>
                <h3 style={{ marginTop: "0.5em" }}>
                    Đơn giản hóa lịch trình du lịch
                </h3>
            </div>
            <div className={cls("PakegeItem")}>
                <Slider {...settings}>
                    {data.map((v) => {
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
