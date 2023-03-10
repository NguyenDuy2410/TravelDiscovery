import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./InfoForecast.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const cls = classNames.bind(style);
function InfoForecast({ index, img, date, temperature }) {
    let day = new Date().getUTCDay();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 500 + 500}
            className={cls("InfoForecast")}
        >
            <div>
                <div style={{ padding: "2em" }}>
                    <img src={img} alt="" />
                    <h2>{date[day]}</h2>
                    <h3>
                        {temperature}
                        <sup>o</sup>C
                    </h3>
                </div>
            </div>
        </div>
    );
    AOS.init();
}

export default InfoForecast;
