import React from "react";
import { useTranslation } from "react-i18next";
import { dataTourist } from "../../JsonData/FakeData";
import { dataTouristEN } from "../../JsonData/FakeData";
import classNames from "classnames/bind";
import style from "./TouristAttraction.module.scss";
import CompAttraction from "./comp_Attraction/CompAttraction";
import { locales } from "i18n";
const cls = classNames.bind(style);
function TouristAttraction() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = locales[i18n.language];
    const dataTouristFinal =
        currentLanguage === "Tiếng Việt" ? dataTourist : dataTouristEN;
    return (
        <div className={cls("TouristAttraction")}>
            <div className={cls("h")}>
                <h1>{t("TOURISTATTRACTION.TOURIST_CITY_ONLY")}</h1>
                <h3>{t("TOURISTATTRACTION.EXPLORE_ALL_CITIES_IN_VIETNAM")}</h3>
            </div>
            <div style={{ height: "80%" }}>
                {dataTouristFinal.map((v, i) => {
                    return (
                        <CompAttraction
                            key={v.dataTourist_id}
                            rota={i}
                            img={v.dataTouristComt.img}
                            title={v.dataTouristComt.title}
                            content={v.dataTouristComt.content}
                            city={v.dataTouristComt.city}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TouristAttraction;
