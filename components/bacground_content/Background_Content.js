import React, { useState, useEffect } from "react";
import "animate.css";
import { useTranslation } from "react-i18next";
import { dataWeather } from "../../JsonData/FakeData";
import { infoForecast } from "../../JsonData/FakeData";
import classNames from "classnames/bind";
import style from "./Background_Content.module.scss";
import { CgArrowLongDownE } from "react-icons/cg";
import InfoCity from "./info_City/InfoCity";
import InfoForecast from "./info_Forecast/InfoForecast";

const cls = classNames.bind(style);
function Background_Content() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const handleCroll = () => {
        window.scrollTo({
            top: 370,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=10.75&lon=106.6667&cnt=6&appid=12249cb52be2520de2813204ed4158d0"
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(data);
    return (
        <div className={cls("Background_Content")}>
            <img src="./image/vietnamguide.png" alt="" />
            <div className={cls("discount_Tickets")}>
                {/* <div>
                    <p>PACKAGE</p>
                    <p>SALE</p>
                    <p>-50%</p>
                    <div className={cls("button_buy")} o>
                        Shop now
                    </div>
                </div> */}

                <div style={{ width: "80%", height: "100%" }}>
                    <div className={cls("infoCity")}>
                        {dataWeather.map((value, index) => {
                            return (
                                <InfoCity
                                    key={value.dataWeather_id}
                                    data={data}
                                    city={value.dataInfoCity.city}
                                    date={value.dataInfoCity.date}
                                    windPower={value.dataInfoCity.windPower}
                                    amountOfWater={
                                        value.dataInfoCity.amountOfWater
                                    }
                                    temperature={value.dataInfoCity.temperature}
                                    img={value.dataInfoCity.img}
                                />
                            );
                        })}
                    </div>
                    <div className={cls("infoForecast")}>
                        {infoForecast.map((value, index) => {
                            return (
                                <InfoForecast
                                    index={index}
                                    key={value.infoForecast_id}
                                    img={value.dataInfoForecast.img}
                                    date={value.dataInfoForecast.date}
                                    temperature={
                                        value.dataInfoForecast.temperature
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cls("iconScroll")}>
                <h3>{t("ROLL_MORE")}</h3>
                <CgArrowLongDownE
                    className={cls(
                        "animate__animated animate__bounce animate__slow"
                    )}
                    onClick={handleCroll}
                />
            </div>
        </div>
    );
}

export default Background_Content;
