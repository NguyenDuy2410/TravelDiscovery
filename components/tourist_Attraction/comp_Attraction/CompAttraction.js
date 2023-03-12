import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./CompAttraction.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const cls = classNames.bind(style);
import { useTranslation } from "react-i18next";

function CompAttraction({ rota, img, title, content, city }) {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const element =
        rota % 2 == 0 ? (
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={cls("CompAttraction")}
            >
                <div className={cls("CompAttraction_Top")}>
                    <div className={cls("location_Image")}>
                        {img.map((value, index) => {
                            return <img key={index} src={value} alt="" />;
                        })}
                    </div>
                    <div className={cls("infor_Location_Right")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <span>{t("TOURISTATTRACTION.CITIES")}:</span>
                        <ul>
                            {city.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className={cls("CompAttraction")}
            >
                <div className={cls("CompAttraction_Top")}>
                    <div className={cls("infor_Location_Left")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <span>{t("TOURISTATTRACTION.CITIES")}:</span>
                        <ul>
                            {city.map((value, index) => {
                                return <li key={index}>{value}</li>;
                            })}
                        </ul>
                    </div>
                    <div className={cls("location_Image")}>
                        {img.map((value, index) => {
                            return <img key={index} src={value} alt="" />;
                        })}
                    </div>
                </div>
            </div>
        );
    return element;
}

export default CompAttraction;
