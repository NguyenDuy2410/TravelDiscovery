import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";
import style from "./news_Content.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const cls = classNames.bind(style);
function NewContent({ rota, img, title, content }) {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const element =
        rota % 2 === 0 ? (
            <div data-aos="fade-down" className={cls("NewContent")}>
                <div className={cls("contentContainer")}>
                    <img src={img} alt="" />

                    <div className={cls("content")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        {/* <i>{t("TOURISTATTRACTION.READ_MORE")}</i> */}
                    </div>
                </div>
            </div>
        ) : (
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="100"
                className={cls("NewContent")}
            >
                <div
                    style={{ marginLeft: "4%", marginRight: "4%" }}
                    className={cls("contentContainer")}
                >
                    <div className={cls("content")}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        {/* <i>{t("TOURISTATTRACTION.READ_MORE")}</i> */}
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        );

    return element;
}

export default NewContent;
